const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var bg = "dat.jpg";
var backgroundImg;

function preload(){
    polygonImg = loadImage("polygon.png");
    getBgTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,400,width,30);

    stand1 = new Ground(600,300,230,15);
    stand2 = new Ground(900,170,200,15);

    // stand1 base
    block1 = new Box(600,280,37,40);
    block2 = new Box(639,280,37,40);
    block3 = new Box(522,280,37,40);
    block4 = new Box(561,280,37,40);
    block5 = new Box(678,280,37,40);

    // stand1 1st level 
    block6 = new Box2(657,230,37,40);
    block7 = new Box2(618,230,37,40);
    block8 = new Box2(579,230,37,40);
    block9 = new Box2(540,230,37,40);

    // stand1 2nd level 
    block10 = new Box3(638,188,37,40);
    block11 = new Box3(599,188,37,40);
    block12 = new Box3(560,188,37,40);

    // stand1 3rd level 
    block13 = new Box(599,148,17,35);

    // stand2 base
    block14 = new Box2(855,145,37,30);
    block15 = new Box2(895,145,37,30);
    block16 = new Box2(935,145,37,30);

    // stand2 1st level
    block17 = new Box(915,113,37,30);
    block18 = new Box(875,113,37,30);

    // stand2 2nd level 
    block19 = new Box3(894,80,37,30);

    polygon = Bodies.circle(130,200,20,{density:0.05});
    World.add(world,polygon);

    slingshot = new Slingshot(polygon,{x:130, y:200});
}
    
function draw(){
    if(backgroundImg){
        background(backgroundImg);
    } else {
        background(0);
    }

    noStroke();
    textSize(35);
    fill(255);
    text("Score: " + score, width - 220, 50);

    Engine.update(engine);

    ground.display();

    stand1.display();
    stand2.display();

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
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();

    slingshot.display();

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);

    //drawsprites();

    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32 ){
        slingshot.attach(polygon);
    }
}

async function getBgTime() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if (hour >= 06 && hour <= 18 ) {
        bg = "dat.jpg";
    } else {
        bg = "night.jpg";
    }
    backgroundImg = loadImage(bg);
}
