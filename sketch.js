const Engine= Matter.Engine;
const World= Matter.World;
const Events= Matter.Events;
const Bodies= Matter.Bodies;

var particles=[];
var plinkos= [];
var divisions= [];
var divisionHeight=300;

var score = 0;
var count = 0;

function setup() {
  createCanvas(1500,800);
  
  engine = Engine.create();
    world = engine.world;

  ground = new Ground(240,800,480,20);
  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}
for(var j = 50; j<=width-10; j = j+200){
  plinkos.push(new Plinko(j,75))
}
}
function draw() {
  background(255,255,255);
  
    background("black");
    text("Score : "+score,20,40);
    text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  text(" 500 ", 800, 550);
  text(" 500 ", 880, 550);
  text(" 500 ", 960, 550);
  text(" 100 ", 1040, 550);
  text(" 100 ", 1120, 550);
  text(" 100 ", 1200, 550);
  text(" 200 ", 1280, 550);
  text(" 200 ", 1360, 550);
    Engine.update(engine)
    ground.display();
  
    for(var i = 0; i<plinkos.length; i++){
      plinkos[i].display();
    }
    if(frameCount%1=== 0 ){
      particles.push(new Particle(random(width/2-400,width/2+400),10,10))
    }
    for(var j = 0; j<particles.length; j++){
      particles[j].display();
    }

    for(var k = 0; k<divisions.length; k++){
      divisions[k].display();
    }
    
    for (var i = 0; i < particles.length; i++) {
      particles[i].display();
       
      if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
       score=score+500;
       particles.pop();
      }
     else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 && particles[i].body.position.y > 760) {
       score = score + 100;
       particles.pop();
     }
     else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 && particles[i].body.position.y > 760) {
       score = score + 200;
       particles.pop();
     }
    }
    drawSprites();
    textSize(100);
    strokeWeight(6);
    stroke("blue");
    fill("red");
    text("HAPPY NEW YEAR 2021",150,300);

    strokeWeight(0);
   
  
  drawSprites();
}