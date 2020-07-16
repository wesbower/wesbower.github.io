
function setup(){
  createCanvas(300, 300, WEBGL);
  rectMode(CENTER)
  //teapot = loadModel('assets/teapot.obj');
}

function draw(){
  background(20);
  fill(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  translate(1,1,frameCount * 0.11);

  rect(0,0,120,120);
  fill(255,0,0);
  ellipse(0,0,20,20);



}




//
// var counter = 0;
//
// function setup() {
//   createCanvas(500,500);
//   background(20);
//   noStroke();
// }
//
// function draw() {
//   background(0);
//   fill(220);
//
//   push();
// //  translate(100,100);
//
// var hr = hour();
//
//
//  var m = map(hr, 0,24, 100, 300);
//
//
//   ellipse(m, 50, 50, 50);
//
//   pop();
//
// }
