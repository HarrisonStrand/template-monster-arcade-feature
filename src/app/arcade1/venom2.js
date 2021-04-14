import * as p5 from "p5";

export default function Venom(p5, spos, angle) { //spos is snake position
	this.pos = p5.createVector(spos.x, spos.y);
  this.vel = p5.Vector.p5.fromAngle(angle); // may not need second p5??
  this.vel.p5.mult(10);
  
  this.update = function() {
    this.pos.add(this.vel);
  }
  this.render = function() {
    p5.push();
    p5.stroke(255);
    p5.strokeWeight(4);
    p5.point(this.pos.x, this.pos.y);
    p5.pop();
  }
  
  this.hits = function(obstacle) {
    var d = dist(this.pos.x, this.pos.y, obstacle.pos.x, obstacle.pos.y);
    if (d < obstacle.r) {
      return true;
    } else {
      return false;
    }
  }
  
    this.offscreen = function() {
    if (this.pos.x > width || this.pos.x < 0) {
      return true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      return true;
    }
    return false;
  }
  
}