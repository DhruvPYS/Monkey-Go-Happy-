
var monkey , monkey_running, monkeyend
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, bananascore, ground
var gameState, PLAY, END
PLAY = 1
END = 0
score = 0;
bananascore = 0;
gameState = PLAY

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeyend = loadAnimation("sprite_0.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
monkey = createSprite(50,450,10,10)
monkey.addAnimation("monkey_running", monkey_running)
monkey.addAnimation("monkeyend", monkeyend)
  monkey.scale = 0.15
ground = createSprite(300,505,1200,10)
  ground.x = ground.width/2
FoodGroup = createGroup();
obstacleGroup = createGroup();
}

function draw() {
background("white")
  console.log(monkey.y)
  text("Survival Score:" + score, 300, 30 )

if(gameState === PLAY)
{
  food();
obstacles();
    ground.velocityX = -7

  if(ground.x<0)
  {
  ground.x = ground.width/2

  }
  if(keyDown("space")&& monkey.y > 453)
    {
    monkey.velocityY = -23
    }
  if(FoodGroup.isTouching(monkey))
    {
    bananascore = bananascore + 200
    FoodGroup.destroyEach();
    
    }
  if(obstacleGroup.isTouching(monkey))
    {
    gameState = END;
    }
  score = frameCount + bananascore 
  
monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground)
} else if
  (gameState === END)
{
ground.velocityX = 0;
monkey.velocityY = 0;
obstacleGroup.setVelocityXEach(0);
FoodGroup.setVelocityXEach(0);
monkey.changeAnimation("monkeyend", monkeyend)
obstacleGroup.setLifetimeEach(-1);
FoodGroup.setLifetimeEach(-1);

}
  
  
  
drawSprites();
}


function food()
{
if(frameCount%80===0)
  {
  banana = createSprite(600,100,10,10)
  banana.addImage("bananaimage", bananaImage)
  banana.y = Math.round(random(120,200))
  banana.scale = 0.15
  banana.velocityX = -8
  banana.lifetime = 75
  FoodGroup.add(banana)
  }
} 

function obstacles()
{
if(frameCount%300===0)
  {
    obstacle = createSprite(600,470,10,10)
   obstacle.addImage("obstacleimage", obstaceImage)
    obstacle.scale = 0.15
    obstacle.velocityX = -8
    obstacle.lifetime = 75
    obstacleGroup.add(obstacle)
  }
}





