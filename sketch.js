var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombiesGroup, zombieImg
var bulletImg, bullet


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombieImg = loadImage("assets/zombie.png")
  bulletImg = loadImage("assets/bullet.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)



   zombiesGroup = new Group()

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  player.addImage(shooter_shooting)
  createBullets()
  
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)

}


zombieMove()
drawSprites();

}

function zombieMove(){
if(frameCount % 50 === 0){
  zombie = createSprite(windowWidth - 50,392, 50, 50)
  zombie.y = Math.round(random(0,windowHeight-windowHeight/6))
  zombie.addImage(zombieImg)
  zombie.scale = 0.17
  zombie.velocityX = -2
  zombiesGroup.add(zombie)
}
}


  function createBullets() {
    bullet= createSprite(displayWidth-1150, displayHeight-250, 60, 10);
    bullet.addImage(bulletImg);
    bullet.y=player.y - 25;
    bullet.velocityX = 7;
    //bullet.lifetime = 100;
    bullet.scale = 0.04;
  }
