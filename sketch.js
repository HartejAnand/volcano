var ground;
var lavaI, diamondI;
var lava1,lava2,lava3,lava4,lava5,lava6,lava7,lava8,lava9;
var diamond1,diamond2,diamond3,diamond4,diamond5,diamond6,diamond7,diamond8,diamond9;
var hat, hatI;

function preload(){
  ground=loadImage("rock.jpg");
  lavaI=loadImage("lava.png");
  diamondI=loadImage("diamond.png");
  hatI=loadImage("hat.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  lava1=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava1.addImage(lavaI);
  lava1.scale=0.045;
  lava2=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava2.addImage(lavaI);
  lava2.scale=0.045;
  lava3=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava3.addImage(lavaI);
  lava3.scale=0.045;
  lava4=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava4.addImage(lavaI);
  lava4.scale=0.045;
  lava5=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava5.addImage(lavaI);
  lava5.scale=0.045;
  lava6=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava6.addImage(lavaI);
  lava6.scale=0.045;
  lava7=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava7.addImage(lavaI);
  lava7.scale=0.045;
  lava8=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava8.addImage(lavaI);
  lava8.scale=0.045;
  lava9=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava9.addImage(lavaI);
  lava9.scale=0.045;

  diamond1=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond1.addImage(diamondI);
  diamond1.scale=0.1;
  diamond2=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond2.addImage(diamondI);
  diamond2.scale=0.1;
  diamond3=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond3.addImage(diamondI);
  diamond3.scale=0.1;
  diamond4=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond4.addImage(diamondI);
  diamond4.scale=0.1;
  diamond5=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond5.addImage(diamondI);
  diamond5.scale=0.1;
  diamond6=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond6.addImage(diamondI);
  diamond6.scale=0.1;
  diamond7=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond7.addImage(diamondI);
  diamond7.scale=0.1;
  diamond8=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond8.addImage(diamondI);
  diamond8.scale=0.1;
  diamond9=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond9.addImage(diamondI);
  diamond9.scale=0.1;
  
  hat=createSprite(500,500);
  hat.addImage(hatI);
  hat.scale=0.4;
  
  
}



function draw() {
  background(50,20,0);

  if(keyDown("up")){
    hat.y-=2;
  }
  if(keyDown("down")){
    hat.y+=2;
  }
  if(keyDown("left")){
    hat.x-=3;
  }
  if(keyDown("right")){
    hat.x+=3;
  }
  
  camera.position.x = hat.position.x;
  camera.position.y = hat.position.y;

  console.log(camera.position.x);
  console.log(camera.position.y);
  
  if(hat.x>displayWidth*2){
    hat.x-=3;
  }
  if(hat.x<0){
    hat.x+=3;
  }
  if(hat.y>displayHeight*2){
    hat.y-=2;
  }
  if(hat.y<0){
    hat.y+=2;
  }
  drawSprites();

  noFill();
  strokeWeight(5);
  stroke(155,255,0);
  rect(0,0,width*2,height*2);
}

