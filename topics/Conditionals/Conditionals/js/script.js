
/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can move a circle
 * on the canvas using their own circle to "lead" it around.
 */

"use strict";


const puck = {
    x: 350,
    y: 350,
    size: 100,
    fill: "#ff0000"
  };
  
  const user = {
    x: undefined,
    y: undefined,
    size: 75,
    fill: "#000000"
  };
  
  /**
   * Create the canvas
   */
  function setup() {
    createCanvas(400, 400);
  }
  
  /**
   * Move the user circle, check for overlap, draw the two circles
   */
  function draw() {
    background("#aaaaaa");
    
    // Move user circle
    moveUser();

    //Check for overlap
    moveTarget();
    
    // Draw the user and puck
    drawUser();
    drawPuck();
  }
  
  /**
   * Sets the user position to the mouse position
   */
  function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
  }

  /**
   * Checks if the user and the puck are overlapping
   */

  function moveTarget() {

    const distance = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (distance < user.size / 2 + puck.size / 2);

    if (overlap) {
        const dx = user.x - puck.x;
        const dy = user.y - puck.y;
        if (abs(dx) < abs(dy)) {
            // Its closer on x
            if(dx < 0) {
                puck.x += 5;
            }
            else if (dx > 0) {
                puck.x -= 5;
            }
        }
        else  {
             // Its closer on x
             if (dy < 0) {
                puck.y += 5;
            }
            else if (dy > 0) {
                puck.y -= 5;
            }
        }
    }

  }
  
  /**
   * Displays the user circle
   */
  function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
  }
  
  /**
   * Displays the puck circle
   */
  function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
  }