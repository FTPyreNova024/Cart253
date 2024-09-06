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

    drawEagle();

    drawRed();
}

//draws the left side of the flag
function drawGreen() {

    // the green side of the flag
    push();
    fill(37, 110, 47)
    noStroke()
    rect(150, 250, 230, 500)
    pop();
}

//draws the white middle part of the flag
function drawWhite() {

     // The white section of the flag
     push();
     fill(255, 255, 255);
     noStroke();
     rect(380, 250, 230, 500 );
     pop();
}

const brown = [110, 70, 37];

const gold = [230, 181, 46];

const nopal = [31, 125, 108];

const snake = [188, 207, 70];

const olivo = [71, 148, 72];

const sand = [191, 176, 80];

const lake = [68, 171, 167];

//draws the eagle of the flag
function drawEagle() {
    push();
    fill(brown);
    noStroke();
    ellipse(500, 500, 50)
    pop();

    drawEagleBody();
}

//draws the red side of the flag
function drawRed() {

    // The red section of the flag
    push();
    fill(255, 0 ,0);
    noStroke();
    rect(610, 250, 230, 500)
    pop();
}

/**
 * All the body parts of the eagle
 */
function drawEagleBody() {
    
    //I dont want any strokes in this sections
    noStroke();

    push();
    fill(brown);
    quad(475, 500, 500, 465, 530, 460, 525, 500);
    quad(500, 465, 500, 460, 510, 440, 530, 460);
    ellipse(500, 450, 30)
    pop();

    //the beak of the eagle
    drawBeak();

}

function drawBeak() {
    
    noStroke();

    push();
    fill(gold);
    quad(460, 435, );
    pop();
}