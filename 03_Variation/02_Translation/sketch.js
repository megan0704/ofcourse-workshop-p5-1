//The code example was written by Stavros Didakis
//for the needs of the P5.js workshop
//OFCourse, Thursday 5 July 2018 - Sunday 8 July 2018
//Shanghai, China

//02_Translation

function setup() {
  createCanvas(640, 480);
  noStroke();
}

function draw() {
  background(255);

  //push();
  translate(mouseX, mouseY);
    fill(200, 0, 200);
    rect(0, 0, 80, 80);
  //pop();

    translate(80, 80);
    fill(200, 0, 200);
    rect(0, 0, 80, 80);

    translate(80, 80);
    fill(200, 0, 200);
    rect(0, 0, 80, 80);
}
