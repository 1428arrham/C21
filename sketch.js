var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,550);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(200,200,50,80);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(300,300,50,80);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(400,400,50,80);
  gameObject3.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){

    movingRect.shapeColor="red";
    fixedRect.shapeColor="purple";
  }

  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  
  //if(isTouching(movingRect,gameObject1)){

    movingRect.shapeColor="red";
    gameObject1.shapeColor="orange";
 // }

  //else{
    movingRect.shapeColor="green";
    gameObject1.shapeColor="green";
  //}

 // if(isTouching(movingRect,gameObject2)){

    movingRect.shapeColor="red";
    gameObject2.shapeColor="cyan";
  }

  else{
    movingRect.shapeColor="green";
    gameObject2.shapeColor="green";
  }

  if(isTouching(movingRect,gameObject3)){

    movingRect.shapeColor="red";
    gameObject3.shapeColor="lime";
  }

  else{
    movingRect.shapeColor="green";
    gameObject3.shapeColor="green";
  }
  
  drawSprites();
//}

 function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  
      return true;
}
else {
 return false;
}

 }