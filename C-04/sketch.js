var diamond=createSprite(380,40,15,15);
diamond.shapeColor='white';

var l=createSprite(200,200,5,200);
l.velocityX=0;
l.velocityY=2;
l.shapeColor='red';

var thief=createSprite(10,370,15,15);
thief.velocityX=0;
thief.velocityY=0;

var laser1=createSprite(100,333,200,5);
laser1.shapeColor='red';
laser1.velocityY=2;
laser1.velocityX=2;

var laser2=createSprite(300,282,200,5);
laser2.shapeColor='red';
laser2.velocityY=0;
laser2.velocityX=-2;

var laser3=createSprite(300,63,200,5);
laser3.shapeColor='red';
laser3.velocityY=-2;
laser3.velocityX=-2;

var laser4=createSprite(100,114,200,5);
laser4.shapeColor='red';
laser4.velocityY=0;
laser4.velocityX=2;

var down=createSprite(200,400,400,10);
down.shapeColor='red';

function draw() {
  background("#CCCCCC");
  drawSprites();
  createEdgeSprites();
  
  
  
  if (keyDown(UP_ARROW)) {
    thief.velocityY=-2;
    thief.velocityX=0;
  }
  
  if (keyDown(DOWN_ARROW)) {
    thief.velocityY=2;
    thief.velocityX=0;
  }
  
  if (keyDown(LEFT_ARROW)) {
    thief.velocityX=-2;
    thief.velocityY=0;
  }

  if (keyDown(RIGHT_ARROW)) {
    thief.velocityX=2;
    thief.velocityY=0;
  }



thief.collide(edges);
laser1.bounceOff(edges);
laser2.bounceOff(edges);
laser3.bounceOff(edges);
laser4.bounceOff(edges);
l.bounceOff(edges);


if (laser1.isTouching(thief)||laser2.isTouching(thief)||laser3.isTouching(thief)||laser4.isTouching(thief)||down.isTouching(thief)||l.isTouching(thief)) {
  textSize(24);
  text("Thief is caught...", 120, 200);
  
  laser1.velocityX=0;
  laser1.velocityY=0;
  laser2.velocityX=0;
  laser2.velocityY=0;
  laser3.velocityX=0;
  laser3.velocityY=0;
  laser4.velocityX=0;
  laser4.velocityY=0;
  l.velocityX=0;
  l.velocityY=0;
  thief.velocityX=0;
  thief.velocityY=0;
}


if (thief.isTouching(diamond)) {
  background("cyan");
  textSize(22);
  
 text("You win...", 100, 200);
  laser1.velocityX=0;
  laser1.velocityY=0;
  laser2.velocityX=0;
  laser2.velocityY=0;
  laser3.velocityX=0;
  laser3.velocityY=0;
  laser4.velocityX=0;
  laser4.velocityY=0;
      
  thief.velocityX=0;
  thief.velocityY=0;
 }
}
