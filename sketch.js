var bgImg;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catimg1 = loadAnimation("images/cat1.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catimg3 = loadAnimation("images/cat4.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseimg4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite (870,600)
    cat.addAnimation("catSitting",catimg1)
    cat.scale = 0.2
    mouse = createSprite (200,600)
    mouse.addAnimation("mouseStanding",mouseimg1)
    mouse.scale = 0.15
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0
    cat.addAnimation("catLastImage",catimg3)
    cat.x = 300
    cat.scale = 0.2
    cat.changeAnimation("catLastImage")
    mouse.addAnimation("mouseLastImage",mouseimg3)
    mouse.scale = 0.15
    mouse.changeAnimation("mouseLastImage")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25
    cat.velocityX = -5
    cat.addAnimation("catRunning",catimg2)
    cat.changeAnimaiton("catRunning")
}

}
