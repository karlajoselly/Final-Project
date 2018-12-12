class Barrel {

	constructor(x,y,barrelGraphic) {
		this.x = x;
		this.y = y;
		this.w = grid_size;
		this.speed = 0;
		this.barrelGraphic=barrelGraphic;
		this.sitting_on = null;
		console.log("new object!",x,y,barrelGraphic)
	// this.w = 150;
	// this.h = 150;
	

	}
	intersects (other) {
		return !(
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
	attach (other) {
		this.sitting_on = other;
	}
	update () {
		this.move(this.speed,0);
		if(this.sitting_on !== null) {
			this.x += this.sitting_on.speed;
		}

		// this.x += constrain(this.x, 0 , width -this.w)
	}

	display () {
		// console.log(this.x,this.y)
		// scale(0.5);
		animation(barrel, this.x, this.y);
		// animation(obstacleGraphic,this.x,this.y);

	}

}	