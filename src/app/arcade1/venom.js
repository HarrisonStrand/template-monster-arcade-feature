import * as p5 from "p5";
import { lineIntersect } from "./utilities";

export default function Venom(p5, x, y, r, snake) {
  // this.pos = p5.createVector(spos.x, spos.y);
  this.x = x;
  this.y = y;
  this.r = r;
  this.xdir = snake.xdir;
  this.ydir = snake.ydir;
  // this.vel = p5.Vector.fromAngle(angle);
  // this.vel.p5.mult(10);
  // this.toDelete = false;

  this.show = function (p5) {
    p5.push();
    p5.noStroke();
    p5.fill("cyan");
    p5.ellipse(this.x, this.y, this.r, this.r);
    p5.pop();
  };

  this.setDir = function (x, y) {
    this.xdir = x;
    this.ydir = y;
  };

  this.update = function (snake) {
    this.x += this.xdir*2;
    this.y += this.ydir*2;
  };

  this.dissipate = function () {
    this.toDelete = true;
  };
}