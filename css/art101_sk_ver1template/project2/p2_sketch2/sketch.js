var secondz = 0;
var counter = 0;

function setup() {
  createCanvas(400, 400);
  fill(200);
  angleMode(DEGREES);
}



function draw() {
  background(0);
  secondz = second();

  fill(200,0,0);
  push();
  translate(100+counter,150+counter);
  rotate(counter*5);
  scale(.644);
  drawSmirk();
  pop();

  fill(200);
  push();
  //translate(300-counter,250+counter);
  translate(width/2,height/2);
  rotate((secondz*6));
  scale(.5);
  translate(-70,-70);

  daTime();
  pop();
  counter+=.05;

}

function daTime() {
  var h = hour();
  fill(255);
  textSize(30);
  text("Hour: " + h, 0, 0);
  var m = minute();
  text("Minute: " + m, 0, 50);
  var s = second();
  text("Seconds: " + s, 0, 100);
  console.log(s);
}


function drawSmirk() {
  ellipse(0,20,20,20);
  ellipse(50,20,20,20);
  rect(-5,90,120,20);
}
