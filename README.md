# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - FAQ accordion solution](#frontend-mentor---faq-accordion-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./images/Screenshot%202023-12-22%20094456.png)

### Links

- Solution URL: [FAQ Accordion](https://github.com/ObiFaith/FAQ-Accordion)
- Live Site URL: [Github Page](https://obifaith.github.io/FAQ-Accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
Center a div without using flex or grid

```css
.faq{
    /* Center Accordion */
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;   
}
```

```js
answers.forEach(answer =>  {
  let questionImg = answer.previousElementSibling.firstElementChild;
  if (answer.classList.contains('visible')) {   
      questionImg.src = questionImg.src.replace('plus', 'minus');
      if (e.target.nextElementSibling != answer){
          answer.classList.remove('visible');
          questionImg.src = questionImg.src.replace('minus', 'plus');  
      }
  }   
  else
      questionImg.src = questionImg.src.replace('minus', 'plus');     
  
  return; 
})
```

### Continued development
 - CSS Transform propeties & CSS Animation
 - Build more project using JS

## Author

- Twitter - [@Faith_Dev_](https://www.twitter.com/Faith_Dev_?s=09)
- Frontend Mentor - [@ObiFaith](https://www.frontendmentor.io/profile/ObiFaith)
- LinkedIn - [@Faith_Dev_](https://www.linkedin.com/in/faithdev)
