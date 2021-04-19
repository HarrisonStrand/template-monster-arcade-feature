import * as p5 from "p5";
import { lineIntersect } from "./utilities";

export default function Enemy(p5, x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xdir = .1;
  this.ydir = .1;

  this.render = function (p5) {
    p5.push();
    p5.noStroke();
    p5.fill("blue");
    p5.ellipse(this.x, this.y, this.r, this.r);
    p5.pop();
  };

  this.setDir = function (x, y) {
    this.xdir = x;
    this.ydir = y;
  };

  this.update = function () {
    this.x += this.xdir*3;
    this.y += this.ydir*3;
  };

  this.hits = function(something) {
    var d = p5.dist(this.x, this.y, something.x, something.y);
    if (d < something.r) {
      return true;
    } else {
      return false;
    }
  }
}