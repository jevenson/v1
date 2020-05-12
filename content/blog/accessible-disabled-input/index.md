---
title: "how to make disabled inputs accessible"
date: 2020-05-12
draft: true
tagline: ""
description: ""
---

I recently ran into a scenario where I had to disable a text input in a form. After adding the `disabled` attribute
on the element, I remembered that disabled elements do not receieve focus in the tab order. User's who use a screen reader
would not be able to focus on the input and know its value.

This was a problem, I wanted to make sure that every user was able to read the value of the input and know what it was for.

First, instead of using the `disabled` attribute, I replaced it with the `aria-disabled` attribute. This will alert assistive
technologies that the element is disabled. However, the input would still function normally, and still had normal styling.

I interecepted the keydown event on the input, and called `preventDefault()` on the event which prevented the user from typing
additional content into the input. This worked, but the flashing input cursor was still visible when the input had focus!

I did some research and I was able to find a clever solution using `text-shadow`. By setting the CSS `color` attribute of the 
input to `transparent`, the text and the input cursor were invisible. Then, setting `text-shadow: 0 0 0 black;` would display
the text in the input, but would not display the cursor!

This works because of the three zeroes in the `text-shadow` value. The first represents the horizontal offset, and the second
represents the vertical offset of the shadow. By keeping these both at zero, the shadow will appear directly beneath where the
text is. The third zero represents the blur of the shadow, which is normally used to soften the shadow or to add a glow effect.
We keep this at zero, otherwise our text would have a fuzzy effect.

All that is left is to style the input the same way a disabled input would be styled. Make sure to handle the `:focus` state
of the element as well. Often when an input is focused, it will change the border color, or add a slight `box-shadow`.
