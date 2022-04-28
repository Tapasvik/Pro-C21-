var ball 
var ground 
var leftSide
var rightSide

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
function keyPressed ()
{
	if(keyCode === RIGHT_ARROW)
	
	  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:0 } )
	  
	  if(keyCode === UP_ARROW)
	  Matter.Body.applyForce(ball,{x:0, y:0}, {x: 0, y:-0.05 } )
}

	



function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	var ball_options = { 
		
		restitution: 0.95,
		 
	}
ball = Bodies.circle(450,400, 40, ball_options )
World.add(world, ball)

var ground_options ={
	isStatic : true
}
ground = Bodies.rectangle(width/2, 660, width, 20, ground_options )
World.add(world, ground)

var leftSide_options = {
	isStatic: true
	
	
}
leftSide = Bodies.rectangle(400,600, 20, 120, leftSide_options)
World.add(world,leftSide)
	Engine.run(engine);
  
var rightSide_options = {
	isStatic : true 

}
rightSide = Bodies.rectangle(600,600,20,120, rightSide_options)
World.add(world, rightSide)

rectMode(CENTER)
  
}



function draw() {

  rectMode(CENTER);
  background(0);
imageMode(CENTER)

  rect(ground.position.x, ground.position.y,width,20)
//create ball
circle( ball.position.x, ball.position.y, 40)
rect(leftSide.position.x, leftSide.position.y, 20,120)

rect(rightSide.position.x, rightSide.position.y, 20,120)

  drawSprites();
 
}



