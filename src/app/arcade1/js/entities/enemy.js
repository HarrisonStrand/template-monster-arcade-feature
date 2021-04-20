import { state } from '../game/state'

export default function Enemy(p5, x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xspeed = state.enemySpeed;
  this.yspeed = state.enemySpeed;

  this.render = function (p5) {
    p5.push();
    p5.noStroke();
    p5.fill(state.enemyMainColor);
    p5.ellipse(this.x, this.y, this.r, this.r);
    p5.pop();
  };

  this.hits = function(something) {
    var d = p5.dist(this.x, this.y, something.x, something.y);
    if (d < something.r) {
      console.log('hit!')
      return true;
    } else {
      return false;
    }
  }
}