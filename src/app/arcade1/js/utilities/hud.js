import { state } from '../game/state'

export default function Hud(mainFont) {
  this.mainFont = mainFont

  this.render = function(p5, scoreCount, livesLeft, keysToCollect, levelIndicator) {
    //SCORE TEXT RENDERING
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(8);
    p5.fill(state.scoreTextFill);
    p5.stroke(state.scoreTextStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('Score:', 104, 10);
    p5.pop();

    //SCORE NUMBER RENDERING
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(5);
    p5.fill(state.scoreNumberFill);
    p5.stroke(state.scoreNumberStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text(scoreCount, 104, 15);
    p5.pop();

//SIDEBAR TEXT RENDERING
  if (livesLeft >= 0 || p5.key == 'y') {
    // LIVES LEFT
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(8);
    p5.fill(state.livesLeftTextFill);
    p5.stroke(state.livesLeftTextStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('Lives:' + livesLeft, 103, 25);
    p5.pop();

    //LEGEND
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(5);
    p5.fill(state.legendTextFill);
    p5.stroke(state.legendTextStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('legend:', 108, 35);
    p5.pop();

    //shadow
    p5.push();
    p5.fill(state.powerUpShadowColor);
    p5.stroke(state.powerUpShadowColor);
    p5.strokeWeight(p5.random(0, 2));
    p5.rectMode(p5.CENTER);
    p5.translate(109, 39);
    p5.ellipse(0, 0, 3, 3);
    p5.pop();

    //main
    p5.push();
    p5.fill(state.powerUpMainColor);
    p5.rectMode(p5.CENTER);
    p5.translate(109, 39);
    p5.ellipse(0, 0, 3, 3);
    p5.pop();

    //P TEXT
    p5.push();
    p5.fill(state.powerUpLetterColor);
    p5.textSize(2);
    p5.text('P', 109 - 0.6, 39 + 0.6);
    p5.pop();

    // TEXT
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.fill(state.legendTextFill);
    p5.stroke(state.legendTextStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text(' - powerup', 111, 40);
    p5.pop();

    ////KEY////

    //shadow
    p5.push();
    p5.fill(state.keyShadowColor);
    p5.stroke(state.keyShadowColor);
    p5.strokeWeight(p5.random(0, 2));
    p5.rectMode(p5.CENTER);
    p5.translate(109, 45);
    p5.ellipse(0, 0, 3, 3);
    p5.pop();

    //main
    p5.push();
    p5.fill(state.keyMainColor);
    p5.rectMode(p5.CENTER);
    p5.translate(109, 45);
    p5.ellipse(0, 0, 3, 3);
    p5.pop();

    //K TEXT
    p5.push();
    p5.fill(state.keyLetterColor);
    p5.textSize(2);
    p5.text('K', 109 - 0.6, 45 + 0.6);
    p5.pop();

    // TEXT
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.fill(state.legendTextFill);
    p5.stroke(state.legendTextStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text(' - key', 111, 46);
    p5.pop();

    ////POINTS////

    p5.push();
    p5.fill(state.gridPointsColor);
    p5.rectMode(p5.CENTER);
    p5.translate(109, 50);
    p5.ellipse(p5.random(0, 0.07), 0, 2, 2);
    p5.pop();

    // TEXT
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.fill(state.legendTextFill);
    p5.stroke(state.legendTextStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text(' - +100 Points', 111, 51);
    p5.pop();

    //KEYS REMAINING RENDERING
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.fill(state.keysRemainingTextFill);
    p5.stroke(state.keysRemainingTextStroke);
    p5.strokeWeight(p5.random(0.07, 0.1));
    p5.text('Keys Remaining:' + keysToCollect, 105, 96);
    p5.pop();

    //LEVEL INDICATOR RENDERING
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(8);
    p5.fill(state.levelIndicatorTextFill);
    p5.stroke(state.levelIndicatorTextStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('Level:' + levelIndicator, 103, 90);
    p5.pop();

  } else {

    //SEE THROUGH BACKGROUND
    p5.push();
    p5.background('rgba(0,0,0,.6)');
    p5.pop();

    //GAME
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(15);
    p5.fill(state.gameOverTextFill);
    p5.stroke(state.gameOverTextStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('GAME OVER', 20, 45);
    p5.pop();

    // //OVER
    // p5.push();
    // p5.textFont(mainFont);
    // p5.textSize(15);
    // p5.fill(state.gameOverTextFill);
    // p5.stroke(state.gameOverTextStroke);
    // p5.strokeWeight(p5.random(0.1, 0.15));
    // p5.text('OVER', 45, 60);
    // p5.pop();

    //PRESS ENTER TO CONTINUE
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(8);
    p5.fill(state.gameOverTextFill);
    p5.stroke(state.gameOverTextStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('press enter to continue', 6, 60);
    p5.pop();

    //ESC TO MAIN MENU
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(4);
    p5.fill(state.gameOverTextFill);
    p5.stroke(state.gameOverTextStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('esc - Main Menu', 47, 70);
    p5.pop();
    
    //PRESENTED TO YOU BY:
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(4);
    p5.fill(state.presentedByTextFill);
    p5.stroke(state.presentedByTextStroke);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.image(state.clientLogo, 90, 85, 14, 10);
    p5.text('presented to you by ', 33, 95);
    p5.pop();
    }


  }
}