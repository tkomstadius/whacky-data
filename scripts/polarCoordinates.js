var t = 0, w = 0, h = 0, a = 1, b = 1, status = 0, objects = 0, colour = 100;

var branches = [100, 50, 4, 100, 80, 56, 45, 2, 78]; // collect number of branches per day

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(20);
  noFill();
  stroke(colour);
  w = width/2;
  h = height/2;
}

function draw() {
  var measurements = branches.length;
  
  if(branches[status] === objects) { //end of day
    stroke(random(colour), random(colour), random(colour));
    status++;
    objects = 0;
    a = 1;
    b = 1;
    colour += 5;
    if(colour == 255) {
      colour = 100;
    }
    if(branches.length == status) { //end of branch data, begin again
      background(20);
      status = 0;
      objects = 0;
      a = 1;
      b = 1;
    }
  }
  
  
  translate(w, h);
  beginShape();
  
  for(theta = 0; theta <= TWO_PI; theta += 0.01) {
    //rotate(PI/random(-1, 1));
    var radius = r(theta, 
                  a, //a
                  b, //b
                  5, //m give amount of rotational centers
                  1, //n1 spikyness
                  sin(t) * 0.5 + 0.5, //n2
                  cos(t) * 0.5 + 0.5 //n3
                  );
    var x = radius * cos(theta) * 50;
    var y = radius * sin(theta) * 50;
    vertex(x, y);
  }
  
  endShape();
  
  t += 0.1;
  a += 0.1;
  b += 0.1;
  //w += 0.1;
  //h += 0.1;
  objects++;
}

function r(theta, a, b, m, n1, n2, n3) {
  return pow(pow(abs(cos((m * theta)/4.0) / a), n2) + 
         pow(abs(sin((m * theta)/4.0) / b), n3), -1/n1);
}