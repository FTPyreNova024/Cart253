/**
 * Drawing module
 * Daniel Munoz C
 * 
 * Module where drawing will be learned
 */

"use strict";

/**
 * Creates a square cannvas
 */
function setup() {
    //Creates canvas for this module
    createCanvas(640, 640);

}

/**
 * Creates the record
 */
function draw() {
    //Gray background
    background(150);
    
    //Main Part of the record
    push();
    fill(255, 0, 0);
    stroke(255);
    ellipse(320, 320, 480);
    pop();

    //The label of the record
    push();
    fill(255);
    noStroke();
    ellipse(320, 320, 140, 140)
    pop();

    //The hole of the record
    push();
    fill(0);
    noStroke();
    ellipse(320, 320, 20)
    pop();
}