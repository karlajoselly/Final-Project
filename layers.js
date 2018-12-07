class Layer {

	constructor(rowY, numObstacles, tempSpeed, obstacleWidth, 
		tempSpacing, xObstacle,layerColor,barrelDeath) {

	this.y = rowY;
	this.speed = tempSpeed;
	this.numObstacles = numObstacles;
	this.space = tempSpacing;	
	this.obstacleWidth = obstacleWidth;
	this.xObstacle = xObstacle;
	this.barrelDeath = barrelDeath;
	this.layerColor = layerColor;
	this.obstacles = [];

	}	
	layers (){
		fill(layerColor);
		rect(0,y,width,grid_size);
		
		
		for (var i = 0; i <this.numObstacles; i++) {
			var x = i * this.space + this.xObstacle;
			this.obstacles.push(new Obstacle(this.x,this.y,this.obstacleWidth, grid_size,this.speed));
		}
	}

	display () {

		for (var i = 0; i < this.obstacles.length; i++) {
			this.obstacles[i].display();
		}

	}

	update () {
		for(var i = 0; i < this.obstacles.length; i++) {
			this.obstacles[i].update();
		}
	}

	hits (collider) {
		var obstacle = null;
		 for(var i = 0; i < this.obstacles.length; i++) {
    		if(collider.intersects(this.obstacles[i])) {
      		obstacle = this.obstacles[i];
    	}
  	}
  		return obstacle;
	}



}