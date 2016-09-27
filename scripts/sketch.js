var x, y, t = 0, branches, status = 0;
const NUM_SHADOWS = 20;

function setup() {
  createCanvas(innerWidth, innerHeight);
  //frameRate(1);
  x = 1;
  y = height/2;
  branches = numBranches();
}

function draw() {
  //translate(x, y);
  //ellipse(noise(frameCount * 0.00005 * width, frameCount * 0.00007 * height), noise(frameCount * 0.00005 * width, frameCount * 0.00007 * height), 50);
  //t++; // += 0.5;
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), random(20, 50));
}

function numBranches() {
  return [50, 6, 17, 23, 100, 80, 12, 56];
}

function trigX(t) {
  return t; //sin(t/10) * amp;
}

function trigY(t, amp) {
  return sin(t/20) * 100;
}
