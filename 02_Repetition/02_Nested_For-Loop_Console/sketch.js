//The code example was written by Stavros Didakis
//for the needs of the P5.js workshop
//OFCourse, Thursday 5 July 2018 - Sunday 8 July 2018
//Shanghai, China

//02_Nested For-Loop - Console

function setup() {
  createCanvas(500, 500);
  noLoop();
  textSize(22);
  //textAlign(CENTER);
}

function draw() {
  background(60);
  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Print result to the console
      //Open Chrome > View > Developer > Javascript Console
      console.log("X: " + x + ", Y: " + y)
    }
  }
  fill(255);
  text("Open the Developer > Javascript Console", 10, 100);
  text("to see the nested-loop number values", 10, 130);

}
