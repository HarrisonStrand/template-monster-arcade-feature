import { state } from '../game/state'

//Border.js
export default function Border(p5, x, y, z, r) {
  this.pos = p5.createVector(x, y, z);
  this.x = x;
  this.y = y;
  this.z = z;
  this.r = r;

  this.render = function() {
		//RECTANGLE OBJECT
    p5.push();
    p5.noFill()
    p5.stroke(state.gameBorderStroke1);
    p5.strokeWeight(p5.random(.07, .1))
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y, this.pos.z);
    p5.rect(0, 0, this.r, this.r);
    p5.pop();
		
		//INNER RECTANGLE
    p5.push();
    p5.noFill()
    p5.stroke(state.gameBorderStroke2);
    p5.strokeWeight(p5.random(.1, .18))
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y, this.pos.z);
    p5.rect(0, 0, this.r/1.5, this.r/1.5);
    p5.pop();

		//INNER RECTANGLE 2
    p5.push();
    p5.noFill()
    p5.stroke(state.gameBorderStroke3);
    p5.strokeWeight(p5.random(.18, .3))
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y, this.pos.z);
    p5.rect(0, 0, this.r/4, this.r/4);
    p5.pop();
  }

  this.verticies = function() {
    var borderVerticies = [
      this.pos.add(p5.createVector(-this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(-this.r / 2, -this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, -this.r /2), this.pos),
    ]
    return borderVerticies;
  }

  
}