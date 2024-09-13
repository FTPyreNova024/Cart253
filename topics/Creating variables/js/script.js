/**
 * Creating variables
 * daniel Munoz Calderon
 * 
 * Introduction to the creation of variables
 */

"use strict";

let holeSize = 280;

let cheese = [255, 255, 0];

let holeShade = [0, 0, 0];

let holeX = 240;

let holeY = 275;

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
    background(cheese);

    //The hole
    push();
    fill(0, 0, 0);
    noStroke();
    ellipse(holeX, holeY, holeSize);
    pop();
}