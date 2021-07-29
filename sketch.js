const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight=300;
// Add score variable
var score =0;
function setup() {
  //Changed width to 800
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground= new Ground(width/2,height,width,20);
  //creating divisions
  for(var k=0; k<=width; k = k + 80)
  {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  //creating plinkos
  for (var j = 75; j <=width; j=j+50) 
   {
     plinkos.push(new Plinko(j,75)); 
    }

  for (var j = 50; j <=width-10; j=j+50) 
   {
     plinkos.push(new Plinko(j,175)); 
    }
    for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,275)); 
     }
 
   for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,375)); 
     }


  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  //Added Engine.update(engine);
  Engine.update(engine);

  //Added ground.display();
  ground.display();

  for (var i = 0; i < plinkos.length; i++)
   { 
     plinkos[i].display();
   }

   //Added condition to generate particles
   if(frameCount%60===0){
    particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
    score++;
  }

   for (var j = 0; j < particles.length; j++)
    {
       particles[j].display();
    }
    for (var k = 0; k < divisions.length; k++) 
    {
     divisions[k].display(); 
    }
}