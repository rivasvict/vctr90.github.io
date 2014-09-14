---
layout: post
title: "JS/tip: Get auto-set height of a div based on its padded content"
---

If you need to get height of a div with non-set css height but based on its content this is the post you are looking for.

As you can notice at the index of this blog I have an unordered two-columms based list of post. Gues what? Its positioning is based on their height in order to fill the shortest columm of the current element.

Unfortunately, you cannot get the real rendered height of an element which we haven't set previously in ```style``` directive or css stylesheet with jQuery or JavaScript unless you tell your script to be executed once the window has fully loaded. This is because you are not able to read a real value if you don't make sure all elemennts are rendered.

You can fix this by wraping all your script inside a jQuery ```.load()``` callback

	jQuery(window).load(function(){
		//Do some other stuff
			var renderedDivHeight = $('#myDiv').height();
			cconsole.log('The real rendered height of #myDiv based on its content is: ' + renderedDivHeight);
		//Do some other stuff
	});

If there is any question or correction please write to my twitter account:
[@vctr90](http://twitter.com/vctr90)
