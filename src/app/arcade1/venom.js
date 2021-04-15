import * as p5 from "p5";
import { lineIntersect } from "./utilities";

export default function Venom(p5, x, y, r, snake) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xdir = snake.xdir;
  this.ydir = snake.ydir;

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

  this.offscreen = function() {
    if (this.x > 100 || this.x < 0) {
      return true;
    }
    if (this.y > 100 || this.y < 0) {
      return true;
    }
    return false;
  }
}