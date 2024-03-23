# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![](./screenshot.jpg)

screenshot add in screenshot folder

### Links

- Solution URL: [https://github.com/yingruicheah/rock-paper-scissors/blob/main/rock-paper-scissors.html]

## My process

### Built with

- basic HTML, CSS and Javascript
-

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

There are few new things that i learned as below:

```html
change frame without using a new page or redirect to another page
<div id="step2" style="width:100%;margin:auto;text-align:center;display:none;justify-content:center;align-items: center;">
		<table class="step2container">
			<tr >
			<td>
				<span class="pickedtext">YOU PICKED</span>
			</td>
			<td>
			</td>
			<td>
				<span class="pickedtext">THE HOUSE PICKED</span>
			</td>
			</tr>
			...
</div>			
```
```css
animate box shadow by using transition
.hoverwincircle {
		border-radius:50%;
		display:flex;
		background-color: rgba(255, 255, 255, 0.05);
		justify-content:center;
		align-items: center;
		box-shadow: 
		0px 0px 0px 100px rgba(255, 255, 255, 0.05),
		0px 0px 0px 200px rgba(255, 255, 255, 0.025),
		0px 0px 0px 306px rgba(255, 255, 255, 0.01);
		transition: box-shadow 1.1s ease-in-out;
	}
```
```js
learned how to let computer ramdon do a selection
setTimeout(function() {
	cpupick = choices[Math.floor(Math.random() * choices.length)];
	document.querySelector('.blackcircle').classList.replace('blackcircle', 'whitecircle');
	document.getElementById('cpu').classList.add(cpupick+"color");
	document.getElementById('cpuimg').src = 'images/icon-'+cpupick+'.svg';
	document.getElementById('cpuimg').classList.add("step2img");
},500);
```

### Continued development

added more attractive animation or music when player win 

### Useful resources

- Sample of rock paper scissors (https://www.online-stopwatch.com/chance-games/rock-paper-scissors/#google_vignette) - Getting idea on no changing pages or redirect to other page when proceed next step
