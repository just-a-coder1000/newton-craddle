class Roof{

	constructor(x, y, w, h){

		var options = {

			isStatic : true,

		}

	this.w = w;
    this.h = h;
	this.x = x;
	this.y = y;
	this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world, this.body);

	}

	display(){

		rectMode(CENTER);
		fill("grey");
		rect(this.x, this.y, this.w, this.h);

	}

}