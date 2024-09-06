/**
 * Flag, challenge
 * Daniel Munoz C
 * 
 * Draws a flag
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
 * sets the color of the background and the flag
 */
function draw() {

    background(73, 125, 209);

    drawGreen();

    drawWhite();

    drawRed();
}

//draws the left side of the flag
function drawGreen() {

    // the green side of the flag
    push();
    fill(37, 110, 47)
    noStroke()
    rect(150, 250, 230, 550)
    pop();
}

//draws the white middle part of the flag
function drawWhite() {

     // The white section of the flag
     push();
     fill(255, 255, 255);
     noStroke();
     rect(380, 250, 230, 550 );
     pop();
}

//draws the red side of the flag
function drawRed() {

    // The red section of the flag
    push();
    fill(255, 0 ,0);
    noStroke();
    rect(610, 250, 230, 550)
    pop();
}

