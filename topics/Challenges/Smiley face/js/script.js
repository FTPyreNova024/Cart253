/**
 * Smiley Face
 * Daniel Munoz C
 * 
 * Draws a smiley face with shapes.
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
 * Creates the smiley face
 */
function draw() {
    background(255, 242, 0);

    drawFace();
}


/**
 * determines what the face is
 */

function drawFace() {
    drawFaceShape();

    drawSmile();

    drawEyes();
}

/**
 * Sets the shape of the face 
 */
function drawFaceShape() {
    push();
    noFill();
    stroke(0);
    strokeWeight(40)
    ellipse(500, 500, 800)
    pop();
}

/**
 * sets the eyes
 */
function drawEyes() {

    i = 0;
    x = 275;

    do {
        i = i + 1;
        drawEye();
        x = x + 250;
    } while (i < 2);

    function drawEye() {

    push();
    fill(0)
    ellipse(x, 375, 100, 200)
    pop();
}
}
