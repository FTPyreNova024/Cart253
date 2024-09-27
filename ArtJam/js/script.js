/**
 * Leaving
 * 
 * By Daniel Munoz C
 * 
 * A representation of somone leaving someone else after a long time.
 */

"use strict";


/**
 * Creates the different objects
 */

const him = {
    x: undefined,
    y: undefined,
    size: 100,
    fill: (255, 0, 0),
    fills: {
        isWith: (191, 0, 44),
        without: (128, 0, 29),
        letGo: (255, 51, 0),
    }
}

const her = {
    x: undefined,
    y: undefined,
    size: 100,
    fill: (255, 0, 106),
    fills: {
        isWith: (191, 0, 44),
        without: (255, 87, 157),
        forgot: (255, 227, 239),
    }
}
/**
 * Create the canvas
 */
function setup() {
    createCanvas(1000, 1000);
}

/**
 * Draws the scene
 */
function draw() {
    background(0, 0, 0);

}