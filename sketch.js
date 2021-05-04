var backgroundR = 0;
var backgroundG = 153;
var backgroundB = 250;
var currentScene;

var click = 70;
var timer;
var counter = 1;
var seconds, minutes;


function setup() {

  createCanvas(680, 480);
  angleMode(DEGREES);
  timer = createP("timer");
  setInterval(timeIt, 1000);
  drawScene1();



}

function timeIt() {
  // 1 counter = 1 second
  if (counter > 0) {
    counter++;
  }
  
  minutes = floor(counter/60);
  seconds = counter % 60;
  
  // if (counter < 60)
  
  timer.html(minutes + ":" + seconds);
}


function mouseClicked() {
  if (currentScene === 1) {
        drawScene2();
        click++;
        
    } 
  else if (currentScene === 2) {
        drawScene3();
        click++;
    } 
  else
    {
      click++;
    }
  
  
}



function drawScene1() {
    currentScene = 1;
    background(235, 247, 255);
    fill(0, 85, 255);
    //textSize(39);
    text("Play Game",width/3,height/2);
  
}

function drawScene2() {
    currentScene = 2;
    background(235, 247, 255);

  
    greeting = createElement('h2', 'what is your       name?');
    greeting.position(240, 200);

    input = createInput();
    input.position(240, 270);

    button = createButton('submit');
    button.position(input.x + input.width, 270);
    button.mousePressed(greet);

    textAlign(CENTER);
    textSize(50);
  
  
  
  
}


function draw() {
  
  currentScene = 3;
  var colorConstrain = constrain(mouseY, 0, 0);


  background(backgroundR, backgroundG, backgroundB);
  fromBG = color(149, 223, 240);
  toBG = color(5, 16, 74);
  backgroundColor = lerpColor(fromBG, toBG, mouseY / height);
  background(backgroundColor);

  var moonConstrainY = constrain(mouseY, 102, 540);

  //Sun, moves in the Y direction as counter changes
  noStroke();
  fill(256, 222, 123);
  
  ellipse( mouse, 200 + (counter)*6 - (click), 100, 100);
  


  //Draws triangles for mountains that change colors as         mouseX changes

  //Mountain 1, transitions from pink to blue
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


    
}



drawScene1();
