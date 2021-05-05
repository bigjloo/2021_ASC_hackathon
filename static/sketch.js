var screen = 0;
var y = -20;
var x = 200;
var speed = 2;
var score = 0;
var backgroundR = 0;
var backgroundG = 153;
var backgroundB = 250;
var ringSize = 0;
var ringColour = 256;
let startimg;
let endimg;
let mode = 0;
var boxColour = (0,200,200);
let colorPicker;
let input, button;
var name;


function preload() {
  startimg = loadImage('/static/assets/startscreen01.png');
  endimg = loadImage('/static/assets/endscreen.png');
}





function setup() {
  createCanvas(680, 480);
  angleMode(DEGREES);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(0, height + 5);
  
  let div = createDiv('<   Choose Your Colour Scheme');
  div.style('font-size', '16px');
 div.position(80, height + 10);
  
    input = createInput();
  input.position(width /2 - 150, height /2 - 40);
  input.size(300,70);

  button = createButton('PLAY');
  button.position(width /2 - 80, height /2 + 80);
  button.mousePressed(greet);
  button.size(160, 40);
  
  
  
  
 
}

function greet() {
  
  
  name = input.value();
  input.value('');
    fill(random(255), 255, 255);
   
    text(name, 0, 0);
    removeElements();
    
    mode = 1;
  
}



function draw() {

  switch (mode) {
    case 0:
      startScreen()
      break;
    case 1:
       gameOn();
      break;
    case 2:
       endScreen();
      break;
    default:
      //  
  }
}



function startScreen() {
 
  reset();
 
  textAlign(CENTER);
  textSize(50);

  
  
  
  image(startimg, 0, 0, width, height);
  fill(255);
  textAlign(CENTER);
  textSize(40);


  fill(0, 181, 235);
  textSize(20);
  text('Begin', width / 2, height / 2 + 7);
  
  
 

  
  
}












function gameOn()

