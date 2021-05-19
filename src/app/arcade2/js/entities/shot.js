import { state } from '../game/state'
import { jump } from '../utilities/keyPress';
import { playerReset } from '../utilities/utilities';

export default function Shot(p5, x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xdir = 1;

  this.render = function (p5) {
    p5.push();
    p5.stroke('red');
    p5.noFill();
    p5.strokeWeight(p5.random(.1, .5))
    p5.ellipse(this.x, this.y, this.r, this.r);
    p5.pop();
  };

  this.setDir = function (x) {
    this.xdir = x;
  };

  this.update = function () {
      this.x += this.xdir * 4;
  };

  this.hits = function(something) {
    var d = p5.dist(this.x, this.y, something.pos.x, something.pos.y);
    if (d < this.r + something.r) {
      return true;
    } else {
      return false;
    }
  }

  this.offscreen = function() {
    if (this.x > state.windowWidth || this.x < 0) {
      return true;
    }
    return false;
  }
}