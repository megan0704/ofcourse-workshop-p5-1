//The code example was written by Stavros Didakis
//for the needs of the P5.js workshop
//OFCourse, Thursday 5 July 2018 - Sunday 8 July 2018
//Shanghai, China

//03_Rotation

//Set variables
let size = 50;
//let angle = 0;
//let jitter = 0;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background(255);
  fill(200, 0, 200);

  //if (second() % 2 == 0) jitter = random(-0.1, 0.1);
  //angle = angle + jitter;
  //let c = cos(angle); //variable c defines the final rotation

  push();
  translate(width/2-25, height/2-25);
  rotate(frameCount / 50.0);
  //rotate(c);
  rect(0, 0, size, size);
  pop();
}
