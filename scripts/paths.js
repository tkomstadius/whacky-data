var xOff, yOff, x, y, beans = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  //frameRate(60);
}

function draw() {
  xOff = frameCount * 0.0005;
  yOff = xOff + 40; 
  
  x = noise(xOff) * width;
  y = noise(yOff) * height;

  if(frameCount % 8 == 0) {
    var bean = new Bean({x: x, y: y, xOff: xOff, yOff: yOff})
    beans.push(bean);
  }
  
  for(var i = 0; i < beans.length; i++) {
    beans[i].draw();
  }
}

function Bean(options) {
  this.xB = options.x;
  this.yB = options.y;
  this.xOffB = options.xOff;
  this.yOffB = options.yOff;
  this.velocityB = 3;
  this.accelerationB = -0.003;
}

Bean.prototype.draw = function() {
  if(this.velocityB <= 0) {
    return;
  }
  
  this.xOffB += 0.007;
  this.yOffB += 0.007;
  this.velocityB += this.accelerationB;
  this.xB += noise(this.xOffB) * this.velocityB - this.velocityB/2;
  this.yB += noise(this.yOffB) * this.velocityB - this.velocityB/2;
  
  colorMode(HSB, 360, 100, 100);
  var h = noise((this.xOffB + this.yOffB)/2) * 360;
  stroke(h, 100, 100, 0.2);
  point(this.xB, this.yB);
}

