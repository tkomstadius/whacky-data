var colours = ['rgb(255, 236, 51)', 'rgb(255, 254, 51)', 'rgb(51, 236, 255)', 'rgb(51, 65, 255)', 'rgb(167, 255, 51)', 'rgb(6, 166, 70)', 'rgb(246, 0, 0)', 'rgb(255, 124, 199)', 'rgb(155, 70, 229)'];

function setup() {
  createCanvas(innerWidth, innerHeight);
  noStroke();
}

function draw() {
  fill(colours[floor(random(0,9))]);
  ellipse(random(width), random(height), random(10, 50));
}

