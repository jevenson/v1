---
title: "how to make disabled inputs accessible"
date: 2020-05-12
draft: false
tagline: ""
description: ""
---

I recently ran into a scenario where I had to disable a text input in a form. After adding the `disabled` attribute
on the element, I remembered that disabled elements do not receieve focus in the tab order. Users that use a screen reader
would not be able to focus on the input and know its value.

This was a problem, I wanted to make sure that every user was able to read the value of the input and know what it was for.

First, instead of using the `disabled` attribute, I replaced it with the `aria-disabled` attribute. This will alert assistive
technologies that the element is disabled. However, the input would still function normally, and still had normal styling.

<script src="https://gist.github.com/jevenson/cac60fe18c43a3a56ee0b6c69a95d37c.js?file=index.html"></script>

I interecepted the keydown event on the input, and called `preventDefault()` on the event which prevented the user from typing
additional content into the input. This worked, but the flashing input cursor was still visible when the input had focus!

<script src="https://gist.github.com/jevenson/cac60fe18c43a3a56ee0b6c69a95d37c.js?file=index.js"></script>

I did some research and I was able to find a [clever solution](https://codepen.io/fxm90/pen/MpGQwL) using `text-shadow`. By setting the CSS `color` attribute of the 
input to `transparent`, the text and the input cursor were invisible. Then, setting `text-shadow: 0 0 0 black;` would display
the text in the input, but would not display the cursor!

<script src="https://gist.github.com/jevenson/cac60fe18c43a3a56ee0b6c69a95d37c.js?file=index.css"></script>

This works because of the three zeroes in the `text-shadow` value. The first represents the horizontal offset, and the second
represents the vertical offset of the shadow. By keeping these both at zero, the shadow will appear directly beneath where the
text is. The third zero represents the blur of the shadow, which is normally used to soften the shadow or to add a glow effect.
We keep this at zero, otherwise our text would have a fuzzy effect.

All that is left is to style the input the same way a disabled input would be styled. Make sure to handle the `:focus` state
of the element as well. Often when an input is focused, it will change the border color, or add a slight `box-shadow`.

Here is a codepen of it all working together. Notice the A11y Disabled Input can receive focus, but it still appears disabled,
and the content cannot be changed.

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="html,result" data-user="jevenson" data-slug-hash="jObpNbq" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Accessible Disabled Input">
  <span>See the Pen <a href="https://codepen.io/jevenson/pen/jObpNbq">
  Accessible Disabled Input</a> by Josh Evenson (<a href="https://codepen.io/jevenson">@jevenson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

To summarize:
1. Use `aria-disabled` instead of `disabled`
2. Disable input by intercepting the `keydown` event
3. Hide the blinking cursor using `text-shadow`
4. Style the input as if it were disabled