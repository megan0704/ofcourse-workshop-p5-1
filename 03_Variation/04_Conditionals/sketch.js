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

  console.log(mouseX);

  if (mouseX < width/2 && mouseY < height/2){
    fill(0,0,255);

  } else {
    fill (255,0,0);

  }
  ellipse(mouseX, mouseY, 100, 100);

  stroke(0);
  line(width/2,0,width/2, height);
  line(0,height/2, width,height/2);

}
