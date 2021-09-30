var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(20,20,20,20)
}

function draw() 
{
  background(30)
  if(keyIsDown(RIGHT_ARROW)){
  background("green")  
  }
  if(keyIsDown(DOWN_ARROW)){
  background("red")
  }
  if(keyIsDown(UP_ARROW)){
  background("blue")
  }
  if(keyIsDown(LEFT_ARROW)){
  background("yellow")
  }
  
 drawSprites()
}


                                                           

                                                                                 