/**
 * Introducing variables
 * Daniel Munoz C
 * 
 * First introduction to variables
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1920, 1080);
}


/**
 * Draws a circle in the middle of the canvas
*/
function draw() {

    //background
    background(0);

    push();
    fill(255, 255, 0);
    noStroke();
    ellipse(length / 2, height / 2, mouseX, mouseY);
    pop();
}