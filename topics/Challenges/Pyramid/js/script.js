/**
 * Pyramid
 * Daniel Munoz C
 * 
 * Draws a pyramid with shapes.
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
 * sets the background and the scene
 */
function draw() {
    background(65, 199, 232);

    drawFullSand();

    drawPyramid();
}


/**
 * Creates the sand section
 */
function drawFullSand() {

    drawSand1();

    drawSand2();

    drawSand3();
}


// I am gonna divide the sand in three sections
 

/**
 * Section one of the sand
 */
function drawSand1() {
    push();
    fill(232, 168, 65);
    noStroke();
    quad(0, 700, 1000, 700, 1000, 1000, 0, 1000);
    pop();
}

/**
 * Section two of the sand
 */
function drawSand2() {
    push();
    fill(232, 168, 65);
    noStroke();
    ellipse(500, 700, 1100, 400);
    pop();
}

/**
 * Section three of the sand
 */
function drawSand3() {
    push();
    fill(232, 168, 65);
    noStroke();
    ellipse(0, 700, 900, 600);
    pop();
}

/**
 * The pyramid
 */
function drawPyramid() {
    drawPyramid1();

    drawPyramid2();
}

/**
 * Right side of the pyramid
 */
function drawPyramid1() {
    push();
    fill(150, 132, 68);
    noStroke();
    triangle(500, 750, 675, 600, 450, 300 );
    pop();
}

/**
 * Left side of the pyramid
 */
function drawPyramid2() {
    push();
    fill(227, 206, 132);
    noStroke();
    triangle(500, 750, 200, 625, 450, 300 );
    pop();
}

