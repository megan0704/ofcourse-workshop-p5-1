//The code example was written by Stavros Didakis
//for the needs of the P5.js workshop
//OFCourse, Thursday 5 July 2018 - Sunday 8 July 2018
//Shanghai, China

//03_Modulo and Rotations 1 (checker)

//Set variables
let size = 50;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  translate(25, 25);  //Offset all shapes by half their width and height

  //Run the nested loop
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Draw the background shapes with standard position and color
      //(no rotation)
      fill(215, 200, 170);
      rect(size * x, size * y, size, size);

      //Conditional statements for color selection
      //A different color is applied for every other odd/even row and column
      //The module operator (%) is used to accomplish the task
      if (x%2==0 && y%2==0) {
        fill(200, 50, 200);
      } else if (x%2==0 && y%2==1) {
        fill(50, 50, 200);
      } else if (x%2==1 && y%2==0) {
        fill(200, 200, 50);
      } else fill(50, 200, 0);

      //To keep our transformations correctly arranged,
      //it is necessary to have a push/pop translation system
      push(); //apply this at the beginning of the transformation
      translate(size * x, size * y); //assign here the shape position
      rect(0, 0, size/2, size/2); //position is driven by translate()
      pop(); //apply this at the end of the transformation
    }
  }
}
