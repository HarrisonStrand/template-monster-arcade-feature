import { state } from '../game/state'

export default function Enemy(p5, x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xspeed = state.enemySpeed;
  this.yspeed = state.enemySpeed;

  this.render = function (p5) {
    //MAIN / BACKGROUND
    p5.push();
    p5.noStroke();
    p5.fill(state.enemyMainColor);
    p5.ellipse(this.x, this.y, this.r, this.r);
    p5.pop();

    //SHADOW
    p5.push();
    p5.stroke('rgba(0, 255, 0, .7)');
    p5.strokeWeight(p5.random(.6, .8));
    p5.fill(state.enemyMainColor);
    p5.ellipse(this.x, this.y, this.r, this.r);
    p5.pop();

    //SHADOW2
    p5.push();
    p5.stroke('rgba(0, 200, 0, .7)');
    p5.strokeWeight(p5.random(.4, .7));
    p5.fill(state.enemyMainColor);
    p5.ellipse(this.x, this.y, this.r/1.6, this.r/1.6);
    p5.pop();

    //SHADOW3
    p5.push();
    p5.stroke('rgba(0, 255, 0, .7)');
    p5.strokeWeight(p5.random(.2, .5));
    p5.fill(state.enemyMainColor);
    p5.ellipse(this.x, this.y, this.r/3, this.r/3);
    p5.pop();

    // //SHADOW4
    p5.push();
    p5.strokeWeight(p5.random(.05, .2));
    p5.fill('rgba(0, 200, 0, .7)');
    p5.ellipse(this.x, this.y, this.r/5, this.r/5);
    p5.pop();
  };
}