# game-odin

Overview

Simple game about rock paper and siccor.

First version can only be played in the console.

Now we are adding UI so is easy to interact with user.

Issue #1 Bubbling from the child elements
I attached a event listener to a div container that has all the childrens. It's executing when i click anywhere on the childrens.

RESOLVED: Did a validation with e.target.tagName, i is equal to my button, then we can execute the rest of the code. Otherwise does nothing
