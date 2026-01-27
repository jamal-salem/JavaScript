function setup() {
  createCanvas(800, 800);
  background(255);
  noLoop();
}

function draw() {
  stroke(0);
  strokeWeight(12);

  // white areas
  fill(255);
  rect(0,100,100,350);
  rect(0,350,100,300);
  rect(100,0,600,50);
  rect(100,650,600,150);
  rect(700,0,100,650);

  // red
  fill(255,0,0);
  rect(100,50,600,600);

  // blue
  fill(0,0,150);
  rect(0,650,100,150);

  // green
  fill(0,255,0);
  rect(700,650,100,150);
}
