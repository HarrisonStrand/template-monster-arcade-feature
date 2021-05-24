import { state } from '../game/state'

export function Hud(platformFont) {
  this.platformFont = platformFont

  this.render = function(p5, levelIndicator) {

    let windowWidth = 0
    if (state.windowWidth > 180) {
      windowWidth = 180;
    } else {
      windowWidth = state.windowWidth
    }

    //LEVEL INDICATOR
    p5.push()
    p5.textFont(platformFont);
    p5.textSize(3);
    p5.noFill()
    p5.stroke('white')
    p5.strokeWeight(p5.random(0.1, 0.15))
    p5.text('Level: ' + levelIndicator, 1, 4)
    p5.pop()

    // LIVES LEFT
    p5.push();
    p5.textFont(platformFont);
    p5.textSize(3);
    p5.noFill();
    p5.stroke('white');
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('Lives:', windowWidth * .78 , 4);
    p5.pop();

    //BLUE SQUARE LIVES
    for (let i = 0; i < state.livesLeft; i++) {
      p5.push();
      p5.stroke('blue');
			p5.noFill();
			p5.strokeWeight(p5.random(.2, .4))
      p5.rectMode(p5.CENTER);
      p5.rect(windowWidth * (.92 - (i * -.03)), 3, 2, 2);
      p5.pop();
    }

    if(state.livesLeft < 0) {
      state.gameOver = true;
      //SEE THROUGH BACKGROUND
      p5.push();
      p5.background('rgba(0,0,0,.6)');
      p5.pop();
      
      //GAME
      p5.push();
      p5.textFont(platformFont);
      p5.textSize(state.windowWidth * .07);
      p5.noFill();
      p5.stroke('blue');
      p5.strokeWeight(p5.random(0.2, 0.3));
      p5.textAlign(p5.CENTER);
      p5.text('GAME OVER', state.windowWidth /2, state.windowHeight /3);
      p5.pop();
      
      //PRESS ENTER TO CONTINUE
      p5.push();
      p5.textFont(platformFont);
      p5.textSize(state.windowWidth * .04);
      p5.noFill();
      p5.stroke('blue');
      p5.strokeWeight(p5.random(0.2, 0.3));
      p5.textAlign(p5.CENTER);
      p5.text('press enter to continue', state.windowWidth /2, state.windowHeight /2);
      p5.pop();
      
      //ESC TO MAIN MENU
      p5.push();
      p5.textFont(platformFont);
      p5.textSize(state.windowWidth * .03);
      p5.noFill();
      p5.stroke('blue');
      p5.strokeWeight(p5.random(0.2, 0.3));
      p5.textAlign(p5.CENTER);
      p5.text('esc - Main Menu', state.windowWidth / 2, state.windowHeight/1.5);
      p5.pop();
    }
	}

}
export function Arrow() {

  this.render = function(p5) {

    let windowWidth = 0
    if (state.windowWidth > 180) {
      windowWidth = 180;
    } else {
      windowWidth = state.windowWidth
    }

    //NEXT LEVEL INDICATOR
    p5.push()
    p5.textSize(8);
    p5.noFill()
    p5.stroke('white')
    p5.strokeWeight(p5.random(0.1, 0.3))
    p5.text("\u2192", state.windowWidth -8, state.windowHeight - 22)
    p5.pop()
	}
}