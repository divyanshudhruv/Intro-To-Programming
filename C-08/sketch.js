//creating boy, land and corona
var land = createSprite(200, 350, 350, 2);
land.setAnimation("land");

var boy = createSprite(200, 260, 20, 20);
boy.setAnimation("boy");
boy.width = 60;
boy.height = 90;

var c1 = createSprite(30, -30, 20, 20);
c1.setAnimation("Corona");
c1.height = 45;
c1.width = 45;

var c2 = createSprite(95, -30, 20, 20);
c2.setAnimation("Corona");
c2.height = 45;
c2.width = 45;

var c3 = createSprite(160, -30, 20, 20);
c3.setAnimation("Corona");
c3.height = 45;
c3.width = 45;

var c4 = createSprite(225, -30, 20, 20);
c4.setAnimation("Corona");
c4.height = 45;
c4.width = 45;

var c5 = createSprite(290, -30, 20, 20);
c5.setAnimation("Corona");
c5.height = 45;
c5.width = 45;

var c6 = createSprite(355, -30, 20, 20);
c6.setAnimation("Corona");
c6.height = 45;
c6.width = 45;

//variable to store different state of game
var gameState = "serve";

//variable to keep score
var score = 0;
var life = 3;

//level 2

var level1 = createSprite(30, -30, 10, 10);
level1.setAnimation("Corona");
level1.height = 45;
level1.width = 45;

var q2 = createSprite(95, -30, 10, 10);
q2.setAnimation("Corona");
q2.height = 45;
q2.width = 45;

var q3 = createSprite(170, -30, 10, 10);
q3.setAnimation("Corona");
q3.width = 45;
q3.height = 45;

var q4 = createSprite(240, -30, 10, 10);
q4.setAnimation("Corona");
q4.height = 45;
q4.width = 45;

var q5 = createSprite(305, -30, 10, 10);
q5.setAnimation("Corona");
q5.width = 45;
q5.height = 45;

var q6 = createSprite(370, -30, 10, 10);
q6.setAnimation("Corona");
q6.width = 45;
q6.height = 45;

