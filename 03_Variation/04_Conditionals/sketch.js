//The code example was written by Stavros Didakis
//for the needs of the P5.js workshop
//OFCourse, Thursday 5 July 2018 - Sunday 8 July 2018
//Shanghai, China

//04_Conditionals

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  if (mouseX > width/2){
    fill (255,0,0);
  } else {
    fill(0,0,255);
  }

  ellipse(mouseX, mouseY, 100, 100);
}
