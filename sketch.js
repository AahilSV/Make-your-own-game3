const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground, ground2, ground4, ground3;
var fishNPC1, fishNPC2, fishNPC3;
var world, engine;
function preload(){
  
  

}

function setup() {
 
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create(); 
  world = engine.world;
ground = new Ground(0,200,windowWidth,20);
ground2 = new Ground(0,450,windowWidth,20);
ground3 = new Ground(0,700,windowWidth,20);
ground4 = new Ground(0,920,windowWidth,20);


fishNPC1 = new FishAI(70,300);
fishNPC2 = new FishAI(70,600);
fishNPC3 = new FishAI(70,890);
}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();


  fishNPC1.display();
  fishNPC2.display();
  fishNPC3.display();
}

