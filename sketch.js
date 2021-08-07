var tom,jerry,bg;
var tomstanding,tommoving,tomstopping;
var jerrystanding,jerrymoving,jerrystopping;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomstanding = loadAnimation("images/cat1.png");
    tommoving = loadAnimation("images/cat2.png","images/cat3.png");
    tomstopping = loadAnimation("images/cat4.png");

    jerrystanding = loadAnimation("images/mouse1.png");
    jerrymoving = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerrystopping = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("tomstand",tomstanding);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerrystand",jerrystanding);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x  < (tom.width - jerry.width)/2){
     tom.velocityX = 0;
     tom.addAnimation("tomstop",tomstopping);
     tom.changeAnimation("tomstop");
     tom.x = 300;
     tom.scale = 0.2;

     jerry.addAnimation("jerrystop",jerrystopping);
     jerry.changeAnimation("jerrystop");
     jerry.scale = 0.15;

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
   tom.velocityX = -3;
   tom.addAnimation("tommove",tommoving);
   tom.changeAnimation("tommove");
   jerry.addAnimation("jerrymove",jerrymoving);
   jerry.changeAnimation("jerrymove");
  }

}
