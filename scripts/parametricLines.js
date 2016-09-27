var x, y, t = 0;
const NUM_LINES = 20;

function setup() {
  createCanvas(innerWidth, innerHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(20);
  translate(x, y);
  stroke(188);
  strokeWeight(4);

  for(i = 0; i < NUM_LINES; i++) {
    line(parametricXone(t + i), parametricYone(t + i), parametricXtwo(t + i/2), parametricYtwo(t + i/2));
  }
  t += 0.5;
}

function parametricXone(t) {
  return sin(t/10) * 100 + sin(t/5) * 20;
}

function parametricYone(t) {
  return cos(t/10) * 100;
}

function parametricXtwo(t) {
  return sin(t/10) * 200 + sin(t) * 2;
}

function parametricYtwo(t) {
  return cos(t/20) * 200 + cos(t/12) * 20;
}