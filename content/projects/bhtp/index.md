---
title: "Berkshire Hathaway Travel Protection Purchase Path"
date: 2016-01-01
draft: false
resources:
- name: screenshot
  src: images/bhtp.jpg
  params:
    alt: Screenshot of BHTP Website
projectUrls:
    - "[www.bhtp.com/v2](https://www.bhtp.com/v2)"
list:
    - Rewrite of existing site using Angular 2
    - First exposure to TypeScript
    - Complex application architecture
summary: A complex web application rewritten with Angular 2 and Typescript. 
---

This was the first major project I worked on after I was hired at Berkshire Hathaway Travel Protection.
The team was tasked with rewriting our purchase path for selling travel insurance. Our existing site
used AngularJS, so naturally we decided to continue with Angular 2. However, we jumped the gun and started
development using the Angular 2 Beta.

At this point, Angular 2 was not new, but it was still challenging to learn how to use a framework that
had not been officially released yet. Working though changing requirements and changing framework APIs
was a huge struggle. We had to change our implementation of client side routing three times due too
Angular changing the implementation. (That's why Angular 3 doesn't exist).

The best thing I learned from this project was TypeScript. Having concrete types in JavaScript is such
a luxury, and I believe that it saved us from writing a lot of bugs. I'll always reach for TypeScript 
over JavaScript if the project warrants it.

I was responsible for building the backbone of the application. The path consisted of about a dozen steps,
so it was important to keep track of validation and the user's progress. I had to ensure
that the user was allowed to leave the step they currently were on, and make sure they didn't access any
steps without completing the previous ones. Navigating back and forth between steps was a complicated problem.
You could advance forward by clicking next, you could click the tabs at the top of each step, you could access
the step directly by URL, or be directed backwards in the path via a link to make changes. No matter how the user
accessed each step, they needed to be accurately notified what step they were on and if there were any problems.

I had two big takeaways from this project:
1. Don't use beta software to develop production applications.
1. State management is important! If I were to impalement this site again, I would use something like the Redux
pattern to manage the global application state.