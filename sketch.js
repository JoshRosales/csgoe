var car,wall;
var speed, weight;



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  var car =  createSprite(50,200,50,50);
 var wall = createSprite(50,200,50,50);
 car.velocityX = speed;
 background(black);
}