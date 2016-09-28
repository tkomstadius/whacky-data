var modelImage, dots = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  noStroke();
  noCursor();
  modelImage = loadImage("../images/comhem.png");
}

function draw() {
  background(20);
  translate(300, 0);
  var position = createVector(mouseX, mouseY);
  fill(255, 100, 200);
  ellipse(position.x, position.y, 8, 8);
  
  //if(mouseIsPressed) {
    var target = findPixel();
    var dot = new Dot(position, target);
    dots.push(dot);
    if(dots.length > 2000) {
      dots.shift();
    } 
  //}
  for(var i = 0; i < dots.length; i++) {
    dots[i].update();
    dots[i].draw();
  }
}

function findPixel() {
  var x, y;
  
  for(var i = 0; i < 15; i++) {
    x = floor(random(modelImage.width));
    y = floor(random(modelImage.height));
    
    if(red(modelImage.get(x,y)) < 255) {
      break;
    }
  }
  
  return createVector(x, y);

}

function Dot(position, target) {
  this.position = position;
  this.target = target;
  this.diameter = random(1, 5);
}

Dot.prototype.update = function() {
  this.position = p5.Vector.lerp(this.position, this.target, 0.04);
};

Dot.prototype.draw = function() {
  var alpha = noise(this.target.x, this.target.y, millis()/1000.0);
  fill(255, alpha * 255);
  
  ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
}