var fixedRect,movingRect;
var rect1,rect2;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.velocityX=4;
  movingRect= createSprite(700, 200, 80, 30);
  movingRect.velocityX=-4;
  rect1= createSprite(600,150,40,60);
  rect2= createSprite(600,400,70,30);
}

function draw() {
  background(255,255,255);  
  rect1.x=World.mouseX;
  rect1.y=World.mouseY;
  
  if(isTouching(rect1,rect2)){
    rect1.shapeColor='orange';
    rect2.shapeColor='orange';
  }
  else{
    rect1.shapeColor='lime';
    rect2.shapeColor='lime';
  }

  bounceOff(fixedRect,movingRect);
  
  drawSprites();
}
