var SeaImg, sea 
var ShipImg, ship
 
function preload(){
ShipImg = loadAnimation('ship-1.png', 'ship-2.png', 'ship-3.png', 'ship-4.png');
SeaImg = loadImage ('sea.png');

}

function setup(){
  createCanvas(400,400);
  sea = createSprite (180,200,50,50)
  sea.addImage(SeaImg);
  ship = createSprite (65,310,10,10)
  ship.addAnimation('ship-1.png', 'ship-2.png', 'ship-3.png', 'ship-4.png');
  ship.scale = 0.2
  
}

function draw() {
  background("blue");
  
  sea.velocityX = -2
  
  if (sea.x < 0) {
    sea.x = sea.width/2;
  }
  
  
  
  
  
  
  
  
  
  
  drawSprites();

}
