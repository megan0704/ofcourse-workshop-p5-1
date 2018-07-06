//The code example was written by Stavros Didakis
//for the needs of the P5.js workshop
//OFCourse, Thursday 5 July 2018 - Sunday 8 July 2018
//Shanghai, China

//03_NestedForLoop - Visual

let size = 50;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  fill(215, 200, 170);

  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Draw the shape at the corresponding position
      //This will generate a dynamic position for the x and y
      //The shape is redrawn as many times as the loop says (in this case 100)
      rect(size * x, size * y, size, size);
    }
  }
}
