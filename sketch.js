var moving, stationary

function setup() {

  createCanvas(800,400);
  moving = createSprite(400, 200, 50, 50);
  stationary = createSprite(500, 200, 50, 50)
  
  
}

function draw() {
  background(255,255,255);  
  moving.x = mouseX
  moving.y = mouseY

if(moving.x - stationary.x < moving.width/2 + stationary.width/2 &&
  stationary.x - moving.x < moving.width/2 + stationary.width/2 &&
  moving.y - stationary.y < moving.height/2 + stationary.height/2 &&
  stationary.y - moving.y < moving.height/2 + stationary.height/2 )
  {
moving.shapeColor = "red"
stationary.shapeColor= "blue"

}
else {moving.shapeColor = "blue"
stationary.shapeColor = "red"} 

//if(){}
drawSprites();
}