class Obstacle {

	constructor(x,y,obstacleGraphic,s,w,h,imageSize) {
	this.x;
	this.y;
	this.w;	
	this.h;
	this.imageSize;
	this.speed = s;
	

	}
	intersects (other) {
		return! (
			 this.x + this.w  <= other.x            ||
    		 this.x           >= other.x + other.w  ||
    		 this.y + this.h  <= other.y            ||
   			 this.y           >= other.y + other.h
  );
	}
	move (x,y) {
		
		this.x += x;
  		this.y += y;
	}

	update () {
		this.move(this.speed,0);
		if(this.x > width + grid_size) {
			this.x = this.obstacleGraphic - grid_size;
		}

		if(this.x < - this.obstacleGraphic -grid_size) {
			this.x = width + grid_size;

		}
	}

	display () {
		scale(this.imageSize);
		image(this.obstacleGraphic,this.w,this.h,this.x,this.y);
		// animation(obstacleGraphic,this.x,this.y);

	}

}	