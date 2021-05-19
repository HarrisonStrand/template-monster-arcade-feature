import { state } from '../game/state'

//Enemy.js
export function Enemy(p5, x, y) {
    this.r = 6; //enemy size
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(-.7, 0);
    this.acc = p5.createVector(0, 0);
    this.xdir = 0;
    this.ydir = 0;

  this.applyForce = function(force) {
    this.acc.add(force)
  }

  this.setDir = function(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.render = function(p5) {
    p5.push();
    p5.noFill();
    p5.stroke('green');
    p5.strokeWeight(p5.random(0.5, 0.7));
    p5.ellipseMode(p5.CENTER);
    p5.ellipse(this.pos.x, this.pos.y, this.r, this.r);
    p5.pop();

    // p5.push()
    // p5.textSize(2)
    // p5.fill('white')
    // p5.text(`x:${Math.round(this.pos.x)}, y: ${Math.round(this.pos.y)}`, this.pos.x + 1,this.pos.y + 1)
    // p5.pop()
  }
}
export function Layer1(p5, x, y) {
    this.r = 4; //enemy size
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(-.7, 0);
    this.acc = p5.createVector(0, 0);
    this.xdir = 0;
    this.ydir = 0;

  this.applyForce = function(force) {
    this.acc.add(force)
  }

  this.setDir = function(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.render = function(p5) {
    p5.push();
    p5.noFill();
    p5.stroke('green');
    p5.strokeWeight(p5.random(0.5, 0.7));
    p5.ellipseMode(p5.CENTER);
    p5.ellipse(this.pos.x, this.pos.y, this.r, this.r);
    p5.pop();

  }
}
export function Layer2(p5, x, y) {
    this.r = 2; //enemy size
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(-.7, 0);
    this.acc = p5.createVector(0, 0);
    this.xdir = 0;
    this.ydir = 0;

  this.applyForce = function(force) {
    this.acc.add(force)
  }

  this.setDir = function(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.render = function(p5) {
    p5.push();
    p5.noFill();
    p5.stroke('green');
    p5.strokeWeight(p5.random(0.5, 0.7));
    p5.ellipseMode(p5.CENTER);
    p5.ellipse(this.pos.x, this.pos.y, this.r, this.r);
    p5.pop();

  }
}