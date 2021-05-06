import { state } from '../game/state'

export default function Hud(mainFont) {
  this.mainFont = mainFont

  this.render = function(p5, scoreCount, livesLeft, keysToCollect, levelIndicator) {

    let windowWidth = 0
    if (state.windowWidth > 180) {
      windowWidth = 180;
    } else {
      windowWidth = state.windowWidth
    }

    //SCORE COUNT
    p5.push()
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.noFill()
    p5.stroke(state.arcadeColor2)
    p5.strokeWeight(p5.random(0.1, 0.15))
    p5.text(scoreCount, 1, 3)
    p5.pop()

    // LIVES LEFT
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.noFill();
    p5.stroke(state.arcadeColor2);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('Lives:', windowWidth * .78 , 3);
    p5.pop();

    for (let i = 0; i < livesLeft; i++) {
      p5.push();
      p5.noStroke()
      p5.fill(state.arcadeColor4);
      p5.rectMode(p5.CENTER);
      p5.rect(windowWidth*(.95 - (i * .03)), 2, 2, 2);
      p5.pop();
    }
    

//SIDEBAR TEXT RENDERING


    // //KEYS REMAINING RENDERING
    // p5.push();
    // p5.textFont(mainFont);
    // p5.textSize(3);
    // p5.fill(state.keysRemainingTextFill);
    // p5.stroke(state.keysRemainingTextStroke);
    // p5.strokeWeight(p5.random(0.07, 0.1));
    // p5.text('Keys Remaining:' + keysToCollect, 105, 96);
    // p5.pop();

    //LEVEL INDICATOR RENDERING
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.noFill();
    p5.stroke(state.arcadeColor2);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.textAlign(p5.CENTER);
    p5.text('Level:' + levelIndicator, state.windowWidth/2, 3);
    p5.pop();


    if(state.livesLeft < 0) {
      state.gameOver = true;
      //SEE THROUGH BACKGROUND
      p5.push();
      p5.background('rgba(0,0,0,.6)');
      p5.pop();
      
      //GAME
      p5.push();
      p5.textFont(mainFont);
      p5.textSize(state.windowWidth * .12);
      p5.noFill();
      p5.stroke(state.arcadeColor1);
      p5.strokeWeight(p5.random(0.2, 0.3));
      p5.textAlign(p5.CENTER);
      p5.text('GAME OVER', state.windowWidth /2, state.windowHeight /3);
      p5.pop();
      
      //PRESS ENTER TO CONTINUE
      p5.push();
      p5.textFont(mainFont);
      p5.textSize(state.windowWidth * .05);
      p5.noFill();
      p5.stroke(state.arcadeColor1);
      p5.strokeWeight(p5.random(0.2, 0.3));
      p5.textAlign(p5.CENTER);
      p5.text('press enter to continue', state.windowWidth /2, state.windowHeight /2);
      p5.pop();
      
      //ESC TO MAIN MENU
      p5.push();
      p5.textFont(mainFont);
      p5.textSize(state.windowWidth * .03);
      p5.noFill();
      p5.stroke(state.arcadeColor1);
      p5.strokeWeight(p5.random(0.2, 0.3));
      p5.textAlign(p5.CENTER);
      p5.text('esc - Main Menu', state.windowWidth / 2, state.windowHeight/1.5);
      p5.pop();
      
      //PRESENTED TO YOU BY:
      p5.push();
      p5.textFont(mainFont);
      p5.textSize(state.windowWidth * .02);
      p5.textAlign(p5.CENTER);
      p5.noFill();
      p5.stroke(state.arcadeColor2);
      p5.strokeWeight(p5.random(.15, .2));
      p5.image(state.clientLogo, state.windowWidth /1.65, state.windowHeight /1.3, state.windowWidth /15 + 4, state.windowHeight/15);
      p5.text('presented to you by ', state.windowWidth / 2.6, state.windowHeight/1.2);
      p5.pop();
    }
  }
}