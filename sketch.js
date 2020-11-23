var moving_object, fixed_object,object_1,object_2,ball,triangle;

function setup() {
  createCanvas(800,600);
  moving_object = createSprite(200,500,50,50);
  moving_object.shapeColor = "red";

  object_1 = createSprite(200,400,50,50);
  object_1.shapeColor = "cyan";

  fixed_object = createSprite(200,300,50,50);
  fixed_object.shapeColor = "yellow";

  object_2 = createSprite(300,250,50,50);
  object_2.shapeColor = "pink";

  ball = createSprite(250,100,50,50);
  ball.shapeColor = "orange";

  triangle = createSprite(350,100,50,50);
  triangle.shapeColor = "maroon";

  triangle.velocityX = -3;
  ball.velocityX = 3;
}

function draw() {
  background("blue");  
  drawSprites();

// isTouching algorithm
  moving_object.y = World.mouseY;
  moving_object.x = World.mouseX;

  bounceOff(ball,triangle);

   if(isTouching(moving_object,object_2)) {
    moving_object.shapeColor = "green";
    object_2.shapeColor = "green";
   }
   else{
    moving_object.shapeColor = "red";
    object_2.shapeColor = "pink";
   }
}

function isTouching(obj1,obj2) {
    if(obj1.x-obj2.x<obj1.width/2+obj2.width/2 && 
      obj2.x-obj1.x<obj1.width/2+obj2.width/2 && 
      obj1.y-obj2.y<obj1.height/2+obj2.height/2 &&
      obj2.y-obj1.y<obj1.height/2+obj2.height/2) {
      return true;
    } 
    else{
      return false;
    }
}

function bounceOff(obj3,obj4) {
  if(obj3.x-obj4.x<obj3.width/2+obj4.width/2 && 
    obj4.x-obj3.x<obj3.width/2+obj4.width/2) {
    obj3.velocityX =  (-1)*obj3.velocityX;
    obj4.velocityX = (-1)*obj4.velocityX;
  }

  if(obj3.y-obj4.y<obj3.height/2+obj4.height/2 &&
      obj4.y-obj3.y<obj3.height/2+obj4.height/2) {
      obj3.velocityY = (-1)*obj3.velocityY;
      obj4.velocityY = (-1)*obj4.velocityY;
  }
}