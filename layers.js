class Layer {
	//Create conditions for the layer and what will be in that layer
	constructor(rowY, numObstacles, tempSpeed, obstacleWidth, 
		tempSpacing, xObstacle,layerColor,barrelDeath,obstacleImage) {

		this.y = rowY;
		this.speed = tempSpeed;
		this.numObstacles = numObstacles;
		this.space = tempSpacing;	
		this.obstacleWidth = obstacleWidth;
		this.xObstacle = xObstacle;
		this.barrelDeath = barrelDeath;
		this.layerColor = layerColor;
		this.obstacles = [];
		this.obstacleImage = obstacleImage

	}	
	//Can control what the color of the layer to display snow or water
	layers (){
		fill(this.layerColor);
		noStroke();
		rect(0,this.y,width,grid_size);
		
		//Call obstacles into the layer
		for (var i = 0; i <this.numObstacles; i++) {
			var x = i * this.space + this.xObstacle;
			// constructor(x,y,w,h,s,obstacleGraphic)
			this.obstacles.push(new Obstacle(x,this.y,this.obstacleWidth, grid_size,this.speed,this.obstacleImage));
		}
	}

	display () {
		//display layer with its color and size
		fill(this.layerColor);
		rect(0,this.y,width,grid_size);
		//display obstacles
		for (var i = 0; i < this.obstacles.length; i++) {
			this.obstacles[i].display();
		}

	}
	//update obstacles
	update () {
		for(var i = 0; i < this.obstacles.length; i++) {
			this.obstacles[i].update();
		}
	}
	//Condition for when obtsacle hits barrel
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