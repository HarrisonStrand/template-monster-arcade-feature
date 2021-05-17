//Lava.js
export default function Lava(p5, x, y, r, xdir, ydir, color) {
  this.pos = p5.createVector(x, y);
  this.x = x;
  this.y = y;
  this.r = r;
  this.xdir = xdir;
  this.ydir = ydir;

  this.render = function(p5) {

    p5.push()
    p5.stroke(color)
    p5.strokeWeight(p5.random(1, 1.5))
    p5.translate(this.pos.x, this.pos.y -.5)
    p5.line(0, 0, this.r, this.r)
    p5.line(0, 0, this.r, this.r)
    p5.line(this.r, this.r, this.xdir, this.ydir)
    p5.pop()
  }

  this.verticies = function() {
    var lavaVerticies = [
      this.pos.add(p5.createVector(-this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(-this.r / 2, -this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, -this.r /2), this.pos),
    ]
    return lavaVerticies;
  }
}