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
    
    drawEyes();

    drawSmile();
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

    drawEyeL();

    drawEyeR();
}

function drawEyeL() {

    push();
    fill(0);
    stroke(0);
    ellipse(350, 375, 100, 200);
    pop();
}

function drawEyeR() {

    push();
    fill(0);
    stroke(0);
    ellipse(650, 375, 100, 200);
    pop();
}


/**
 * sets the smile
 */
function drawSmile() {
    push();
    noFill();
    stroke(0);
    strokeWeight(40);
    arc(500, 500, 600, 600, 0, PI, OPEN);
    pop();

}