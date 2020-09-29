var jungleImage;
var stoneImage;
var bananaImage;
var monkey01_running, monkey02_running, monkey03_running, monkey04_running, monkey05_running, monkey06_running, monkey07_running, monkey08_running, monkey09_running, monkey10_running;
var stoneGroup;
var bananaGroup;



function preload() {
  obstacleImage = loadImage("stone.png");
  bananaImage = loadImage("banana.png");
  backImage = loadImage("jungle.jpg");
  stoneImage = loadImage("stone.png");
  
  player_running = 
    loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
  "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  jungleImage = loadImage("jungle.jpg");

}



function setup() {
  createCanvas(400, 400);
  
  jungle = createSprite(200,200,400,400);
  jungle.addAnimation("jungle",jungleImage);
  jungle.velocityX=-4;
  jungle.x=jungle.width/2;
  
  
  monkey = createSprite(50,360,100,50);
  monkey.addAnimation("running",player_running);
  monkey.scale=0.13;
  
  ground = createSprite(200,360,400,5);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  ground.visible=false;
  
    banana = createSprite(300,340,10,40);
    banana.y = Math.round(random(150,220));
    banana.velocityX = -6;
    banana.addAnimation("banana",bananaImage);
    banana.scale=0.03;
  
    bananaGroup=new Group();
    stoneGroup=new Group();
  
    score=0;
}


function draw() {
   background(220);
  
  ground.x=ground.width/2;
  
   if (jungle.x<0){
      jungle.x=jungle.width/2;
    }
  
     stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 300,50);
  
    monkey.collide(ground);
  
if (keyDown("space")&& monkey.y >= 280){
    monkey.velocityY = -12 ;
}
   
  monkey.velocityY = monkey.velocityY + 0.3;
  
  //spawn banana
  spawnBanana();
  
  //spawn stone
  spawnStone();
  
  
  
  drawSprites();

}

function spawnBanana() {

    if (World.frameCount % 60 === 0) { 
    banana = createSprite(400,400,10,40);
    banana.y = Math.round(random(150,220));
    }
    banana.velocityX = -6;
    banana.addAnimation("banana",bananaImage);
    banana.scale=0.05;
  
    if (bananaGroup.isTouching(monkey)){
   bananaGroup.destroyEach();
    }
   bananaGroup.add(banana);
}

function spawnStone() {
 if (World.frameCount % 100 === 0) { 
   stone = createSprite(300,340,1,1);
 
   stone.velocityX=-4;
    stone.addAnimation("stone",stoneImage);
    stone.scale=0.2;
   
      stoneGroup.add(stone);
   
 switch(score){
   case 10: monkey.scale=0.12;
     break;
   case 20: monkey.scale=0.14;
     break;
   case 30: monkey.scale=0.16;
     break;
   case 40: monkey.scake=0.18;
     break;
     default: break;
 
 
 }
 
 }
  
  if(stoneGroup.isTouching(monkey)){
  monkey.scale=0.2;
  }
}
