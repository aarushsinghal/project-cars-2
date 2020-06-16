var car,wall,weight,speed;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(100, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white";
  wall = createSprite(1500, 200, 60, height);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(5,3,7);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    deformation=(0.5 * weight * speed * speed)/22500;
  

  if(deformation<100){
    car.shapeColor="green";
  }

  if(deformation>=100&&deformation<=180){
    car.shapeColor="yellow"
  }

  if(deformation>180){
    car,shapeColor="red"
  }
}
  drawSprites();
}