
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundImage = loadImage("gamingBackground1.jpg");
}

function setup() {
	createCanvas(900,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (200, 390, 900, 10);
  superhero= new Superhero(390,3,100,100);
  attach=new Throw(superhero.body,{x:100,y:465});
  block1 = new Block(290,350,30,40);  
  block2 = new Block(320,350,30,40);
  block3 = new Block(350,350,30,40);
  block4 = new Block(380,350,30,40);
  block5 = new Block(410,350,30,40);
  block6 = new Block(440,350,30,40);
  block7 = new Block(470,350,30,40);
  block8 = new Block(500,350,30,40);
  block9 = new Block(290,305,30,40);
  block10 = new Block(320,305,30,40);
  block11 = new Block(350,305,30,40);
  block12 = new Block(380,305,30,40);
  block13 = new Block(410,305,30,40);
  block14 = new Block(440,305,30,40);
  monster = new Monster(500,350,100,100);
  
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  
   superhero.display();
  ground.display();
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  monster.display();
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}
