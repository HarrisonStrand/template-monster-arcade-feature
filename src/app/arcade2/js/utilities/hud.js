import { state } from '../game/state'

export default function Hud(mainFont) {
  this.mainFont = mainFont

  this.render = function(p5, levelIndicator, livesLeft) {

    let windowWidth = 0
    if (state.windowWidth > 180) {
      windowWidth = 180;
    } else {
      windowWidth = state.windowWidth
    }

    //LEVEL INDICATOR
    p5.push()
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.noFill()
    p5.stroke('white')
    p5.strokeWeight(p5.random(0.1, 0.15))
    p5.text('Level: ' + levelIndicator, 1, 3)
    p5.pop()

    // LIVES LEFT
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.noFill();
    p5.stroke('white');
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('Lives:', windowWidth * .78 , 3);
    p5.pop();

    for (let i = 0; i < state.livesLeft; i++) {
      p5.push();
      p5.stroke('blue');
			p5.noFill();
			p5.strokeWeight(p5.random(.2, .4))
      p5.rectMode(p5.CENTER);
      p5.rect(windowWidth * (.90 - (i * -.03)), 2, 2, 2);
      p5.pop();
    }


	}
}