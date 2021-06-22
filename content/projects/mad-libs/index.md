---
title: "BHTP - Quote Call To Action Form"
date: 2020-10-01
draft: false
resources:
- name: screenshot
  src: images/screenshot.png
  params:
    alt: Screenshot of BHTP CTA Form
projectUrls:
    - "[www.bhtp.com/](https://www.bhtp.com/)"
list:
    - Condense quoting path into simple form
    - Cross framework development with web components
    - Accessible form interactions
summary: Condensed travel insurance quoting built with web components.
description: Condensed travel insurance quoting built with web components.
---

It was discovered that our quoting path had too many steps before getting a 
price in front of a customer. The goal was to condense the quote path into a single
form that allowed a traveler to enter all of the information required and manage it 
all on a single page.

We wanted to embed this form in multiple websites, so it needed to be built in 
a way to support an upcoming project written in React, in addition to the 
team's primary development framework, Angular.

Web Components was the clear choice for this project. It allowed the form to be 
built on browser standards, and easily implemented with any front-end framework.
StencilJS was chosen as a "[not-a-framework](https://stenciljs.com/docs/faq#is-stencil-a-framework)" 
to improve development experience for working with web components.

This form was the first project for the team that requried full ADA accessibility standards.
Each form element is accessible via keyboard, and will announce choices clearly when a
screen reader is enabled.

After the launch of the new form, quoting conversion was measured in A/B testing. 
The new form showed that more customers completed the form, and ultimately viewed prices 
of our products, fulfilling the goal of the project. User's interactions were monitored 
after launch, and UX tweaks were made to smooth out the expereince.