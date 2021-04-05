//Obstacle.js
export default class Obstacle {

  constructor(p5, x, y, w, h) {
    this.x = x;
		this.y = y;
		this.size = 2;
		this.body = p5.createVector(p5.floor(w/2), p5.floor(h/2));
  }

  show(p5) {
      p5.fill('#C2B280');
			p5.stroke(0);
			p5.strokeWeight(.1)
      p5.rect(this.body.x, this.body.y, this.size, this.size);
  }

}