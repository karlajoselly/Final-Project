class Obstacle {

	constructor(x,y,w,h,s,obstacleGraphic) {
		this.x=x;
		this.y=y;
		this.w=w;	
		this.h=h;
		// this.imageSize=imageSize;
		this.speed = s;
		this.obstacleGraphic=obstacleGraphic
	

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
		push()
			let scaleFactor = grid_size / this.obstacleGraphic.height
			// console.log(this.x,this.y)
			translate(this.x,this.y)
			scale(scaleFactor);
			// console.log(this.obstacleGraphic)
			// console.log(this.y)
			image(this.obstacleGraphic,0,0);
			// animation(obstacleGraphic,this.x,this.y);
		pop()
	}

}	