/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};

let sky = {
    fill: {
        r: 150,
        g: 200,
        b: 120,
    }
}

let bird = {

}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {

    // Changing the color of the sky
    sky.fill.r = constrain(sky.fill.r - 1, 0, 150);
    sky.fill.g = constrain(sky.fill.g - 1, 0, 200);
    sky.fill.b = constrain(sky.fill.b - 1, 0, 120);

    background(sky.fill.r, sky.fill.g, sky.fill.b);

    // Draw Mr. Furious as a coloured circle

    //color of Mr Furious
    mrFurious.fill.g = constrain(mrFurious.fill.g - 1, 0, 255);
    mrFurious.fill.b = constrain(mrFurious.fill.b - 1, 0, 255);
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();

    //Draw the bird
    push();
    noStroke();
    fill()
    pop();
}