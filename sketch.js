var tom,tom_emotions;
var jerry,jerry_emotions;
var background;

function preload() {
tom_emotions = loadAnimation("tomOne.png", "tomTwo.png", "tomThree.png", "tomFour");
jerry_emotions = loadAnimation("jerryOne.png", "jerryTwo.png", "jerryThree.png", "jerryFour.png");
backgroundImg = loadImage("garden.png");
}

function setup(){
createCanvas(1000,800);

tom = createSprite(50,50,50,50);
tom.addAnimation("tom_emotions", tom3)

jerry = createSprite(100,100,100,100);
jerry.addAnimation("jerry_emotions", jerry3)
}

function draw() {
background.addImage(backgroundImg)

if(tom.x - jerry.x < tom.width/2 + jerry.width/2 &&
    jerry.x - tom.x < tom. width/2 + jerry.width/2 &&
    tom.y - jerry.y < tom.height/2 + jerry.height/2 &&
    jerry.y - tom.y < tom.height/2 + jerry.height/2
    )
  
  {
    
    tom.addAnimation("tom_emotions", tom4);
    tom.changeAnimation("tomFour.png");
    jerry.addAnimation("jerry_emotions", jerry4);
    tom.changeAnimation("jerryFour.png");
  }




    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tom_emotions", tom2);
    tom.changeAnimation("tomTwo.png");
  }


}
