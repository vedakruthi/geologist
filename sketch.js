
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rubber;
var stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  
 stone=new Stone(200,100,50,50);
 rubber=new Rubber(50,50,70);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  stone.diaplay();
  rubber.display();
  drawSprites();

 
}



