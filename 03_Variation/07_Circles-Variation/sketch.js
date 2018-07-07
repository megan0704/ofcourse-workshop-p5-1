//The code example was written by Stavros Didakis
//for the needs of the P5.js workshop
//OFCourse, Thursday 5 July 2018 - Sunday 8 July 2018
//Shanghai, China

//07_Circles Variation

function setup() {
  createCanvas(500, 500);
  strokeWeight(8);
  //noFill();
  //frameRate(1);
  noLoop();
}

function draw() {
  background(150);
  //Create 100 rings using the for-loop
  for (let i = 0; i < 300; i++) {
    push(); //store the matrix before translate
    translate(random(width), random(height));
    //rotate(random(2*PI));
    //scale(random(1.5), random(1.5));
    stroke(random(255), random(255), random(255), random(255));
    strokeWeight(random(1,10));
    fill(random(255),random(255),random(255),random(255));
    ellipse(0, 0, 100, 100);
    pop(); //reset the matrix to original state
  }
}
