
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;

var groundObject,paperObject,block1Object,block2Object,block3Object



function setup() {
	createCanvas(2000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundObject = new Ground(800,485,1600,20)

	paperObject = new Paper(300,300,20);
	block1Object = new Box(1200,480,180,20);
	block2Object = new Box(1100,380,20,200);
	block3Object = new Box(1300,380,20,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

 groundObject.display();
 paperObject.display();
 block1Object.display();
 block2Object.display();
 block3Object.display();
  
  
 
}

function keyPressed(){
	if(keyDown === UP_ARROW){
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:95,y:-95});
	}
   
   }




