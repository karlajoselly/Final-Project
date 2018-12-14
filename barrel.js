class Barrel {

	constructor(x,y,barrelGraphic) {
		this.x = x;
		this.y = y;
		this.w = barrelGraphic.width;
		this.speed = 0;
		this.barrelGraphic=barrelGraphic;
		this.sitting_on = null;
		// console.log("new object!",x,y,barrelGraphic)
	// this.w = 150;
	// this.h = 150;
	

	}
	//intersection condition for when the barrel hits the obtacles
	intersects (other) {
		return !(
			 this.x + this.w  <= other.x            ||
    		 this.x           >= other.x + other.w  ||
    		 this.y + this.h  <= other.y            ||
   			 this.y           >= other.y + other.h
  		);
	}
	//move the barrel
	move (x,y) {
		
		this.x += x;
  		this.y += y;
	}
	//if the ground is not touchable attach itself to a obstacle
	attach (other) {
		this.sitting_on = other;
	}
	//update the location of the barrel
	update () {
		this.move(this.speed,0);
		if(this.sitting_on !== null) {
			this.x += this.sitting_on.speed;
			console.log(this.sitting_on.speed);
				
		}

		// this.x += constrain(this.x, 0 , width -this.w)
	}
	//display barrel
	display () {
		// console.log(this.x,this.y)
		// scale(0.5);
		push();
		
			// let scaleFactor = grid_size / this.barrelGraphic.height;
			translate(0,0);
			scale(0.3);
		animation(this.barrelGraphic, this.x,this.y);

		// console.log(this.x,this.y)
		// animation(obstacleGraphic,this.x,this.y);
		pop();
	}

}	