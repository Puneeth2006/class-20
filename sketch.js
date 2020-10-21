var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(300,300,50,50);
  movingRect=createSprite(600,300,70,50);

  fixedRect.debug=true;
  movingRect.debug=true;

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";  

  fixedRect.velocityX=3;
  movingRect.velocityX=-3;


}


function draw() {
  background("cyan");  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;

  console.log(movingRect.x-fixedRect.x);

  //collison algorithm
  if(movingRect.x-fixedRect.x<= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x-movingRect.x<= movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y-fixedRect.y<= movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y-movingRect.y<= movingRect.height/2 + fixedRect.height/2) {
    
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";  
  }else{
    
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";  
  }

//start:bounceOff Algorithm
if(movingRect.x-fixedRect.x<= movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x-movingRect.x<= movingRect.width/2 + fixedRect.width/2){
     fixedRect.velocityX=(-1)* fixedRect.velocityX;
     movingRect.velocityX=(-1)* movingRect.velocityX;
}

//end:bounceOff Algorithm

  

  drawSprites();
}