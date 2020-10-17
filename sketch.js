const World= Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
var ground;
var block8,bock9,bock10,bock11,bock12,block13,bock14,bock15,bock16;
var polygon, polygon_img;
var engine,world;
var bodies;
function preLoad(){
  polygon_img = loadImage("polygon_img.png")
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  

 // polygon.addImage("polygon_img.png")
  //imageMode(CENTER)
  //image(polygon_img.jpg ,ploygon.position.x,polygon.position.y,40,40);

  //level two
block8 = new Box(333,235,30,40);
block9 = new Box(360,235,30,40);
block10 = new Box(390,235,30,40);
block11 = new Box(420,235,30,40);
block12 = new Box(450,235,30,40);
//level three
block13 = new Box(360,195,30,40);
block14 = new Box(390,195,30,40);
block15 = new Box(420,195,30,40);
//top
block16 = new Box(390,155,30,40);

ground = new Ground(600,height,1200,20);
//polygon holder with slings
polygon = Bodies.circle(50,200,20);
world.add(world,polygon);
slingshot = new Slingshot (polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
 fly.update(bodyA)
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()

  image(polygon_img, polygon.position.x,polygon.position.y)

  drawSprites();
}
function mousePressed() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}

function mouseDragged() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}