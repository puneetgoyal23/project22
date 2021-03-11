const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
var ground;


function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas = createCanvas(800, 700);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=.9

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	var packageBody_options ={
		restitution:1.1
	}

	packageBody = Bodies.rectangle(width/2 , 200 , 5 , 5,packageBody_options);
	World.add(world, packageBody);
	
    var ground_options ={
		isStatic: true
	}

	ground = Bodies.rectangle(width/2, 600, 50, 10 ,ground_options);
 	World.add(world, ground);

    console.log(ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keycode === Down_Arrow) {
    
   
    
  }
}