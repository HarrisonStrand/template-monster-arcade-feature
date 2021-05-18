//Platform.js
export default function Platform(p5, x, y, strokeColor, fillColor, width) {
		this.w = width;
		this.h = 1;
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(0, 0);
    this.acc = p5.createVector(0, 0);
    this.xdir = 0;
    this.ydir = 0;

  this.render = function(p5) {
    p5.push();
    p5.fill(fillColor);
    p5.stroke(strokeColor);
    p5.strokeWeight(p5.random(0.5, 0.7));
    p5.rectMode(p5.CENTER);
    
    p5.rect(this.pos.x, this.pos.y, this.w, this.h);
    p5.pop();
    

    // p5.push()
    // p5.textSize(2)
    // p5.fill('white')
    // p5.text(`x:${Math.round(this.pos.x)}, y: ${Math.round(this.pos.y)}`, this.pos.x + 1,this.pos.y + 1)
    // p5.pop()

  }
}