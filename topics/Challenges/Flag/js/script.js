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
 * Draws a house and the immediate environment
 */
function draw() {

    // The sky
    background(150, 200, 250);

    drawCloud();

    drawGround();

    drawHouse();
}

//draws a cloud
function drawCloud() {

    // A cloud
    push();
    noStroke();
    // Note: using a single number for a colour will be greyscale
    // (As if you used the same number for R, G, and B)
    // So this is white:
    fill(255);
    ellipse(100, 100, 100, 100);
    ellipse(180, 80, 100, 100);
    ellipse(160, 120, 60, 60);
    ellipse(190, 130, 60, 60);
    ellipse(220, 120, 60, 60);
    pop();
}

//draws the ground
function drawGround() {

     // The ground
     push();
     noStroke();
     fill(200);
     rect(0, 400, 640, 480);
     pop();
}

//draws the house
function drawHouse() {

    drawHouseRoof();

    drawHouseBody();

    drawHouseWindow();

    drawDoor();
}

//Draws the roof
function drawHouseRoof() {

    // The main body of the house
    push();
    noStroke();
    fill(250, 250, 200);
    rect(200, 240, 280, 180);
    pop();
}

//Draws the body of the house
function drawHouseBody() {

    // The roof
    push();
    noStroke();
    // You can also write colors in hex code in quote marks
    fill("#dc143c");
    triangle(180, 240, 340, 120, 500, 240);
    pop();
}

//Draws the window of the house
function drawHouseWindow() {

    // A window
    push();
    // You can also write colour names from the CSS standard in quotes
    // https://www.w3.org/wiki/CSS/Properties/color/keywords
    stroke("deeppink");
    strokeWeight(5);
    fill("blanchedalmond");
    rect(220, 260, 80, 80);
    pop();
}

//Draws the door
function drawDoor() {

    // The door
    push();
    noStroke();
    fill(0, 128, 0);
    rect(320, 300, 80, 120);
    pop();

    // The doorknob
    push();
    noStroke();
    fill(255, 215, 0);
    ellipse(340, 360, 10, 10);
    pop();
}