var balloonoon,balloonoonImage1,balloonoonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonoonImage1=loadAnimation("hotairballoonoon1.png");
   balloonoonImage2=loadAnimation("hotairballoonoon1.png","hotairballoonoon1.png",
   "hotairballoonoon1.png","hotairballoonoon2.png","hotairballoonoon2.png",
   "hotairballoonoon2.png","hotairballoonoon3.png","hotairballoonoon3.png","hotairballoonoon3.png");
  }

//Function to set initial environment
function setup() {
  database = firebase.database();
  createCanvas(1500,700);

  balloonoon=createSprite(250,450,150,150);
  balloonoon.addAnimation("hotAirballoonoon",balloonoonImage1);
  balloonoon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloonoon.addAnimation("hotAirballoonoon",balloonoonImage2);
    changePosition(-1 , 0);
  }
  else if(keyDown(RIGHT_ARROW)){
    balloonoon.addAnimation("hotAirballoonoon",balloonoonImage2);
    changePosition(1 , 0);
  }
  else if(keyDown(UP_ARROW)){
    balloonoon.addAnimation("hotAirballoonoon",balloonoonImage2);
    changePosition(0 , -1);
  }
  else if(keyDown(DOWN_ARROW)){
    balloonoon.addAnimation("hotAirballoonoon",balloonoonImage2);
    changePosition(0 , 1);
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air balloonoon!",40,40);
}

function changePosition(x,y){
    balloon.x = balloon.x + x;
    balloon.y = balloon.y + y;
	database.ref("balloon/position").update({
		x : balloon.x ,
		y : balloon.y
	});
}