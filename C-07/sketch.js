//making tomato row
for (let i = 50; i < 400; i = i + 50) {
    let onion = createSprite(i, 60, 20, 20);
    onion.setAnimation("onion"); 
}
//making brinjal row
for (let a = 50; a < 400; a = a + 50) {
    let tomato = createSprite(a, 119.8, 20, 20);
    tomato.setAnimation("tomato");
}
//making carrots row
for (let b = 50; b < 400; b = b + 50) {
    let capcicum = createSprite(b, 179.6, 20, 20)
    capcicum.setAnimation("capcisum");
}
//making brinjal row
for (let c = 50; c < 400; c = c + 50) {
    let carrots = createSprite(c, 239.4, 20, 20);
    carrots.setAnimation("carrot");
}

//making spinach row 
for (let e = 50; e < 400; e = e + 50) {
    let brinjal = createSprite(e, 299.2, 20, 20);
    brinjal.setAnimation("brinjal");
}

function draw() {

    background(rgb(139, 69, 19));
    drawSprites();

}
