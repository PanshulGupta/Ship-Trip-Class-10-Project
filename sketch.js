
var backg;
var backImg;
var ship, ship_running;

function preload(){
  backImg = loadImage("sea.png","sea.png","sea.png");
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(800,600);
  backg = createSprite(400,400,800,800);
  backg.addImage("back", backImg);

  backg.velocityX = -4
  backg.scale = 0.84
  
  
  ship = createSprite(200,350,300,300);
  ship.addAnimation("running",ship_running);
  ship.scale = 0.5;

  


}





function draw() {
  background("white");
  drawSprites();

  if (backg.x < 0){
    backg.x = backg.width/2
  }
  
}