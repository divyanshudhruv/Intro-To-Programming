let pin1 = createSprite(200, 31,20,20);
let pin2 = createSprite(180, 51,20,20);
let pin3 = createSprite(220,51,20,20);
let pin4 = createSprite(200, 71,20,20);
let pin5 = createSprite(240, 71,20,20);
let pin6 = createSprite(160, 71,20,20);
let pin7 = createSprite(180, 91,20,20);
let pin8 = createSprite(218, 91,20,20);
let pin9 = createSprite(200, 108,20,20);

let ball = createSprite(200, 330,20,20);
ball.shapeColor='white';

ball.velocityY=-2.5;
ball.velocityX=4;

function draw() {
background('#CCCCCC');
  
createEdgeSprites();
pin1.bounceOff(edges);
pin2.bounceOff(edges);
pin3.bounceOff(edges);
pin4.bounceOff(edges);
pin5.bounceOff(edges);
pin6.bounceOff(edges);
pin7.bounceOff(edges);
pin8.bounceOff(edges);
pin9.bounceOff(edges);
ball.bounceOff(edges);
drawSprites();
pin1.bounce(pin2);
pin1.bounce(pin3);
pin1.bounce(pin4);
pin1.bounce(pin5);
pin1.bounce(pin6);
pin1.bounce(pin7);
pin1.bounce(pin8);
pin1.bounce(pin9);
pin1.bounce(ball);

pin2.bounce(pin1);
pin2.bounce(pin3);
pin2.bounce(pin4);
pin2.bounce(pin5);
pin2.bounce(pin6);
pin2.bounce(pin7);
pin2.bounce(pin8);
pin2.bounce(pin9);
pin2.bounce(ball);

pin3.bounce(pin1);
pin3.bounce(pin2);
pin3.bounce(pin4);
pin3.bounce(pin5);
pin3.bounce(pin6);
pin3.bounce(pin7);
pin3.bounce(pin8);
pin3.bounce(pin9);
pin3.bounce(ball);

pin4.bounce(pin1);
pin4.bounce(pin2);
pin4.bounce(pin3);
pin4.bounce(pin5);
pin4.bounce(pin6);
pin4.bounce(pin7);
pin4.bounce(pin8);
pin4.bounce(pin9);
pin4.bounce(ball);

pin5.bounce(pin1);
pin5.bounce(pin2);
pin5.bounce(pin3);
pin5.bounce(pin4);
pin5.bounce(pin6);
pin5.bounce(pin7);
pin5.bounce(pin8);
pin5.bounce(pin9);
pin5.bounce(ball);

pin6.bounce(pin1);
pin6.bounce(pin2);
pin6.bounce(pin3);
pin6.bounce(pin4);
pin6.bounce(pin5);
pin6.bounce(pin7);
pin6.bounce(pin8);
pin6.bounce(pin9);
pin6.bounce(ball);

pin7.bounce(pin1);
pin7.bounce(pin2);
pin7.bounce(pin3);
pin7.bounce(pin4);
pin7.bounce(pin5);
pin7.bounce(pin6);
pin7.bounce(pin8);
pin7.bounce(pin9);
pin7.bounce(ball);

pin8.bounceOff(pin1);
pin8.bounce(pin2);
pin8.bounce(pin3);
pin8.bounce(pin4);
pin8.bounce(pin5);
pin8.bounce(pin6);
pin8.bounce(pin7);
pin8.bounce(pin9);
pin8.bounce(ball);

pin9.bounce(pin1);
pin9.bounce(pin2);
pin9.bounce(pin3);
pin9.bounce(pin4);
pin9.bounce(pin5);
pin9.bounce(pin6);
pin9.bounce(pin7);
pin9.bounce(pin8);
pin9.bounce(ball);

ball.bounce(pin1);
ball.bounce(pin2);
ball.bounce(pin3);
ball.bounce(pin4);
ball.bounce(pin5);
ball.bounce(pin6);
ball.bounce(pin7);
ball.bounce(pin8);
ball.bounce(pin9);

drawSprites();
}
