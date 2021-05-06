import { state } from '../game/state'

//Border.js
export default function Border(p5, x, y, r, xdir, ydir, color) {
  this.pos = p5.createVector(x, y);
  this.x = x;
  this.y = y;
  this.r = r;
  this.xdir = xdir;
  this.ydir = ydir;

  this.render = function(p5, randomWeight) {

    p5.push()
    p5.stroke(color)
    p5.strokeWeight(randomWeight)
    p5.translate(this.pos.x, this.pos.y)
    p5.line(0, 0, this.r, this.r)
    p5.line(this.r, this.r, this.xdir, this.ydir)
    p5.pop()
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