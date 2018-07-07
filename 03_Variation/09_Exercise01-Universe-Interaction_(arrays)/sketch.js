//The code example was written by Stavros Didakis
//for the needs of the P5.js workshop
//OFCourse, Thursday 5 July 2018 - Sunday 8 July 2018
//Shanghai, China

//09_Exercise01 - Geometric Universe (arrays)

//Create a variable that will store the selection number
//that defines the shape (via keyboard)
let selection = 0;

let arrayX = [];
let arrayY = [];

let angle = 0;
let jitter = 0;

function setup() {
  createCanvas(1000, 500);
  strokeWeight(8);
  noFill();
  frameRate(10);
  //noLoop();
  rectMode(CENTER);

  for (let i=0; i<300; i++){
    arrayX[i] = random(width);
    arrayY[i] = random(height);

  }
}

function draw() {
  //background(50);
  //Create 300 shapes using the for-loop

  if (second() % 2 == 0) jitter = random(-0.1, 0.1);
  angle = angle + jitter;
  let c = cos(angle)*255; //variable c defines the final rotation
  console.log(c);

  for (var i = 0; i < 300; i++) {
    push(); //store the matrix before translate

    //Transformations
    translate(arrayX[i], arrayY[i]);
    rotate(frameCount / i*10);
    scale(i/200);

    //Create two variables that store the mapped values for mouse position
    let makeRed = map(mouseX, 0, width, 0, 255);
    let makeBlue = map(mouseY, 0, height, 0, 255);

    //Mouse interaction defines the color of the strokes
    stroke(makeRed, c, makeBlue);
    //The fill color is black, but with a transparency variation
    fill(0, random(255));

    //Selection of colors
    //Based on the key pressed (defined outside the for-loop),
    //the selection variable will either be 0, 1, or 2.
    //This selected one of the colors defined below
    if (selection===0) ellipse(0, 0, 40, 40);
    if (selection===1) rect(0, 0, 40, 40);
    if (selection===2) triangle(30, 75, 58, 20, 86, 75);

    pop(); //reset the matrix to original state
  }

  //According to the key pressed, change the number of the selection variable
  if (key === 'a') selection = 0;
  if (key === 's') selection = 1;
  if (key === 'd') selection = 2;
}
