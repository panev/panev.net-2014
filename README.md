# panev.net portfolio page


A personal portfolio website. Uses a lot of custom css animations and imagery—usefull for inspiration—not ideal for templating or starting base.

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

I use a nifty grunt task called html-build for putting together bits of html, so if you want to make changes to the html, you have to modify the files inside the ``` html-parts ``` folder—those compile into the actual html pages in the main folder. It is imparative that you do this, other wise the markup wont be updated properly.

Compiling css is similar, modify scss files and grunt takes care of the rest.


Feedback and Issue submits are welcome.
