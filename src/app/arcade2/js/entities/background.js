import { state } from '../game/state'

export default function Background(p5, x, y, w, h, image) {
	this.w = w;
	this.h = h;
	this.pos = p5.createVector(x, y);
	this.vel = p5.createVector(0, 0);
	this.acc = p5.createVector(0, 0);
	this.jump = p5.createVector(0, +2);
	this.image = image

	this.applyForce = function(force) {
		this.acc.add(force)
		if (Math.floor(this.pos.y) <= state.windowHeight /2) {
			this.vel.y *=0;
			this.pos.y = state.windowHeight /2;
		}
		if (Math.floor(this.pos.y) >= state.windowHeight * 1.7) {
			this.vel.y *=0;
			this.pos.y = state.windowHeight * 1.7;
		}
	}

	this.update = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(0, 0);
	}

	this.render = function(p5) {
		p5.push();
		p5.imageMode(p5.CENTER)
		p5.image(this.image, this.pos.x, this.pos.y, this.w, this.h)
		p5.pop();
	}
}