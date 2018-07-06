//The code example was written by Stavros Didakis
//for the needs of the P5.js workshop
//OFCourse, Thursday 5 July 2018 - Sunday 8 July 2018
//Shanghai, China

//01_For-Loop

//Define the variable for the size of shape (and loop step)
let size = 50;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(255, 0, 0);
  fill(215, 200, 170);
  //For-loop that will create 10 shapes on the window
  for (let x=0; x < width; x+=size) {
    for (let y=0; y < height; y+=size) {
    //x position is adjusted by the variable x (+1 on each loop)
    //Thus, x goes from 0 to 10. Multiplying by 50 it will create this sequence:
    //0, 50, 100, 150, 200, 250, 300, 350, 400, 450
    rect(x, y, size, size);
  }

    //rect(x, height/2 - size/2, size, size);
    //rect(x, height-size, size, size);
  }

  stroke(255);
  strokeWeight(10);
  //line(0, 250, 500, 250);
}
