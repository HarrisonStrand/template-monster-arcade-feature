import { state } from "../game/state";
import { move, jump } from "../utilities/keyPress";

//Player.js
export default function Player(p5, x, y) {
    this.r = 6; //Player size
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(0, 0);
    this.acc = p5.createVector(0, 0);
    this.jump = p5.createVector(0, -2);
    this.xdir = 0;
    this.ang = 0;

  this.applyForce = function(force) {
    this.acc.add(force)
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.onStartingPlatform = function() {
    if (this.pos.y <= state.startingPlatform.pos.y -.6 && this.pos.y >= state.startingPlatform.pos.y - 4.01) {
      if (this.pos.x - this.r/2 <= state.startingPlatform.pos.x + state.startingPlatform.w/2 && this.pos.x + this.r/2 >= state.startingPlatform.pos.x - state.startingPlatform.w/2) {
        this.vel.y *= 0;
        this.pos.y = state.startingPlatform.pos.y - 4;
        return true;
      }
    }
    return false;
  }

  this.onEndingPlatform = function() {
    if (this.pos.y <= state.endingPlatform.pos.y -.6 && this.pos.y >= state.endingPlatform.pos.y - 4.01) {
      if (this.pos.x - this.r/2 <= state.endingPlatform.pos.x + state.endingPlatform.w/2 && this.pos.x + this.r/2 >= state.endingPlatform.pos.x - state.endingPlatform.w/2) {
        this.vel.y *= 0;
        this.pos.y = state.endingPlatform.pos.y - 4;
        return true;
      }
    }
    return false;
  }

  this.onPlatform = function() {
    for (let i = 0; i < state.platforms.length; i++) {
      if (this.pos.y <= state.platforms[i].pos.y -.6 && this.pos.y >= state.platforms[i].pos.y - 4.01) {
        if (this.pos.x - this.r/2 <= state.platforms[i].pos.x + state.platforms[i].w/2 && this.pos.x + this.r/2 >= state.platforms[i].pos.x - state.platforms[i].w/2) {
          this.vel.y *= 0;
          this.pos.y = state.platforms[i].pos.y - 4;
          return true;
        }
      }
    }
    return false;
  }

  

  this.render = function(p5) {
    
    
    p5.push();
    p5.fill('blue');
    p5.stroke('blue');
    p5.strokeWeight(p5.random(0.5, 0.7));
    p5.ellipseMode(p5.CENTER);
    p5.ellipse(this.pos.x, this.pos.y, this.r, this.r);
    p5.pop();
    
    p5.push();
    p5.fill('white')
    p5.stroke('black')
    p5.strokeWeight(.3);
    p5.translate(this.pos.x, this.pos.y)
    let angleStop = this.ang += .0000001
    if (p5.keyIsDown(p5.RIGHT_ARROW)) {
      let angleRight = this.ang += 12
      p5.rotate(angleRight)
    } else if (p5.keyIsDown(p5.LEFT_ARROW)) {
      let angleLeft = this.ang += -12
      p5.rotate(angleLeft)
    } else if (!p5.keyIsDown(p5.RIGHT_ARROW) && !p5.keyIsDown(p5.LEFT_ARROW)) {
      p5.rotate(angleStop)
    }
    p5.rectMode(p5.CENTER)
    p5.rect(0, 0, this.r +.2, 1)
    p5.pop();

    // p5.push()
    // p5.textSize(2)
    // p5.fill('white')
    // p5.text(`x:${Math.round(this.pos.x)}, y: ${Math.round(this.pos.y + 4)}`, this.pos.x + 1,this.pos.y + 1)
    // p5.pop()

  }
}