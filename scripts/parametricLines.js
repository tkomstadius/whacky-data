var x, y, t = 0, v = 0;
const NUM_LINES = 20;

function setup() {
  createCanvas(innerWidth, innerHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(20);
  if(v == 255) {
    v = 0;
  } 
  translate(x, y);
  strokeWeight(4);

  for(i = 0; i < NUM_LINES; i++) {
    stroke(v + 1, 201, 180);
    line(parametricXone(t + i), parametricYone(t + i), parametricXtwo(t + i/2), parametricYtwo(t + i/2));
    stroke(50, v - 1, 200);
    line(parametricXone(-t - i), parametricYone(-t - i), parametricXtwo(-t - i/2), parametricYtwo(-t - i/2));
  }
  t += 0.5;
  v++
}

function parametricXone(t) {
  return sin(t/10) * 100 + sin(t/6) * 200;
}

function parametricYone(t) {
  return cos(t/10) * 100;
}

function parametricXtwo(t) {
  return sin(t/v) * 300 + sin(t) * 2;
}

function parametricYtwo(t) {
  return cos(t/20) * 300 + cos(t/12) * 20;
}