{

  background(backgroundR, backgroundG, backgroundB);
  fromBG = color(149, 223, 240);
  toBG = colorPicker.color();
  backgroundColor = lerpColor(fromBG, toBG, mouseY / height);
  background(backgroundColor);


  //Mountain ring, changes scale according to mouseX
  noFill();
  stroke(ringColour);
  strokeWeight(5);
  ringSize = constrain(mouseX, 100, 545) - 100
  ellipse(248, 158, ringSize, ringSize);

  //Secondary rings that rotate while revolving around mountain's peak,
  //based on mouseX position
  var spinConstraint = constrain(mouseX, 102, 540)

  push();
  translate(248, 158);
  rotate(spinConstraint);
  arc(248, 158, ringSize, ringSize,
    spinConstraint + 5, spinConstraint + 115);
  arc(248, 158, ringSize, ringSize,
    spinConstraint + 125, spinConstraint + 235);
  arc(248, 158, ringSize, ringSize,
    spinConstraint + 245, spinConstraint + 355);
  pop();

  push();
  translate(248, 158);
  rotate(spinConstraint - 160);
  arc(248, 158, ringSize * .75, ringSize * .75,
    spinConstraint + 5, spinConstraint + 115);
  arc(248, 158, ringSize * .75, ringSize * .75,
    spinConstraint + 125, spinConstraint + 235);
  arc(248, 158, ringSize * .75, ringSize * .75,
    spinConstraint + 245, spinConstraint + 355);
  pop();

  //Hides rings when they get too small - given same color as background
  if (ringSize == 0) {
    ringColor = backgroundColor;
  } else {
    ringColor = 256;
  }

  noStroke();


  //Draws triangles for mountains that change colors as         mouseY   changes

  //Mountain 1, transitions from blue to dark blue
  fill(232, 151, 168);
  fromMount1L = color(232, 151, 168);
  toMount1L = color(105, 175, 173);
  mount1LColor = lerpColor(fromMount1L, toMount1L, mouseY / height);
  fill(mount1LColor);
  triangle(111, 226, 57, 416, -3, 416);

  fill(206, 122, 137);
  fromMount1R = color(206, 122, 137);
  toMount1R = color(97, 142, 153);
  mount1RColor = lerpColor(fromMount1R, toMount1R, mouseY / height);
  fill(mount1RColor);
  triangle(111, 226, 57, 416, 189, 416);



  //Mountain 2, largest mountian
  fill(253, 169, 244);
  fromMount4L = color(60, 205, 220);
  toMount4L = color(31, 60, 78);
  mount4LColor = lerpColor(fromMount4L, toMount4L, mouseY / height);
  fill(mount4LColor);
  triangle(248, 158, 154, 480, -111, 480);
  fill(214, 192, 123);
  fromMount4R = color(40, 180, 200);
  toMount4R = color(0, 10, 30);
  mount4RColor = lerpColor(fromMount4R, toMount4R, mouseY / height);
  fill(mount4RColor);
  triangle(248, 158, 154, 480, 591, 480);

  //Stray cloud with transparency
  fill(256, 125);
  quad(210.5, 272, 250.5, 290, 210.5, 308, 170.5, 290);

  //Mountain 3, transitions from pink to dark green
  fill(232, 151, 168);
  fromMount5L = color(232, 151, 168);
  toMount5L = color(51, 93, 97);
  mount5LColor = lerpColor(fromMount5L, toMount5L, mouseY / height);
  fill(mount5LColor);
  triangle(193, 290, 139, 480, 79, 480);

  fill(206, 122, 137);
  fromMount5R = color(206, 122, 137);
  toMount5R = color(37, 77, 68);
  mount5RColor = lerpColor(fromMount5R, toMount5R, mouseY / height);
  fill(mount5RColor);
  triangle(193, 290, 139, 480, 271, 480);

  //Mountain 4, transitions from blue to pale green
  fill(175, 232, 229);
  fromMount6L = color(175, 232, 229);
  toMount6L = color(170, 191, 156);
  mount6LColor = lerpColor(fromMount6L, toMount6L, mouseY / height);
  fill(mount6LColor);
  triangle(108, 334, 93, 480, -30, 480);

  fill(127, 201, 201);
  fromMount6R = color(127, 201, 201);
  toMount6R = color(130, 171, 142);
  mount6RColor = lerpColor(fromMount6R, toMount6R, mouseY / height);
  fill(mount6RColor);
  triangle(108, 334, 93, 480, 253, 480);

  //Clouds with transparency
  fill(256, 125);
  quad(332.5, 231, 372.5, 249, 332.5, 267, 292.5, 249);
  quad(393.5, 217, 433.5, 235, 393.5, 253, 353.5, 235);
  quad(298.5, 240, 338.5, 258, 298.5, 276, 258.5, 258);
  quad(275.5, 235, 315.5, 253, 275.5, 271, 235.5, 253);
  quad(258.5, 214, 298.5, 232, 258.5, 250, 218.5, 232);
  quad(313.5, 265, 353.5, 283, 313.5, 301, 273.5, 283);
  quad(339.5, 369, 379.5, 387, 339.5, 405, 299.5, 387);
  quad(403.5, 258, 443.5, 276, 403.5, 294, 363.5, 276);
  quad(353.5, 265, 393.5, 283, 353.5, 301, 313.5, 283);

  textSize(10);
  text("score = " + score, 30, 20)
  fill(255, 240, 140);
  strokeWeight(0);
  ellipse(x, y, 60, 60);
  
  if (score >= 1)
    {
      
    fill(r,g,b);
    }
  
  
  rectMode(CENTER)
  rect(mouseX, mouseY, 100, 60);
  y += speed;
  if (y > height) {
    mode = 2;
  }
  if (y > height - 500 && x > mouseX && x < mouseX + 10) {
    y = -20;
    speed += .5;
    score += 1;
    randomColour();
    fill(r,g,b);
  
  }
  if (y == -20) {
    pickRandom();
  }
}

function pickRandom() {
  x = random(20, width - 20);
}


function randomColour() {
  r = random(20, 255);
  g = random(20, 255);
  b = random(20, 255);

}








function endScreen() {
  mode = 2;
  image(endimg, 0, 0, width, height);
  fill(0, 185, 219);
  textAlign(CENTER);
  textSize(18);
  
  text("SCORE = " + score, width / 2 + 100, height / 4 + 22);
  fill(colorPicker.color());
  
  text(name + " - " + score, width / 2, height / 2 + 50);



}






function mousePressed() {

  if (mode == 2) 
  {
    mode--;
    reset();
  
  }

  
 

}

function reset() {
  score = 0;
  speed = 2;
  y = -20;
}