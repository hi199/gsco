var  car , wall
  var speed , weight
  function setup() {
  speed=random(55,90)
  weight=random(400,1500)
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500, 200, 60, height/2);
}

function draw() {}
  wall(80,80,80)
  car.x=speed
  if(car.isTouching(wall)){
   if (wall.x-car.x<(car.width+wall.width/2)){
   car.velocityX=0
   var defomation=0.5*weight*speed*speed/22509
   if (defomation>100){
     car.shapecolor(230,0,0)
   }
   if (defomation<180 && defomation>100){
    car.shapecolor(230,230,0)
  }
}
  background(255,255,255);  
  drawSprites();
}