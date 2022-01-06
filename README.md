# In pursuit of a blurry dream

Hi, I'm @monsieurBastian and currently enrolled in a **Front End Nanodegree** at [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011). This space is dedicated to the Projects to complete during the Program

## Table of Contents

- [Project](#project)
- [About](#about)

## Project

The goal of that project is to build a landing page that uses JavaScript to create an interactive navigational experience for the user.

### HTML

The `index.html` file is handling the big structure of the page: the header area (for the nav), the main area (for the content) and the footer area

### CSS

The `styles.css` file is the main one.
I decided to keep the design system I built in the previous project. Therefore you have:
- `grid.css` - defining defines the page grid
- `system.css` - defining the styling: fonts, sizes, colors, ...
- `header.css` - handling the header styling (logo, navigation, ...)
- `footer.css` - handling the footer syling

### Javascript

The website content is generated with JavaScript. The `app.js` file contains everything.
All content is set inside a variable.
We have to main functions to build the navigation part  (`buildnavigation()`) and the content part (`buildContent()`)
And some more functions for a better user experience:
- `showBackToTop()` - a back to top button appearing after scrolling further than the fold
- `stickNavToTop()` - stick the nav at the top of the screen to keep it accessible while scrolled down the page
- `navActiveInViewport()` - set the section in the viewport as active


## About

Father of 3 who likes Sport (swimming, bike, running), cooking and photography. And video games too ;) 

I live in Switzerland (not Sweden!) and work as a Frontend and Multimedia Team Lead at [SCOTT Sports](https://www.scott-sports.com). 