var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,DropBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;s

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	  
	DropSprite1=createSprite(400,640,200,20)
	DropSprite2=createSprite(490,600,20,100)
	DropSprite3=createSprite(305,600,20,100)
	DropSprite1.shapeColor=color("Red")
	DropSprite2.shapeColor=color("Red")
	DropSprite3.shapeColor=color("Red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 /*DropBody = Bodies.rect(400,640,200,20,{restitution:0.5,isStatic:false})
	 World.add(world,DropSprite1)
	 world.add(world,DropSprite2)
     World.add(world,DropSprite3)

	Engine.run(engine);*/
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  /*DropSprite3.x=DropBody.position.x
  DropSprite3.y=DropBody.position.y
  DropSprite2.x=DropBody.position.x
  DropSprite2.y=DropBody.position.y
  DropSprite1.x=DropBody.position.x
  DropSprite1.y=DropBody.position.y*/

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
}
}
