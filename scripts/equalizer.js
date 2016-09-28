var contributers = [{additions: 15, deletions: 10},
                    {additions: 2, deletions: 10},
                    {additions: 15, deletions: 10},
                    {additions: 15, deletions: 10},
                    {additions: 34, deletions: 35},
                    {additions: 15, deletions: 10},
                    {additions: 15, deletions: 10},
                    {additions: 6, deletions: 10},
                    {additions: 80, deletions: 10},
                    {additions: 15, deletions: 20},
                    {additions: 13, deletions: 80},
                    {additions: 15, deletions: 10},
                    {additions: 2, deletions: 10},
                    {additions: 15, deletions: 10},
                    {additions: 100, deletions: 10},
                    {additions: 15, deletions: 10},
                    {additions: 5, deletions: 150},
                    {additions: 15, deletions: 10},
                    {additions: 200, deletions: 10},
                    {additions: 1, deletions: 10}];

var rectangleW = 50;
var rectangleH, x, y, randomLines = 0, clearData = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(8);
  noStroke();
}

function draw() {
  x = 20;
  if(clearData == 10) {
    background(20);
    clearData = 0;
  }
  
  for(var i = 0; i < contributers.length; i++) {
    randomLines = random(100);
    //additions
    y = height/1.6 - contributers[i].additions - randomLines;
    rectangleH = contributers[i].additions + randomLines;

    fill('rgba(80, 80, 255, 0.3)');
    //stroke(0, 200, 0);
    
    rect(x, y, rectangleW, rectangleH);
    
    //deletions
    randomLines = random(100);
    y -= contributers[i].deletions + randomLines;
    rectangleH = contributers[i].deletions + randomLines;

    fill('rgba(170, 170, 255, 0.3)');
    //stroke(200, 0, 0);
    
    rect(x, y, rectangleW, rectangleH);
    x += rectangleW + 20;
  }
  clearData += 0.25;
}





