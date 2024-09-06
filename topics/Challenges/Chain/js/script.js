/**
 * Chain
 * Daniel Munoz C
 * 
 * Draws a chain using shapes
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(1000, 1000);
}

/**
 * Creates the main elements
 */
function draw() {
    background(255, 242, 0);

    /**
     * The main chain
     */

let i = 0;
let x = 0;

do { 
    i = i + 1;
    drawChainLink();
    x = x + 250;
} while (i < 5);

function drawChainLink() {
    push();
    noFill();
    stroke(0);
    strokeWeight(55)
    ellipse(500, x,275, 375);
    pop();
}
}

