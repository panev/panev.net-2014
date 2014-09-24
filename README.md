# panev.net portfolio page


A work-in-progress personal portfolio website. Uses a lot of custom css animations and imagery—usefull for inspiration—not ideal for templating.

Currently a good portion of the site is complete, however there are still areas that are being worked on—namely proper responsiveness and touch screen optimization—also most of the portfolio projects aren't added yet.

Feel free to clone and poke around, though. :-)


## Getting started

```
npm install
```


## Usage

```
grunt jedi
```
This just runs the ``` open ``` and ``` watch ``` grunt tasks. They open up the landing page, watch for changes and compile + autoprefix.


## Workflow

I use a nifty grunt task called ``` html-build ``` for putting together bits of html, so if you want to make changes to the html, you have to modify the files inside the html-parts folder—those compile into the actual html pages in the main folder.

Compiling css is similar, modify scss files and grunt takes care of the rest.


Feedback and Issue submits are welcome.