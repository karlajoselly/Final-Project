class Barrel {

	constructor(x,y,barrelGraphic) {
	this.x;
	this.y;
	this.barrelGraphic;
	this.sitting_on = null;
	

	}
	attach (other) {
		this.sitting_on = other;
	}
	update () {
		this.move(this.speed,0);
		if(this.sitting_on !== null) {
			this.x += this.sitting_on.speed;
		}

		this.x += constrain(this.x, 0 , width -this.w)
	}

	display () {

		scale(0.5);
		animation(barrel, this.x, this.y);
		// animation(obstacleGraphic,this.x,this.y);

	}

}	