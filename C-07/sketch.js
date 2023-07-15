//making tomato row
for (var i = 50; i < 400; i = i + 50) {
    var onion = createSprite(i, 60, 20, 20);
    onion.setAnimation("onion"); 
}
//making brinjal row
for (var a = 50; a < 400; a = a + 50) {
    var tomato = createSprite(a, 119.8, 20, 20);
    tomato.setAnimation("tomato");
}
//making carrots row
for (var b = 50; b < 400; b = b + 50) {
    var capcicum = createSprite(b, 179.6, 20, 20)
    capcicum.setAnimation("capcisum");
}
//making brinjal row
for (var c = 50; c < 400; c = c + 50) {
    var carrots = createSprite(c, 239.4, 20, 20);
    carrots.setAnimation("carrot");
}

//making spinach row 
for (var e = 50; e < 400; e = e + 50) {
    var brinjal = createSprite(e, 299.2, 20, 20);
    brinjal.setAnimation("brinjal");
}

function draw() {

    background(rgb(139, 69, 19));
    drawSprites();

}