function draw() {
    //clear the screen
    background("white");

    //place text in center
    if (gameState === "serve") {
        text("Press Space To Play", 150, 180);
        text("Minimum score is 8 to win", 135, 200);
    }

    //display scores
    text("Score:" + score, 20, 25);
    text("Lives:" + life, 350, 25);

    //make the boy moves with the arrow key
    if (keyWentDown("right")) {
        boy.x = boy.x + 20;
        boy.setAnimation("boyr");
    }

    if (keyWentUp(RIGHT_ARROW)) {
        boy.setAnimation("boy");
    }

    if (keyWentDown("left")) {
        boy.x = boy.x - 20;
        boy.setAnimation("boyl");
    }

    if (keyWentUp("left")) {
        boy.setAnimation("boy");
    }

    //creating edge
    createEdgeSprites();

    //changing animation of corona virus 
    if (c1.isTouching(land)) {
        c1.setAnimation("anim");
        c1.scale = 2;
        c1.velocityY = -5;
        score = score + 1;
    }

    if (c2.isTouching(land)) {
        c2.setAnimation("anim");
        c2.scale = 2;
        c2.velocityY = -5;
        score = score + 1;
    }

    if (c3.isTouching(land)) {
        c3.setAnimation("anim");
        c3.scale = 2;
        c3.velocityY = -5;
        score = score + 1;
    }

    if (c4.isTouching(land)) {
        c4.setAnimation("anim");
        c4.scale = 2;
        c4.velocityY = -5;
        score = score + 1;
    }

    if (c5.isTouching(land)) {
        c5.setAnimation("anim");
        c5.scale = 2;
        c5.velocityY = -5;
        score = score + 1;
    }

    if (c6.isTouching(land)) {
        c6.setAnimation("anim");
        c6.scale = 2;
        c6.velocityY = -5;
        score = score + 1;
    }

    if (c1.isTouching(boy)) {
        life = life - 1;
        c1.x = 450;
    }

    if (c2.isTouching(boy)) {
        life = life - 1;
        c2.x = 450;
    }

    if (c3.isTouching(boy)) {
        life = life - 1;
        c3.x = 450;
    }

    if (c4.isTouching(boy)) {
        life = life - 1;
        c4.x = 450;
    }

    if (c5.isTouching(boy)) {
        life = life - 1;
        c5.x = 450;
    }

    if (c6.isTouching(boy)) {
        life = life - 1;
        c6.x = 450;
    }

    if (level1.isTouching(land)) {
        level1.setAnimation("anim");
        level1.scale = 2;
        level1.velocityY = -5;
        score = score + 1;
    }

    if (q2.isTouching(land)) {
        q2.setAnimation("anim");
        q2.scale = 2;
        q2.velocityY = -5;
        score = score + 1;
    }

    if (q3.isTouching(land)) {
        q3.setAnimation("anim");
        q3.scale = 2;
        q3.velocityY = -5;
        score = score + 1;
    }

    if (q4.isTouching(land)) {
        q4.setAnimation("anim");
        q4.scale = 2;
        q4.velocityY = -5;
        score = score + 1;
    }

    if (q5.isTouching(land)) {
        q5.setAnimation("anim");
        q5.scale = 2;
        q5.velocityY = -5;
        score = score + 1;
    }

    if (q6.isTouching(land)) {
        q6.setAnimation("anim");
        q6.scale = 2;
        q6.velocityY = -5;
        score = score + 1;
    }

    if (level1.isTouching(boy)) {
        life = life - 1;
        level1.x = 450;
    }

    if (q2.isTouching(boy)) {
        life = life - 1;
        q2.x = 450;
    }

    if (q3.isTouching(boy)) {
        life = life - 1;
        q3.x = 450;
    }

    if (q4.isTouching(boy)) {
        life = life - 1;
        q4.x = 450;
    }

    if (q5.isTouching(boy)) {
        life = life - 1;
        q5.x = 450;
    }

    if (q6.isTouching(boy)) {
        life = life - 1;
        q6.x = 450;
    }

    //colliding the boy with edgs
    boy.collide(leftEdge);
    boy.collide(rightEdge);

    //serving and starting the game
    if (keyDown("space") && gameState === "serve") {
        c1.velocityY = 1;
        c2.velocityY = 2;
        c3.velocityY = 1.2;
        c4.velocityY = 2.4;
        c5.velocityY = 1.9;
        c6.velocityY = 0.8;
        boy.setAnimation("boy");
        gameState = "play";
    }

    if (life === 0) {
        text("Press R to reset and be careful, in this you have only 2 lives! ", 40, 180);
        text("Minimum Score is 8 to win", 130, 200);
        c1.velocityY = 0;
        c2.velocityY = 0;
        c3.velocityY = 0;
        c4.velocityY = 0;
        c5.velocityY = 0;
        c6.velocityY = 0;
        gameState = "over";
    }

    if (keyDown("R") && gameState === "over") {
        gameState = "atarte";
        c1.visible = 0;
        c2.visible = 0;
        c3.visible = 0;
        c4.visible = 0;
        c5.visible = 0;
        c6.visible = 0;
        q2.velocityY = 2;
        q3.velocityY = 1;
        q4.velocityY = 0.91;
        q5.velocityY = 1.5;
        q6.velocityY = 2.6;
        score = 0;
        life = 3;
        gameState = "overeset";
    }

    if (life === 1 && gameState === "overeset") {
        background("yellow");
        level1.velocityY = 0;
        q2.velocityY = 0;
        q3.velocityY = 0;
        q4.velocityY = 0;
        q5.velocityY = 0;
        q6.velocityY = 0;
        level1.x = 450;
        q2.x = 450;
        q3.x = 450;
        q4.x = 450;
        q5.x = 450;
        q6.x = 450;
        textSize(20);
        text("Try Next Time... You are CORONA positive", 10, 200);
        boy.setAnimation("sboy");
    }

    if (score === 8) {
        textSize(25);
        text("You Win!!", 150, 140);
        gameState = "qwerty";
    }

    //drawing sprites
    drawSprites();
}
