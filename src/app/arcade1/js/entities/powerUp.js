import { state } from '../game/state'

export default function PowerUp(p5, x, y, r) {

  this.pos = p5.createVector(x, y);
  this.x = x;
  this.y = y;
  this.r = r;

  this.render = function() {

    //shadow
    p5.push();
    p5.fill(state.powerUpShadowColor);
    p5.stroke(state.powerUpShadowColor)
    p5.strokeWeight(p5.random(0, 2));
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.ellipse(0, 0, this.r, this.r);
    p5.pop();

    //main
    p5.push();
    p5.fill(state.powerUpMainColor);
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.ellipse(0, 0, this.r, this.r);
    p5.pop();

    //P TEXT
    p5.push();
    p5.fill(state.powerUpLetterColor);
    p5.textSize(1.5);
    p5.text('P', this.pos.x -.5, this.pos.y +.5);
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