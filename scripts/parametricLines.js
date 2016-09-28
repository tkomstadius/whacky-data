var x, y, t = 0, v = 0;
const NUM_LINES = 50;

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
  strokeWeight(2);

  for(var i = 0; i < NUM_LINES; i++) {
    stroke(v + 1, v, 180);
    line(parametricXone(t + i), parametricYone(t + i), parametricXtwo(t + i/2), parametricYtwo(t + i/2));
    stroke(100, v - 1, v);
    line(parametricXone(-t - i), parametricYone(-t - i), parametricXtwo(-t - i/2), parametricYtwo(-t - i/2));
  }
  t += 0.5;
  v++
}

function parametricXone(t) {
  return sin(t/10) * 100 + sin(t/10) * 200;
}

function parametricYone(t) {
  return cos(t/10) * 100;
}

function parametricXtwo(t) {
  return sin(t/10) * 300 + sin(t/5) * 200;
}

function parametricYtwo(t) {
  return cos(t/20) * 300 + cos(t/12) * 20;
}