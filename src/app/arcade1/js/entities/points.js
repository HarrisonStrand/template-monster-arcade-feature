import { state } from '../game/state'

//Points.js
export default function Point(p5, x, y, r) {
  this.pos = p5.createVector(x, y);
  this.x = x;
  this.y = y;
  this.r = r;

  this.render = function() {
    p5.push();
    p5.fill(`rgba(255,255,255, ${p5.random(.5, 1)})`)
    p5.noStroke()
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.ellipse(p5.random(-.07, .07), 0, this.r, this.r);
    p5.pop();

    p5.push();
    p5.noFill()
    p5.stroke(`rgba(255,255,255, ${p5.random(.5, 1)})`)
    p5.strokeWeight(p5.random(.05, .2))
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.ellipse(p5.random(-.02, .02), p5.random(-.02, .02), this.r, this.r);
    p5.pop();

    
  }

  this.verticies = function() {
    var pointVerticies = [
      this.pos.add(p5.createVector(-this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(-this.r / 2, -this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, -this.r /2), this.pos),
    ]
    return pointVerticies;
  } 
}