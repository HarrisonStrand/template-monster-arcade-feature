//Obstacle.js
export default function Obstacle(p5, x, y, z, r, color1) {
  this.pos = p5.createVector(x, y, z);
  this.x = x;
  this.y = y;
  this.z = z;
  this.r = r;

  this.intersects = function(other) {
    var d = p5.dist(this.x, this.y, other.x, other.y);
    if(d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  this.render = function() {
    p5.push();
    p5.fill(color1);
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y, this.pos.z);
    p5.rect(0, 0, this.r, this.r);
    p5.pop();
  }

  this.verticies = function() {
    var obstacleVerticies = [
      this.pos.add(p5.createVector(-this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(-this.r / 2, -this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, -this.r /2), this.pos),
    ]
    return obstacleVerticies;
  }

  
}