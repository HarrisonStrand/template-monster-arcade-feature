import { state } from "../game/state";
import { collide } from "../utilities/utilities";

//Player.js
export default function Player(p5, x, y) {
    this.r = 6; //Player size
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(0, 0);
    this.acc = p5.createVector(0, 0);
    this.jump = p5.createVector(0, 0);
    this.xdir = 0;

  this.applyForce = function(force) {
    this.acc.add(force)
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.lava = function() {
    if (this.pos.y >= state.windowHeight -4) {
      this.vel.y *= 0;
      this.pos.y = state.windowHeight -4;
    }
  }

  this.onPlatform = function(p5, platform) {
    if (Math.floor(this.pos.y) == Math.floor(state.platform.pos.y - 4)) {
      console.log('land')
      this.vel.y *= 0;
      this.pos.y = state.platform.pos.y - 4;
    }
  }

  this.render = function(p5) {
    p5.push();
    p5.noFill();
    p5.stroke('blue');
    p5.strokeWeight(p5.random(0.5, 0.7));
    p5.rectMode(p5.CENTER);

    p5.rect(this.pos.x, this.pos.y, this.r, this.r);
    p5.pop();
  }
}