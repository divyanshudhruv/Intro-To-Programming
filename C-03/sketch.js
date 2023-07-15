
//Making cardboard boxes
var sofia = createSprite(20, 20,15,15);
sofia.shapeColor='orange ';

//1
var sprite1 = createSprite(50, 35,10,70);
sprite1.shapeColor='red';

//2
var sprite2 = createSprite(40, 100,85,10);
sprite2.shapeColor='red';

//3
var sprite3 = createSprite(110, 65,70,10);
sprite3.shapeColor='red';

//4
var sprite4 = createSprite(140,90,10,60);
sprite4.shapeColor='red';

//5
var sprite5 = createSprite(120,35,85,10);
sprite5.shapeColor='red';

//6
var sprite6 = createSprite(167, 10,10,60);
sprite6.shapeColor='red';

//7
var sprite7 = createSprite(167, 10,10,60);
sprite7.shapeColor='red';

//8
var sprite8 = createSprite(120, 140,180,10);
sprite8.shapeColor='red';

//9
var sprite9 = createSprite(30, 180,10,90);
sprite9.shapeColor='red';

//10
var sprite10 = createSprite(170, 90,10,50);
sprite10.shapeColor='blue';

//11
var sprite11 = createSprite(260, 110,180,10);
sprite11.shapeColor='blue';

//12
var sprite12 = createSprite(120, 140,180,10);
sprite12.shapeColor='red';

//13
var sprite13 = createSprite(200, 40,10,80);
sprite13.shapeColor='blue';

//14
var sprite14 = createSprite(255, 80,120,10);
sprite14.shapeColor='blue';

//15
var sprite15 = createSprite(320, 40,180,10);
sprite15.shapeColor='blue';

//16
var sprite16 = createSprite(120, 220,180,10);
sprite16.shapeColor='red';

//17
var sprite17 = createSprite(345, 140,10,70);
sprite17.shapeColor='blue';

//18
var sprite18 = createSprite(225, 180,250,10);
sprite18.shapeColor='blue';

//19
var sprite19 = createSprite(300, 130,10,50);
sprite19.shapeColor='blue';

//20
var sprite20 = createSprite(50,255,180,10);
sprite20.shapeColor='green';

//21
var sprite21 = createSprite(210, 295,10,160);
sprite21.shapeColor='red';

//22
var sprite22 = createSprite(240, 270,10,80);
sprite22.shapeColor='purple';

//23
var sprite23 = createSprite(320, 270,10,80);
sprite23.shapeColor='purple';

//24
var sprite24 = createSprite(280, 230,90,10);
sprite24.shapeColor='purple';

//25
var sprite25 = createSprite(280, 310,90,10);
sprite25.shapeColor='purple';

//26
var sprite26 = createSprite(280, 230,90,10);
sprite26.shapeColor='purple';

//27
var sprite27 = createSprite(390, 300,30,10);
sprite27.shapeColor='purple';

//28
var sprite28 = createSprite(370, 260,10,90);
sprite28.shapeColor='purple';

//29
var sprite29 = createSprite(340, 340,120,10);
sprite29.shapeColor='purple';

//30
var sprite30 = createSprite(90, 290,99,10);
sprite30.shapeColor='green';

//31
var sprite31 = createSprite(40, 330,10,90);
sprite31.shapeColor='green';
//Exit gate
var exit = createSprite(380,370,30,40);
exit.shapeColor= 'cyan';


//setting velocity
sofia.velocityX=0;
sofia.velocityY=0;

function draw() {
  background("black");
  
  drawSprites();

  //colliding the sprites
  createEdgeSprites();
  sofia.collide(edges);
  sofia.collide(sprite1);
  sofia.collide(sprite2);
  sofia.collide(sprite3) ;
  sofia.collide(sprite4);
  sofia.collide(sprite5);
  sofia.collide(sprite6) ;
  sofia.collide(sprite7);
  sofia.collide(sprite8);
  sofia.collide(sprite9) ;
  sofia.collide(sprite10);
  sofia.collide(sprite11);
  sofia.collide(sprite12) ;
  sofia.collide(sprite13);
  sofia.collide(sprite14);
  sofia.collide(sprite15) ;
  sofia.collide(sprite16);
  sofia.collide(sprite17);
  sofia.collide(sprite18) ;
  sofia.collide(sprite19);
  sofia.collide(sprite20);
  sofia.collide(sprite21) ;
  sofia.collide(sprite22);
  sofia.collide(sprite23);
  sofia.collide(sprite24);
  sofia.collide(sprite25);
  sofia.collide(sprite26) ;
  sofia.collide(sprite27);
  sofia.collide(sprite28);
  sofia.collide(sprite29) ;
  sofia.collide(sprite30);
  sofia.collide(sprite31);
 
  
  
  
  
  
  
  
  
  
  
  //functions of sofia
  
  //move up
  if(keyDown(UP_ARROW)) {
    sofia.velocityX = 0;
    sofia.velocityY = -2;
  
    
  }
  //move down
  if(keyDown(DOWN_ARROW)) {
    sofia.velocityX = 0;
    sofia.velocityY = 2;
  }
  
  //move left
  if(keyDown(LEFT_ARROW)){
    sofia.velocityX = -2;
    sofia.velocityY = 0;
      
     
  }
  
  //move right
  if(keyDown(RIGHT_ARROW)){
    sofia.velocityX = 2;
    sofia.velocityY = 0;
  }
  
  //text display
  if (  sofia.isTouching(exit)) {
    background("blue");
    textSize(50);
    textFont("Arial");
    text("You Win! ", 100, 200);
  }
}
