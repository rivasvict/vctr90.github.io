---
layout: post
title: React/redux jwt express sign up in 
description: A simple guide on how to set up autentication and registration with react, redux, express abd jwt
published: true
---

# React/redux jwt express sign up in 

In the world of web development, one of the most common tasks is creating users and/or authenticating them. There are many tutorials out there on how to do that, I hope this is more than just one of them. I am glad you are here today and hope this adds more value the brilliant career path you have ahead.

## Pre-Requisites:

- React
- Redux
- Express
- Node

## Stetting up the stack:

### Express (assuming [you have nodeJs installed in your system](https://nodejs.org/en/download/)) 

### React / Redux

For the sake of this example we are going to use [create-react-app](https://create-react-app.dev/)

In simple terms, `create-react-app` is a library that helps us simplify the process of setting up a a server and the whole devops structure required for having either our production/development environment.

To install it, simply do:

`npm install create-react-app`

**Note:** there are various config options for this command, make sure you check them out.

At this point you should have a simple react app installed and ready to be modified for our own purpose.

Then we need to install redux, for this we need to add 2 npm packages:

1. `redux`: Library for handling global state management under the flux architecture. [More about redux](https://redux.js.org/)