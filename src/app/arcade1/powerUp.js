export default function PowerUp(p5, x, y, r, color) {
  this.pos = p5.createVector(x, y);
  this.r = r;

  this.render = function() {
    p5.push();
    p5.fill(color);
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.rect(0, 0, this.r, this.r);
    p5.pop();
  }

  this.verticies = function() {
    var powerUpVerticies = [
      this.pos.add(p5.createVector(-this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(-this.r / 2, -this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, -this.r /2), this.pos),
    ]
    return powerUpVerticies;
  }

  
}