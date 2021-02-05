# Frontend Mentor - Bookmark landing page

![Design preview for the Bookmark landing page coding challenge](/images/desktop-preview.jpg)

## Table of contents
* [Introduction](#introduction)
* [Briefing](#briefing)
* [Problems & learnings](#problems-and-learnings)
* [Technologies used](#technologies-used)
* [Time spend](#time-spend)

## Introduction

My attempt to the [Frontend Mentor](https://www.frontendmentor.io) challenge [Bookmark landing page](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158).

***

## Briefing

* View the optimal layout for the site depending on their device's screen size
* Receive an error message when the newsletter form is submitted if:
    * The input field is empty
    * The email address is not formatted correctly
* Create the rounded blue background shape via css 
* Change the `fill` and `stroke` color of the SVGs at specific points 

Other then the basic requirements I also added for learning purposes: 

* Instead of the Hamburger and closing Icon I added span Elements so I can animate the opening and closing
* Add animation while scrolling with the use of css animations and intersection observer 


***

## Problems and learnings
My initial goal for this project was to keep components as reusable as possible while follow the separation of concerns idea. But instead of creating more SCSS files with the idea in mind of "this might be needed elsewhere" I should have used the specific layout SCSS files more often. 

Reading about helper classes made me want to use them in this project, so I decided to use flexbox as helpers. It does work fine up until the point where you have to get specific with numbers e.g. gaps. Instead of using gap on the component which does not have any flex properties I should have used layout SCSS files again. Next time I want to distinguish between layout related flex properties and component ones. The first ones belong to the layout SCSS files, the latter into the component files instead of throwing a bunch of helper classes on them. 

Lastly I wanted to use some CSS animations and the intersection observer to trigger animations on scrolldown. I did get this to run, but I have yet to figure out how to delay the animations (or delay the class adding, really) like on the cards. I want to take a deeper look into this in the near future to understand how the intersection observer works. 

***

## Technologies used
* npm
* webpack
* scss
* babel
* BEM 
* HTML 

***

## Time spend

| Task                             | Duration      |
| ---------------------------------|:-------------:|
| Initialise project               | 0h 30min      |
| Header, Navigation & Buttons     | 1h 43min      |
| Hero Section                     | 1h 52min      |
| Feature Section                  | 2h 31min      |
| Download Section                 | 1h 35min      |
| FAQ Section                      | 1h 05min      |
| Newsletter Section               | 1h 05min      |
| Footer Section                   | 1h 43min      |
| Mobile Menu                      | 2h 46min      |
| Added Tab functionality          | 1h 58min      |
| Accordion                        | 1h 02min      |
| Newsletter E-Mail check          | 0h 54min      |
| Scroll into View                 | 1h 54min      |
