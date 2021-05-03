import { state } from '../game/state'

export default function Hud(mainFont) {
  this.mainFont = mainFont

  this.render = function(p5, scoreCount, livesLeft, keysToCollect, levelIndicator, totalWidth, totalHeight) {

    //SCORE COUNT
    p5.push()
    p5.textFont(mainFont);
    p5.textSize(state.windowWidth *.03);
    p5.noFill()
    p5.stroke("white")
    p5.strokeWeight(p5.random(0.15, 0.2))
    p5.text(scoreCount, 1, 3)
    p5.pop()

    // LIVES LEFT
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(state.windowWidth *.03);
    p5.noFill();
    p5.stroke("white");
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('Lives:', totalWidth -30 , 3);
    for (let i = 0; i < livesLeft; i ++) {
      if (livesLeft === 3) {
        p5.push();
        p5.fill("#C9FF00");
        p5.rectMode(p5.CENTER);
        p5.rect(totalWidth-13, 2, 2, 2);
        p5.pop();
        
        p5.push();
        p5.fill("#C9FF00");
        p5.rectMode(p5.CENTER);
        p5.rect(totalWidth-8, 2, 2, 2);
        p5.pop();
        
        p5.push();
        p5.fill("#C9FF00");
        p5.rectMode(p5.CENTER)
        p5.rect(totalWidth-3, 2, 2, 2)
        p5.pop();
      } else if (livesLeft === 2) {
        
        p5.push();
        p5.fill("#C9FF00");
        p5.rectMode(p5.CENTER)
        p5.rect(totalWidth-13, 2, 2, 2)
        p5.pop();
        
        p5.push();
        p5.fill("#C9FF00");
        p5.rectMode(p5.CENTER)
        p5.rect(totalWidth-8, 2, 2, 2)
        p5.pop();
      } else if (livesLeft === 1) {
        p5.push();
        p5.fill("#C9FF00");
        p5.rectMode(p5.CENTER)
        p5.rect(totalWidth-13, 2, 2, 2)
        p5.pop();
      }
    }
    p5.pop();

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
    p5.textSize(state.windowWidth * .03);
    p5.noFill();
    p5.stroke(state.levelIndicatorTextStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.textAlign(p5.CENTER);
    p5.text('Level:' + levelIndicator, totalWidth/2, 3);
    p5.pop();


    if(state.livesLeft < 0) {
      //SEE THROUGH BACKGROUND
      p5.push();
      p5.background('rgba(0,0,0,.6)');
      p5.pop();
      
      //GAME
      p5.push();
      p5.textFont(mainFont);
      p5.textSize(state.windowWidth * .12);
      p5.fill(state.gameOverTextFill);
      p5.stroke(state.gameOverTextStroke);
      p5.strokeWeight(p5.random(0.1, 0.15));
      p5.textAlign(p5.CENTER);
      p5.text('GAME OVER', state.windowWidth /2, state.windowHeight /3);
      p5.pop();
      
      //PRESS ENTER TO CONTINUE
      p5.push();
      p5.textFont(mainFont);
      p5.textSize(state.windowWidth * .05);
      p5.fill(state.gameOverTextFill);
      p5.stroke(state.gameOverTextStroke);
      p5.strokeWeight(p5.random(0.1, 0.15));
      p5.textAlign(p5.CENTER);
      p5.text('press enter to continue', state.windowWidth /2, state.windowHeight /2);
      p5.pop();
      
      //ESC TO MAIN MENU
      p5.push();
      p5.textFont(mainFont);
      p5.textSize(state.windowWidth * .03);
      p5.fill(state.gameOverTextFill);
      p5.stroke(state.gameOverTextStroke);
      p5.strokeWeight(p5.random(0.1, 0.15));
      p5.textAlign(p5.CENTER);
      p5.text('esc - Main Menu', state.windowWidth / 2, state.windowHeight/1.5);
      p5.pop();
      
      //PRESENTED TO YOU BY:
      p5.push();
      p5.textFont(mainFont);
      p5.textSize(state.windowWidth * .02);
      p5.textAlign(p5.CENTER);
      p5.fill(state.presentedByTextFill);
      p5.stroke(state.presentedByTextStroke);
      p5.strokeWeight(p5.random(0.1, 0.15));
      p5.image(state.clientLogo, state.windowWidth /1.65, state.windowHeight /1.3, state.windowWidth /15 + 4, state.windowHeight/15);
      p5.text('presented to you by ', state.windowWidth / 2.6, state.windowHeight/1.2);
      p5.pop();
    }
  }
}