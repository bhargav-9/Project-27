
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Bob1=new paper(200,500)
	Bob2=new paper(240,500)
	Bob3=new paper(280,500)
	Bob4=new paper(320,500)
	Bob5=new paper(360,500)
	Roof=new roof(500,200)
  Rope1=new rope(Bob1.body,Roof.body,-80,0)
  Rope2=new rope(Bob2.body,Roof.body,-40,0)
  Rope3=new rope(Bob3.body,Roof.body,0,0)
  Rope4=new rope(Bob4.body,Roof.body,40,0)
  Rope5=new rope(Bob5.body,Roof.body,80,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  Roof.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  drawSprites();
 
}



