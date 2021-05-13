var road0;
var boy0;
var diamond0;
var ruby0;
var jwell0;
var cash0;
var sword0;
var play=0;
var end=1;
var gameState=play;
var over0;


function preload(){
  road=loadImage("Road.png");
  boy=loadAnimation("runner1.png","runner2.png");
  diamond=loadImage("diamonds.png");
  ruby=loadImage("ruby.png");
  jwell=loadImage("jwell.png");
  cash=loadImage("cash.png");
  swordImg=loadImage("sword.png");
  overImg=loadImage("gameOver.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  road1();
  
  boy1();
  

  
  Dia=new Group();
  Rub=new Group();  
  Jwell=new Group();
  Cash= new Group();
  SwordGR= new Group();
  over1();
}

function draw(){
  
  over0.visible=false;
  if(gameState===play){
    
    if(road0.y>width){
    road0.y=height/2
  }
    
      boy0.x=mouseX
    
      
  diamond1();
  if(boy0.isTouching(Dia)){
    Dia.destroyEach();
  }
    
      ruby1();
  if(boy0.isTouching(Rub)){
    Rub.destroyEach();
  }
    
    jwell1();
  if(boy0.isTouching(Jwell)){
    Jwell.destroyEach();
  }
    
    cash1();
  if(boy0.isTouching(Cash)){
    Cash.destroyEach();
  }
  
     
  swordFun();
  if(boy0.isTouching(SwordGR)){
    gameState=end;
    
  }
  
    
  }
  
  

if(gameState===end){
  
  SwordGR.setVelocityYEach(0);
  SwordGR.setLifetimeEach(-1);
  
  Dia.setVelocityYEach(0);
  Dia.setLifetimeEach(-1);
  
  Cash.setVelocityYEach(0);
  Cash.setLifetimeEach(-1);
  
  Jwell.setVelocityYEach(0);
  Jwell.setLifetimeEach(-1);
  
  Rub.setVelocityYEach(0);
  Rub.setLifetimeEach(-1);
  
  
  road0.velocityY=0;
  
  over0.visible=true;
}
  
  
  
  
  
 
  
  drawSprites();
}

function road1(){
  road0=createSprite(width/2,height/2,20,20);
  road0.addImage("r",road);
  road0.velocityY=5;
}

function boy1(){
  boy0=createSprite(width/2,height-100,20,20);
  boy0.addAnimation("b",boy);
  boy0.scale=0.1;

}

function diamond1(){
  if(frameCount%50===0){
  diamond0=createSprite(random(width),0,20,20);
  diamond0.velocityY=5;
  diamond0.lifetime=200;
  diamond0.addImage("d",diamond);
  diamond0.scale=0.050;  
    
    Dia.add(diamond0);
  
      boy0.depth=diamond0.depth+1
}
}

function ruby1(){
  if(frameCount%100===0){
  ruby0=createSprite(20,0,20,20);
  ruby0.x=Math.round(random(width));
    ruby0.addImage("r",ruby);
  ruby0.velocityY=5;
  ruby0.scale=0.1;
  ruby0.lifetime=200;
    
    ruby0.depth=diamond0.depth;
    
    Rub.add(ruby0);
}
}

function jwell1(){
  if(frameCount%150===0){
  jwell0=createSprite(random(width),0,20,20);
  jwell0.addImage("j",jwell);
  jwell0.velocityY=5;
  jwell0.lifetime=200;
  jwell0.scale=0.2;
  
  jwell0.depth=boy0.depth-1
  
  Jwell.add(jwell0);
    
    
    jwell0.debug=true;
}
}

function cash1(){
  if(frameCount%200===0){
  cash0=createSprite(20,0,20,20);
  cash0.x=Math.round(random(width));
  cash0.addImage("c",cash);
  cash0.lifetime=200;
  cash0.velocityY=5;
  cash0.scale=0.1;
  
  cash0.depth=boy0.depth-1;
  
  Cash.add(cash0);
  
}
}

function swordFun(){
  if(frameCount%250===0){
  sword0=createSprite(random(width),0,20,20);
  sword0.addImage("s",swordImg);
  sword0.velocityY=5;
  sword0.lifetime=200;
  sword0.scale=0.2;  
  
  sword0.depth=boy0.depth-1;
    
  SwordGR.add(sword0);
}
}

function over1(){
  over0=createSprite(width/2,height/2,20,20);
  over0.addImage("o",overImg);
}