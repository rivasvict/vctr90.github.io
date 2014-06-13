---
layout: post
title: "Reading files node"
---

Node file manipulation.
======================

How to read each line of a file and put it inside an array.
----------------------------------------------------------

- 1 Install fs module from npm

	```javascript
	$ npm install node-fs
	```

- 2 Create a file (it can be and has whatever you wish). For this case we used this file you are reading.

- 3 Create a new node script "fChecker.js"

- 4 In "fChequer.js" write the following:

	```javascript
	//Require file system management module
	var fs = require('fs');
	//Create an empty array to store all of the lines
	//This should be a global variable because that array is going to be set from a callback function
	linesArray = [];

	//Define a function for reading lines
	function readLines(input, func){
		//Remaining is the variable that is going to carry
		//the remaing string to process.
		var remaining = '';
		
		//Pass data as buffer of the read file to the handler (the function)
		input.on('data',function(data){

			//data at this point represents the buffer of the file we are working on
			//Appending data to a string
			remaining = data.toString();

			//index (in tis case) will be the number position at the end of the first line
			var index = remaining.indexOf('\n');
			while(index > -1){
				//This is the current line, a substring starting from 0 to the end of the first line as defined
				//in index variable
				var line = remaining.substring(0, index);
				//This positiones the remaining begining to the next line
				var remaining = remaining.substring(index + 1);
				func(line);
				index = remaining.indexOf('\n');
			}
		});

		//At the end of the buffer we ned to get the last part of it
		input.on('end', function(){
			if(remaining.length > 0){
				func(remaining);
			}
		});
	}

	function func(data){
		//Do your operations from lines comming from data.
		//In this case we are pushin each line to the array
		linesArray.push(data);
	}

	var input = fs.createReadStream(__dirname + '/node_file_manipulation.md');
	var file = readLines(input,func);
	```

Lets explain 3 of the lines that might seem confusing

```javascript
	var input = fs.createReadStream(__dirname + '/node_file_manipulation');
```

This creates a new read stream object and set its value to the input variable.

- Readable stream

	It is an abstraction of a source of data. In other words a representation of a file metadata and content in this case.
	Some event listeners can be added to it and executed due to some rules that comes from this object. We will cover that later.

	to read more (in detail) about stream object you can visit nodejs documentation [here](http://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options) at 'fs.createReadStream(path, [options])' explanation.

```javascript
	input.on('data',function(data){
```

As you might know .on() method attaches data to the stream and pass it to a handler function which is required in the next parameter. This function receives the data of our source as buffer that can be dedoded into a string (as a parameter). The handler function is triggered as soon as data is attached to the stream  by means of .on() method.

```javascript
	input.on('end',function(){
```

'end' is attached to the stream (read stream object) and it will be executed as soon as the last element of buffer is processed by 'data'.

**NOTE:** You must have 'data' attached first.

To read more about this event listener and other ones check nodeJs documentation [here](http://nodejs.org/api/stream.html#stream_class_stream_readable) at 'API for Stream Consumers`.

Victor Rivas.

Twitter:	[@vctr90](https://twitter.com/vctr90).

GitHub:		[vctr90](https://github.com/vctr90).
