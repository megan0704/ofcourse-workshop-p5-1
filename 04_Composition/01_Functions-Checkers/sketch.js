//The code example was written by Stavros Didakis
//for the needs of the P5.js workshop
//OFCourse, Thursday 5 July 2018 - Sunday 8 July 2018
//Shanghai, China

//01_Functions - Checkers

//Set variables
let size = 20;
let angle = 0;
let jitter = 0;

let col1;
let col2
let col3;
let col4;

function setup() {
  createCanvas(500, 500);
  background(160);
  col1 = color(random(100, 200), random(100, 200), random(100, 200));
  col2 = color(random(100, 200), random(50, 100), random(50, 100));
  col3 = color(random(50, 100), random(50, 100), random(100, 200));
  col4 = color(random(50, 200), random(50, 200), random(50, 200));
  checkerFunction(20, 20, col1);
  checkerFunction(width-220, size, col2);
  checkerFunction(20, height-220, col3);
  checkerFunction(width-220, height-220, col4);
}

//function draw(){
//}

function checkerFunction(xPos, yPos, colorInput) {
  for (let y=0; y<10; y++) {
    for (let x=0; x<10; x++) {
      if (x%2===0 && y%2===1 || x%2===1 && y%2===0) {
        fill(0);
      } else fill(colorInput);
      rect(x*size+xPos, y*size+yPos, size, size);
    }
  }
}

function mousePressed(){
  checkerFunction(20, 20, color(random(100, 200), random(100, 200), random(100, 200)));
  checkerFunction(width-220, size, color(random(100, 200), random(100, 200), random(100, 200)));
  checkerFunction(20, height-220, color(random(100, 200), random(100, 200), random(100, 200)));
  checkerFunction(width-220, height-220, color(random(100, 200), random(100, 200), random(100, 200)));
}
