
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1365, 600);

  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  tree = new Tree(800,80,500,500)
  mango1 = new Mango(800,200,50)
  mango2 = new Mango(850,280,66)
  mango3 = new Mango(1030,200,55)
  mango4 = new Mango(1170,160,60)
  mango5 = new Mango(990,140,60)
  mango6 = new Mango(1200,280,40)
  mango7 = new Mango(1100,110,45)
  mango8 = new Mango(1100,230,60)
  boy = new Ground(200,200,20,20)
  stone = new Stone(200,200,40)
  slingShot = new SlingShot(stone.body,{x:200,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  tree.display();
  boy.display();
  mango2.display();
  mango1.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  slingShot.display();
  stone.display();
  drawSprites();
 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
    slingShot.fly();
  }
function detectCollision(stone,mango1){
  mango1Bodyposition = mango1.body.position
  stonebodyposition = stone.body.position

  var distance = dist(stonebodyposition.x,stonebodyposition.y,mango1Bodyposition.x,mango1Bodyposition.y)
  
  if(distance<=mango1.r+stone.r){
    Matter.Body .setStatic(mango1.body,false)
  }

}
function keyPressed (){
  if(keyCode === 32){
      slingShot.attach(stone.body);
  }
}
