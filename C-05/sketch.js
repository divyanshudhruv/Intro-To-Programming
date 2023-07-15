//making pumpkin row
for (var i = 50; i < 400; i=i+50){
  var pumpkin = createSprite(i, 50, 20, 20);
}

//making tomato row
for (var a = 50; a < 400; a=a+50) {
  var tomato = createSprite(a,100,20,20);
}

//making mushroom row
for (var b = 50; b < 400; b=b+50) {
 var mushroom = createSprite(b,150,20,20)
}

//making brinjal row
for (var c = 50; c < 400; c=c+50) {
  var brinjal = createSprite(c,200,20,20)
}

//making carrot row
for (var d = 50; d < 400; d=d+50) {
  var carrot = createSprite(d,250,20,20)
}

//making spinach row 
for (var e = 50; e < 400; e=e+50) {
  var spinach= createSprite(e,300,20,20);
}

function draw() {
  background(rgb(139,69,19));
  drawSprites();

}
