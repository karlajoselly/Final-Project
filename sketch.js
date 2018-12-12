// Final Project
// Karla Ruiz
// Snow Barrel Game

var barrel, barrelMain;
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

	ice = loadImage('assets/ice.png');

	mountain = loadImage('assets/mountain.png');
	tree = loadImage('assets/tree.png');
	


}

function resetGame () {

	 barrelMain = new Barrel (width/2, height-grid_size, barrel);

}

function setup() {
    
//Set canvas to be the whole window    
  // createCanvas(800, 400);
  width = 800;
// constructor(rowY, numObstacles, tempSpeed, obstacleWidth, 
// 		tempSpacing, xObstacle,layerColor,barrelDeath)
  layers = [ 
  	new Layer(            0, 1,    0, 150,   0,   0, color(244,244,245),false,ice),
    new Layer(    grid_size, 1,    0, 150,   0,   0, color(244,244,245),false,ice),
    new Layer(2 * grid_size, 2,  0.5, 150, 400,  10, color(96,202,228),true,mountain),
    new Layer(3 * grid_size, 3, -1.3, 70, 200,  30, color(244,244,245),false,ice),
    new Layer(4 * grid_size, 2,  2.3, 70, 250,  25, color(244,244,245),false,ice),
    new Layer(5 * grid_size, 1,    0, 150,   0,   0,color(96,202,228), true,mountain),
    new Layer(6 * grid_size, 3,  1.2, 70, 150, 100, color(244,244,245),false,ice),
    new Layer(7 * grid_size, 2, -3.5, 70, 200, 150, color(96,202,228), true,mountain),
    new Layer(8 * grid_size, 2,    2, 70, 300,   0, color(244,244,245),false,ice),
    new Layer(9 * grid_size, 2,    0, 150,   0,   0, color(244,244,245),false,ice),
  ];

  createCanvas(width, layers.length * grid_size);
  resetGame();	
  for (var i = 0; i < layers.length; i++) {
	layers[i].layers();
}

}
function draw() {
    // //set an opacity to the background so that you can still see the path of 
    // clear();
    // animation(barrel, 500, 500);
    // animation(coin, 100,200);
    var intersects = null;

    for (var i = 0; i < layers.length; i++) {
    	layers[i].display();
	    layers[i].update();
	    if(barrelMain.intersects(layers[i])) {
	      intersects = layers[i].hits(barrelMain);
	      if((intersects !== null) && layers[i].barrelDeath) {
	        resetGame();
	      }
	    }


    }
  // console.log(intersects)
  barrelMain.attach(intersects);
  barrelMain.update();
  barrelMain.display();


  drawSprites();
}



function keyPressed() {
  if(keyCode === UP_ARROW) {
    barrelMain.move(0, -grid_size);
  } else if(keyCode === DOWN_ARROW) {
    barrelMain.move(0, grid_size);
  } else if(keyCode === LEFT_ARROW) {
    barrelMain.move(-grid_size, 0);
  } else if(keyCode === RIGHT_ARROW) {
    barrelMain.move(grid_size, 0);
  }
}


