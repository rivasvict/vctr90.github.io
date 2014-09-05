---
layout: post
title: "Angular ngRoute client-side routing with a nodeJs express server"
---

A very common problem when combinating AngularJs with a NodeJs server is client-side rouiting. I've found some nice posts on the internet that guided me towards to a partial solution. I say "partial" because I did not succeed at overcoming my problem and this was simply because those guides were for older node versions. So I will give you the solution I mamaged for this problem in version 0.10.28.

**This is by far the most useful article I found**

> - [Recipes with angular - Implementing client-side routing](http://bywordapp.com/markdown/syntax.html)

That article was the best approximation I had to the right solution, although It did not work on my node web server (version 0.10.28).

By default after any request Express is preconfigurated to render the whole layout and then it will load angular because it is part of the layout. This means that in order to use client-side routing by Angular you will need to catch its request after express rendering. Then you are going to be able to call partial jade templates from server directories.

But first...

In your ```app.js``` or ```server.js``` you need to ask express to be aware of your partials directory in order to make a success jade partial template rendering

	//I have put my partials directory under views/
	app.set('partials',path.join(__dirname,'views/partials'));
	app.set('view engine','jade');

You can now tell express to catch all requests from client side (angular)
In your ```routes/index.js``` you can simply do:

	var express = require('express');
	var router = express.Router();

	//This is optional if you want to send some parameters to the route like title
	router.get('/', function(req, res) {
		res.render('index', { title: 'vctr90' });
	});


	//This is the guy who does the dirty work. It catches all routes by using the wildcard symbol "*" behind the root
	//and then you set the route as a simple url parameter
	router.get('*/:route',function(req, res){
		//Get the file name from parameters
		var filename = req.params['0'];
		//Asynchronously rendering client-side routes from partials folder
		res.render('partials/' + filename);
	});

	module.exports = router;

From this point you will just need to set either the links from your main jade template and angular routes with ngRoute

In your ```layout.jade``` or whatever you have 

	ul
		a(href='#/about')
			li(id='about')
				| About
		a(href='#/projects')
			li(id='projects')
				| Projects

and in your ```public/javascripts/app.js```

	.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		$routeProvider.when('/',{templateUrl:'../views/templates/default.jade',controller:'defaultCtrl'})
			.when('/about',{templateUrl:'../views/partials/about.jade',controller:'aboutCtrl'})
			.when('/projects',{templateUrl:'../views/partials/projects.jade',controller:'projectsCtrl'});
	}]);

After all of this you should be making partial rendering in your ng-view as usual.

I hope this helps you out.

If there is any question or correction please write to my twitter account:
[@vctr90](http://twitter.com/vctr90)
