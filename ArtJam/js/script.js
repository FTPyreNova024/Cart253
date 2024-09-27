/**
 * Leaving
 * 
 * By Daniel Munoz C
 * 
 * A representation of two things changing by their distance.
 */

"use strict";

const thingOne = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 100,
    fill: (255, 106, 0),
    fills: {
        isWith: (191, 0, 44),
        without: (128, 0, 29),
        letGo: (255, 51, 0),
    }
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(1000, 1000);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background(0, 0, 0);

    // Move thingOne
    thingOne.x = mouseX;
    thingOne.y = mouseY;

    // Draw the two things
    push();
    noStroke();
    fill(thingOne.fill);
    ellipse(thingOne.x, thingOne.y, thingOne.size);
    pop();
}