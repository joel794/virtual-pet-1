const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var dog1,happyDog
var database,foodS,foodStock
var readStock
var foodremaining = 40

function preload()
{

 
}

function setup() {
  createCanvas(800, 800);

   foodStock = database.ref('Food');
   foodStock.on("value",readStock);

  dog1 =  new Doggo(400,400,30,30);
  dog2 = new Doggo(400,400,30,30);
  
}


function draw() {  
  background(rgb(0,255,0));
  drawSprites();
  dog1.display();


  fill("white");
    textSize(25);
    textFont('Tahoma');
    text("Note: Press UP_ARROW To Feed Drago Milk",100,200); 

  fill("white");
    textSize(35);
    textFont('Loopiejuice Regular'); 200,800
    text("Food left :"+foodremaining,400,750);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog1.visiblity = false;
    dog2.display();
    foodremaining = foodremaining-2
   
}
}




