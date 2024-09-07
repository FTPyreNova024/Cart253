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

    drawNopal();

    drawRed();

    drawSnake();

    drawSand();
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

const sand = [191, 176, 80];

const blank = [255, 255, 255];

//draws the eagle of the flag
function drawEagle() {

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
    
    //the brown parts of the eagle
    drawBrown();

    //the gold parts of the eagle
    drawGold();

}
function drawBrown() {

        //I dont want any strokes in this sections
        noStroke();

        push();
        fill(brown);
        ellipse(500, 500, 50)
        quad(475, 500, 500, 465, 530, 460, 525, 500);
        quad(500, 465, 500, 460, 510, 440, 530, 460);
        ellipse(500, 450, 30)
        triangle(495, 436, 520, 427, 500, 470)
        quad(525, 500, 490, 523, 520, 540, 530, 520);
        quad(530, 520, 520, 540, 530, 560, 560, 530);
        ellipse(500, 530, 20, 50);
        ellipse(490, 520, 50, 20);
        quad(525, 490, 540, 460, 540, 490, 525, 500);
        pop();

        push();
        angleMode(DEGREES);
        fill(brown);
        noStroke();
        arc(540, 490, 130, 130, 260, 30, PIE);
        pop();
}

function drawGold() {
    
    noStroke();

    push();
    fill(gold);
    quad(470, 455, 486, 445, 489, 460, 460, 470);
    ellipse(500, 555, 20);
    ellipse(460, 520, 20);
    pop();

    push();
    noStroke();
    fill(blank);
    ellipse(455, 520, 15);
    pop();
}

function drawNopal() {

    push();
    fill(nopal);
    noStroke();
    ellipse(500, 560, 15);
    ellipse(475, 560, 40, 15);
    ellipse(455, 550, 30, 15);
    ellipse(440, 540, 20, 15);
    ellipse(520, 565, 30, 15);
    quad(503, 565, 496, 565, 490, 580, 510, 580, 600);
    pop();
}

function drawSnake() {

    push();
    angleMode(DEGREES);
    noFill();
    stroke(snake);
    strokeWeight(7);
    arc(440, 520, 30, 40, 260, 130);
    arc(435, 486, 30, 30, 90, 260);
    pop();

    push();
    fill(snake);
    noStroke();
    ellipse(440, 470, 15);
    quad(440, 463, 450, 455, 457, 460, 440, 475);
    quad(440, 465, 457, 480, 450, 485, 440, 477);
    pop();
}

function drawSand() {
    
    push();
    noStroke();
    fill(sand);
    quad(520, 580, 530, 600, 470, 600, 480, 580);
    pop();
}