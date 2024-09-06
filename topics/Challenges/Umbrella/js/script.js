/**
 * Umbrella
 * Daniel Munoz C
 * 
 * Draws an umbrella with shapes.
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
 * Creates teh scene
 */
function draw() {
    background(255, 0, 0);

    drawUmbrella();
}

/**
 * determines what is the umbrella
 */

function drawUmbrella() {

    umbrellaProt();

    umbrellaStick();

    umbrellaHandle();
}

/**
 * creates the top of the umbrella
 */

function umbrellaProt(){

    umbrellaTop();

    drawUmbrellaBot();

    drawHidden();
}

function umbrellaTop() {
    push();
    noStroke();
    fill(0, 0, 255);
    ellipse(500, 500, 800)
    pop();
}

function drawUmbrellaBot() {

    let i = 0;
    let x = 233;

    do {
        i = i + 1;
        umbrellaBot();
        x = x + 267;
    } while (i < 3);

        function umbrellaBot() {
            push();
            noStroke();
            fill(255, 0 ,0);
            ellipse(x, 500, 265, 265);
            pop();
        }
}

function drawHidden() {
    push();
    noStroke();
    fill(255, 0, 0);
    rect(0, 500, 1000, 500);
    pop();
}

/**
 * Creates the stick
 */
function umbrellaStick() {

    push();
    stroke(0);
    strokeWeight(25);
    line(500, 365, 500, 800);
    pop();
}

/**
 * Creates the handle
 */
function umbrellaHandle() {

    push();
    stroke(255, 221, 0)
    strokeWeight(30)
    noFill();
    arc(550, 800, 100, 170, 0, PI, OPEN);
    pop();
}