var contributers = [{additions: 15, deletions: 10},
                    {additions: 2, deletions: 10},
                    {additions: 15, deletions: 10},
                    {additions: 15, deletions: 10},
                    {additions: 34, deletions: 35},
                    {additions: 15, deletions: 10},
                    {additions: 15, deletions: 10},
                    {additions: 6, deletions: 10},
                    {additions: 80, deletions: 10},
                    {additions: 15, deletions: 10},
                    {additions: 13, deletions: 10},
                    {additions: 15, deletions: 10},
                    {additions: 1, deletions: 10}];

var rectangleW = 50;
var rectangleH, x, y, testAdd = 0, clearData = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(10);
}

function draw() {
  x = 300;
  //if(clearData % 2 == 0) {
  background(20);
  //}
  
  for(i = 0; i < contributers.length; i++) {
    testAdd = random(10);
    //additions
    y = height/1.6 - contributers[i].additions - testAdd;
    rectangleH = contributers[i].additions + testAdd;

    fill('rgba(0, 255, 0, 0.3)');
    stroke(0, 255, 0);
    
    rect(x, y, rectangleW, rectangleH);
    
    //deletions
    y -= contributers[i].deletions;
    rectangleH = contributers[i].deletions;

    fill('rgba(255, 0, 0, 0.3)');
    stroke(255, 0, 0);
    
    rect(x, y, rectangleW, rectangleH);
    x += rectangleW + 20;
  }
  testAdd++;
  clearData += 0.5;
}





