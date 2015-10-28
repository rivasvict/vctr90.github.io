---
published: true
---

## Where to choose TypeScript over VanillaJs

# First of all:

We need to define TypeScript

    - **TypeScript: **Is a superset of JavaScript that comiples to plain JavaScript.
    	This means every single line of code written in VanillaJs is going to work well over TypeScript compiler.
        
# Advantages
    - **Type checking: **This is one of the core functionality of TypeScript. It allows you to define types for every variable or returning function over VanillaJs.
    - **Scalability: **As we might know Javascrtipt itself is not a language specifically designed for larger projects. This means it laks of some important structural mechanisms like classes, modules or maybe interfaces. Here is where TypeScript comes to help.
    - **Compiling time type checking: **This allows you to see a potential type bug that can cause an application to crash. It could mitigate the need of a unit testing.
	- **For visual Studio users: **Type checking is also working when you are coding. Which means you are able to see a bug even before JavaScript compilation.
    - **Angular 2 is using it (not sure yet if it is an advantage): **Angular team decided to use TypeScript for their new version.
    - **It is still JavaScript: **It is still Javascript with some aditions.
    
# A good initiative.

As you see in the title. This is a good initiative from Michrosoft's team but type checking could be a con when we talk about litle applications. It can (in my very personal opinion) slow down development because we might need flexibility that a non-typed language can offer. If you are really likely to use full TypeScript features (even taking advantage of type checking) then it is a good idea to adopt it. If you are just going to use structural mechanisms and love VanillaJs with its flexibility, I will higly encourage you to check [ES6](http://www.ecmascript.org/) with [Babel](https://babeljs.io/) (Kind of an interpreter for new unsuported features from ES6). ES6 Brings structural mechanisms to VanillaJs (yaaiii) and some other feature but with no type checking.

# In my personal opinion

I think we obviously need to start using one of both TypeScript or VanillaJs (ES6 with Babel) now because that seems to be the way future JavaScript will look like. I would prefeer to use ES6 with Babel if we are not obligated to use any framework that uses it. This is because ES6 represents a standard and depends on a larger community than TypeScript.

Just in the case we need to use Angular 2 or of it is extremely important types checking we should use TypeScript, otherwise ES6 will be ok.

## Conclusion

TypeScript will get you to use type strict validation, which is nice for early bug detection and helps to mitigate the need of unit testing. It brings structural mechanisms to the game (sounds good and allows you to scale larger applicatins) but ES6 also bring them as well with other features and can be used today with Babel. If we are going to use frameworks that require the strict use of TypeScript (such as Angular 2) it is totally necesary to use it.
