/**
 * Creating variables
 * daniel Munoz Calderon
 * 
 * Introduction to the creation of variables
 */

"use strict";

let holeSize = 180;

/**
 * creates canvas
*/
function setup() {
    createCanvas(1000, 1000);
}


/**
 * draws a hole in a piece of cheese
*/
function draw() {
    // the cheese
    background(255, 255, 0);

    //The hole
    push();
    fill(0, 0, 0);
    noStroke();
    ellipse(240, 275, 280);
    pop();
}