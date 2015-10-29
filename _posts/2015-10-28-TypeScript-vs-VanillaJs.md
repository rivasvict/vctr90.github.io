---
layout: post
title: TypeScript vs VanillaJs
description: An article to choose one or another technology
published: true
---

Where to choose TypeScript over VanillaJs
=========================================

# Introduction:

JavaScript has been dominant over the years since its creation back in 1996 as a client-side scripting language. This was a language created approximately in 10 days (very crazy). From that momment JavaScript has never stopped growing. All of this growth was a bit vertiginous and as a result it became a language that was suitable for litle apps and not for larger ones, due to a lack of more advanced features. This is the reason why we are here. TypeScript alongside ES6 (most recent released EcmaScript version) claims to be a solution for those scalability problems that JavaScript has been carrying over the years.

# First of all:

We need to define TypeScript

__TypeScript:__ Is a superset of JavaScript that comiples to plain JavaScript.
    	This means every single line of code written in VanillaJs is going to work well over TypeScript compiler. It uses all ES6 features and includes type strict checking, interfaces and some other.
        
# Advantages
__Type checking:__ This is one of the core functionality of TypeScript. It allows you to define types for every variable or returning function over VanillaJs.

__Scalability:__ As you might know Javascrtipt itself is not a language specifically designed for larger projects. This means it laks of some important structural mechanisms like classes, modules or maybe interfaces. Here is where TypeScript with ES6 comes to help.

__Compiling time type checking:__ This allows you to see a potential type bug that can cause an application to crash. It could mitigate the need of a unit testing.

__For visual Studio users:__ Type checking is also working when you are coding. Which means you are able to see a bug even before JavaScript compilation.

__Angular 2 is using it (not sure yet if it is an advantage):__ Angular team decided to use TypeScript for their new version.

*Note: * Angular 2 also has a JavaScript version with ES5 (adapted to the now ways of Angular2 apps) which I am not sure if it is going to last long over the time.

__It is still JavaScript:__ It is still Javascript with some aditions.
    
# A good initiative.

As you see in the title. This is a good initiative from Michrosoft's team but type checking could be a con when we talk about litle applications. Implementing strict type checking could (in my very personal opinion) slow down development because we might need the flexibility that a non-typed language can offer, including TypeScript without the use of type checking is like doing nothing. If you are really likely to use full TypeScript features (even taking advantage of type checking) then it is a good idea to adopt it. Provided that you are just going to use structural mechanisms and love VanillaJs with its flexibility, I will higly encourage you to check [ES6](http://www.ecmascript.org/) with [Babel](https://babeljs.io/) (Kind of an interpreter for new unsuported features from ES6). ES6 Brings structural mechanisms to VanillaJs (yaaiii) and some other feature but with no type checking.

# In my personal opinion

I think we obviously need to start using one of both TypeScript or VanillaJs (ES6 with Babel) now because that seems to be the way future JavaScript will look like. I would prefeer to pick VanillaJs with ES6 features if we are not obligated to use any framework that requires TypeScript. VanillaJs uses ES6 standarization which I guess will be massively supported by browsers soon and will become the future of JavaScript.

TypeScript adds some new optional "fancy" features that might or might not improve the quality of the code (depends on the context and the scalability of the app).

Just in the case it is extremely important types checking, we should use TypeScript, otherwise VanillaJs with ES6 implementations and BabelJs will be ok.

## Conclusion

TypeScript will get you to use type strict validation, which is nice for early bug detection and helps to mitigate the need of unit testing. It brings structural mechanisms to the game (sounds good and allows you to scale larger applications) but ES6 also bring them as well with other features and can be used today with Babel. If we are going to use frameworks that require the strict use of TypeScript, we will need to use it.

# References:

- TypeScript official page: [TypeScript](http://www.typescriptlang.org/)
- This post camparing TypeScript, old JavaScript, ES6 JavaScript and CoffeScript: [Comparing TypeScript, ES6 and CoffeScript](http://www.slideshare.net/NeilGreen1/type-script-vs-coffeescript-vs-es6)
- Wikipedia ES6: [Wikipedia ES6](https://en.wikipedia.org/wiki/ECMAScript)

Written by [@vctr90](http://twitter.com/vctr90)
