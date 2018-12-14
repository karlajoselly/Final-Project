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

	// coinSprite = loadSpriteSheet('assets/coin_sprite.png',70,70,4);
	// coin = loadAnimation(coinSprite);

	// coin = loadImage('assets/coin_sprite.png');
	//load obstacles
	ice = loadImage('assets/ice.png');

	mountain = loadImage('assets/mountain.png');
	tree = loadImage('assets/tree.png');
	


}
//reset game function
function resetGame () {

	 barrelMain = new Barrel (width/2, height-grid_size, barrel);

}

function setup() {
    
//Set canvas to be the whole window    
  // createCanvas(800, 400);
  width = 800;
// constructor(rowY, numObstacles, tempSpeed, obstacleWidth, 
// 		tempSpacing, xObstacle,layerColor,barrelDeath,obstacleImage)
//create background layers with obstacles
  layers = [ 
  	new Layer(            0, 10,    5, 50,   0,   0, color(244,244,245),false,tree),
    new Layer(    grid_size, 16,    10, 101,  200,   0, color(244,244,245),false,mountain),
    new Layer(2 *  grid_size, 16,    10, 72,   300,   0, color(244,244,245),false,tree),
    new Layer(3 * grid_size, 14,  0.5, 150, 400,  10, color(96,202,228),true,ice),
    new Layer(4 * grid_size, 16,  0.5, 150, 200,  10, color(96,202,228),true, ice),
    new Layer(5 * grid_size, 18, 5, 70, 200,  0, color(244,244,245),false,tree),
    new Layer(6 * grid_size, 16,  2.3, 70, 250,  25, color(244,244,245),false,tree),
    new Layer(7 * grid_size,17,    5, 150,   175,   0,color(96,202,228), true,ice),
    new Layer(8 * grid_size, 18,    5, 150,   0,   0,color(96,202,228), true,ice),
    new Layer(9 * grid_size, 15,  1.2, 70, 150, 100, color(244,244,245),false,mountain),
    new Layer(10 * grid_size,17, -3.5, 80, 300, 150, color(96,202,228), true,ice),
    new Layer(11 * grid_size, 18, -3.5, 70, 200, 150, color(96,202,228), true,ice),
    new Layer(12 * grid_size, 16,    2, 70, 300,   0, color(244,244,245),false,tree),
    new Layer(13 * grid_size, 17,    5, 150,  200,   0, color(244,244,245),false,mountain)
  ];
  // console.log(layers[1]);
  //Create canvas based on layers
  createCanvas(width, layers.length * grid_size);
  resetGame();	
  //display layer setup
  for (var i = 0; i < layers.length; i++) {
	layers[i].layers();
}

}
function draw() {
    // //set an opacity to the background so that you can still see the path of 
    // clear();
    // animation(barrel, 500, 500);
    // animation(coin, 100,200);
    //Set intersection variable to null
    var intersects = null;
    //Draw layers to be displayed and set conditions if the barrel was to intersect to cause death
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
  //Barrel funtions to display, attach, and update
  barrelMain.attach(intersects);
  barrelMain.update();
  barrelMain.display();


  drawSprites();
}


//Control the barrel with key commands
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


