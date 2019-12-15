const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var g1,b1,b2;
function setup(){
    var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
 g1 = new Ground(600,580,1200,50);
 b1 = new Box (700,320,70,70);
 b2 = new Box (900,320,70,70);
 p1= new Pig (800,320);
 l1 = new Log(800,310,300,PI/2);

 b3 = new Box (700,250,70,70);
 b4 = new Box (900,250,70,70);
 p2= new Pig (800,250);
 l2 = new Log(800,180,300,PI/2);

 b5 = new Box (800,150,70,70);
 l4 = new Log(750,160,150,PI/4);
 l3 = new Log(850,160,150,-PI/4);
 ari = new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
 g1.display();
 b1.display();
 b2.display();   
 p1.display();
 l1.display();
 b3.display();
 b4.display();   
 p2.display();
 l2.display();
 b5.display();   
 l4.display();
 l3.display();
 ari.display();
}