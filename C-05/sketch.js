//making pumpkin row
for (let i = 50; i < 400; i=i+50){
  let pumpkin = createSprite(i, 50, 20, 20);
}

//making tomato row
for (let a = 50; a < 400; a=a+50) {
  let tomato = createSprite(a,100,20,20);
}

//making mushroom row
for (let b = 50; b < 400; b=b+50) {
 let mushroom = createSprite(b,150,20,20)
}

//making brinjal row
for (let c = 50; c < 400; c=c+50) {
  let brinjal = createSprite(c,200,20,20)
}

//making carrot row
for (let d = 50; d < 400; d=d+50) {
  let carrot = createSprite(d,250,20,20)
}

//making spinach row 
for (let e = 50; e < 400; e=e+50) {
  let spinach= createSprite(e,300,20,20);
}

function draw() {
  background(rgb(139,69,19));
  drawSprites();

}
