/**
 * The Blank page
 * Daniel Munoz C
 * 
 * An exploration of the existantial angst of a novelist
 * who must sit down at their pink desk and confront the 
 * abyss  that is a blank page of paper.
 * 
 * The program is non-interactive to convey the inability
 * to get started on a project. try typing, just try it!
 */

"use strict";


/**
 * creates a canvas for our master piece.
 */
function setup() {
    // create a canvas at a standard resolition
    createCanvas(640, 480);
}

/**
 * draws the writer's desktop and a blank piece of paper
 */
function draw() {
    // a pink desktop
    background(255, 100, 100);
    // a blank piece of paper
    rect(200, 80, 240, 320);
}