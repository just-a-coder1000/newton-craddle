
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;	

	roof = new Roof(400, 90, 600, 50);

	bob1 = new Bob(230, 480, 80);
	bob2 = new Bob(310, 480, 80);
	bob3 = new Bob(390, 480, 80);
	bob4 = new Bob(470, 480, 80);
	bob5 = new Bob(550, 480, 80);

	rope1 = new Rope(bob1.body, {x : 230, y : 90});
	rope2 = new Rope(bob2.body, {x : 310, y : 90});
	rope3 = new Rope(bob3.body, {x : 390, y : 90});
	rope4 = new Rope(bob4.body, {x : 470, y : 90});
	rope5 = new Rope(bob5.body, {x : 550, y : 90});
	
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background(230);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Body.applyForce(bob1.body, bob1.body.position, {x : -420, y: 0});

	}

}






