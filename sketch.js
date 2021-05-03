const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,sound;
var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10,snow11,snow12;
var frozenImg,frozen;
var bg,edges;
function preload(){
  bg=loadImage("snow2.jpg");
  frozenImg=loadImage("421.png");
  sound=loadSound("frozensound.wav")
}
function setup() {

  createCanvas(2000,650); 
  engine = Engine.create();
  world = engine.world;
  frozen=createSprite(570, 570, 50, 50);
  frozen.addImage(frozenImg);
  frozen.scale=1.5;
  edges=createEdgeSprites();
  ground=new Ground(1000, 650, 2000, 20);
  snow1=new Snow(100,50,20,20);
  snow2=new Snow(200,50,20,20)
  snow3=new Snow(400,50,20,20)
  snow4=new Snow(600,50,20,20)
  snow5=new Snow(800,50,20,20)
  snow6=new Snow(1000,50,20,20)
  sound.loop();

}

function draw() {
  background(bg);
  Engine.update(engine);

  if(keyDown("space"))
  {
    frozen.velocityY=-10;
  }
  frozen.velocityY=frozen.velocityY+0.8;
  frozen.collide(edges[3]);
  ground.display();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();

  drawSprites();
}