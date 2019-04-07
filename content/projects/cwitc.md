---
title: "Central Wisconsin IT Conference"
date: 2019-01-01
draft: false
image: "/images/cwitc.png"
projectUrls:
    - "[https://cwitc.org](https://cwitc.org)"
list:
    - Built with Gatsbyjs
    - Hosted on Netlify
    - Data store in Firebase
    - Content Management with Contentful
---

Previously, the CWITC site was built with Wix. We wanted to move to a platform that allowed us to share session information
between our website and mobile app. We also wanted a way for the community to contribute to the site as an open source project.

I wanted to use a static-site generator because nearly the entire site was going to be the same for every user. However,
we have the ability for a user to log in to submit sessions, so there is need for a light client-side app. I chose Gatsby
because it delivers all the great advantages of a static-site while shipping React to the browser.

In order to share content with our mobile app, we needed a Content Management System that was separate from generating the
website. It was an easy decision to go with Contentful because of their great community support, especially for Gatsby.
The site utilitzes the Contentful API at build time to inject the content into the site, while the app will call the API at
startup to cache the content.

This project had a lot of firsts for me. It was my first time working on a React site, my first production site launched with Netlify, and my first time using a headless CMS. This paradigm is so great to work with, and I'm excited to continue to support
and enhance this site!