// Final Project
// Karla Ruiz
// Snow Barrel Game

var barrel;
var barrelSprite; 
var coin;
var coinSprite;
var y;
var layers =[];
var speed;
var space;
var numObstacles;
var obstacleWidth;
var barrelDeath;
var layerColor;
var grid_size = 50;

function preload() {

	//Animation Sprites
	barrelSprite = loadSpriteSheet('assets/snowBarrel_sprite.png',150,150,3);
	barrel = loadAnimation(barrelSprite);
	barrel.looping = false;

	coinSprite = loadSpriteSheet('assets/coin_sprite.png',70,70,4);
	coin = loadAnimation(coinSprite);
	coin.looping=false;


}

function resetGame () {

	// barrel = new Barrel ();

}

function setup() {
    
//Set canvas to be the whole window    
  // createCanvas(800, 400);
  width = 800;
// constructor(rowY, numObstacles, tempSpeed, obstacleWidth, 
// 		tempSpacing, xObstacle,layerColor,barrelDeath)
  layers = [ 
  	new Layer(            0, 1,    0,         width,   0,   0, true),
    new Layer(    grid_size, 1,    0,         width,   0,   0, true),
    new Layer(2 * grid_size, 2,  0.5, 4 * grid_size, 400,  10, true),
    new Layer(3 * grid_size, 3, -1.3, 2 * grid_size, 200,  30, true),
    new Layer(4 * grid_size, 2,  2.3, 3 * grid_size, 250,  25, true),
    new Layer(5 * grid_size, 1,    0,         width,   0,   0, true),
    new Layer(6 * grid_size, 3,  1.2, 1 * grid_size, 150, 100, false),
    new Layer(7 * grid_size, 2, -3.5, 1 * grid_size, 200, 150, false),
    new Layer(8 * grid_size, 2,    2, 2 * grid_size, 300,   0, false),
    new Layer(9 * grid_size, 2,    0,         width,   0,   0, true),
  ];

  createCanvas(width, rows.length * grid_size);
  resetGame();	

}
function draw() {
    // //set an opacity to the background so that you can still see the path of 
    // clear();
    // animation(barrel, 500, 500);
    // animation(coin, 100,200);

   



}



class Obstacle {

	constructor(tempGround, tempSpeed, tempGraphic) {

	this.ground = tempGround;
	this.speed = tempSpeed;
	this.graphic = tempGraphic;	

	}

}

class Barrel {


}


function keyPressed() {
  if(keyCode === UP_ARROW) {
    barrel.move(0, -grid_size);
  } else if(keyCode === DOWN_ARROW) {
    barrel.move(0, grid_size);
  } else if(keyCode === LEFT_ARROW) {
    barrel.move(-grid_size, 0);
  } else if(keyCode === RIGHT_ARROW) {
    barrel.move(grid_size, 0);
  }
}


