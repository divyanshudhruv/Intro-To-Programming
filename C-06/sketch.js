var g1 = createSprite(200, 28, 100, 20);
g1.shapeColor = "yellow";

var g2 = createSprite(200, 372, 100, 20);
g2.shapeColor = "yellow";

var ball = createSprite(200, 200, 10, 10);
ball.shapeColor = "white";

var playerm = createSprite(200, 50, 50, 10);
playerm.shapeColor = "black";

var computerm = createSprite(200, 350, 50, 10);
computerm.shapeColor = "black";

var cscore = 0;
var pscore = 0;

var gameState = "serve";

var l1 = createSprite(10, 200, 5, 400);
l1.shapeColor = "white";

var l2 = createSprite(390, 200, 5, 400);
l2.shapeColor = "white";

var l3 = createSprite(200, 10, 400, 5);
l3.shapeColor = "white";

var l4 = createSprite(200, 390, 400, 5);
l4.shapeColor = "white";

var l5 = createSprite(200, 150, 400, 5);
l5.shapeColor = "white";

var l6 = createSprite(200, 250, 400, 5);
l6.shapeColor = "white";

var l7 = createSprite(200, 1, 400, 5);
l7.shapeColor = "white";

var l8 = createSprite(200, 399, 400, 5);
l8.shapeColor = "white";

var l9 = createSprite(1, 200, 5, 400);
l9.shapeColor = "white";

var l10 = createSprite(399, 200, 5, 400);
l10.shapeColor = "white";







function draw() {
    background("green");

    for (var i = 0; i < 400; i = i + 20) {
        line(i, 200, i + 10, 200);
    }

    if (gameState === "serve") {

        textSize(20);
        text("Press Space To Serve", 110, 220);
    }


    textSize(15);
    text(pscore, 20, 170);

    textSize(15);
    text(cscore, 20, 230);


    if (keyDown("left")) {
        playerm.x = playerm.x - 10;
    }

    if (keyDown("right")) {
        playerm.x = playerm.x + 10;
    }

    if (keyDown("up")) {
        if (playerm.y > 25) {
            playerm.y = playerm.y - 10;
        }
    }

    if (keyDown("down")) {
        if (playerm.y < 120) {
            playerm.y = playerm.y + 10;
        }
    }


    computerm.x = ball.x;

    createEdgeSprites();
    ball.bounceOff(computerm);
    ball.bounceOff(playerm);
    ball.bounceOff(leftEdge);
    ball.bounceOff(rightEdge);
    playerm.collide(edges);
    computerm.collide(edges);


    if (ball.isTouching(g1)) {
        gameState = "serve";
        cscore = cscore + 1;
        reset();
    }

    if (ball.isTouching(g2)) {
        gameState = "serve";
        pscore = cscore + 1;
        reset();
    }



    if (keyDown("space") && gameState === "serve") {
        gameState = "play";
        serve();

    }





    if (ball.y < 0 || ball.y > 400) {
        gameState = "serve";
        reset();

    }
    if (cscore === 5 || pscore === 5) {
        textSize(20);
        text("Press A To Reset", 120, 230);
        gameState = "end";
    }

    if (keyDown("a") && gameState === "end") {
        gameState = "serve";
        cscore = 0;
        pscore = 0;

    }

    drawSprites();
}
function serve() {
    ball.velocityX = 3;
    ball.velocityY = 4;


}

function reset() {
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.x = 200;
    ball.y = 200;

}


