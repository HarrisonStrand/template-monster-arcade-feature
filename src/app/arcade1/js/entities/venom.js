import { state } from '../game/state'

export default function Venom(p5, x, y, r, snake) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xdir = snake.xdir;
  this.ydir = snake.ydir;

  this.show = function (p5) {
    p5.push();
    p5.noStroke();
    p5.fill(state.venomMainColor);
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

  this.hits = function(something) {
    var d = p5.dist(this.x, this.y, something.x, something.y);
    if (d < something.r * 2) {
      return true;
    } else {
      return false;
    }
  }

  this.offscreen = function() {
    if (this.x > 96 || this.x < 3) {
      return true;
    }
    if (this.y > 96 || this.y < 3) {
      return true;
    }
    return false;
  }
}