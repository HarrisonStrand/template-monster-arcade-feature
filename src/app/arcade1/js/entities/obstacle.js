import { state } from '../game/state'

//Obstacle.js
export default function Obstacle(p5, x, y, z, r, w, h) {
  this.pos = p5.createVector(x, y);
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
  this.h = h;
  this.r = r;

  this.render = function() {
    
    p5.push();
    p5.noFill()
    p5.stroke(state.arcadeColor3);
    p5.strokeWeight(p5.random(.5, .7))
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.rect(0, 0, this.w, this.h);
    p5.pop();

    p5.push();
    p5.noFill()
    p5.stroke(state.arcadeColor3);
    p5.strokeWeight(p5.random(.4, .5))
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.rect(0, 0, this.w/1.2, this.h/1.2);
    p5.pop();

    p5.push();
    p5.noFill()
    p5.stroke(state.arcadeColor3);
    p5.strokeWeight(p5.random(.3, .4))
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.rect(0, 0, this.w/1.4, this.h/1.4);
    p5.pop();

    p5.push();
    p5.noFill()
    p5.stroke(state.arcadeColor3);
    p5.strokeWeight(p5.random(.2, .3))
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.rect(0, 0, this.w/1.6, this.h/1.6);
    p5.pop();

    p5.push();
    p5.noFill()
    p5.stroke(state.arcadeColor3);
    p5.strokeWeight(p5.random(.1, .2))
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.rect(0, 0, this.w/1.8, this.h/1.8);
    p5.pop();

    p5.push();
    p5.noFill()
    p5.stroke(state.arcadeColor3);
    p5.strokeWeight(p5.random(.05, .1))
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.rect(0, 0, this.w/2, this.h/2);
    p5.pop();

    p5.push();
    p5.noFill()
    p5.stroke(state.arcadeColor3);
    p5.strokeWeight(p5.random(.05, .1))
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.rect(0, 0, this.w/2.2, this.h/2.2);
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