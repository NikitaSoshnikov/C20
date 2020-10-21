var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100,100,50,80);
  fixedRect = createSprite(400,200,80,50);
  movingRect.shapeColor = "orange";
  fixedRect.shapeColor = "orange";
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor = "cyan";
  fixedRect.shapeColor = "cyan";
  }else{
    movingRect.shapeColor = "orange";
  fixedRect.shapeColor = "orange";
  }

  drawSprites();
} 
