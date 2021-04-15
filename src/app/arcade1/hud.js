export default function Hud(mainFont, mainTextFillColor) {
  this.mainFont = mainFont
  this.mainTextFillColor = mainTextFillColor

  this.render = function(p5, scoreCount, livesLeft, keysToCollect, levelIndicator) {
    //SCORE TEXT RENDERING
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(8);
    p5.fill(mainTextFillColor);
    p5.stroke(255);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('Score:', 104, 10);
    p5.pop();

    //SCORE NUMBER RENDERING
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(5);
    p5.fill(mainTextFillColor);
    p5.stroke(255);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text(scoreCount, 104, 15);
    p5.pop();

//SIDEBAR TEXT RENDERING
  if (livesLeft >= 0 || p5.key == 'y') {
    // LIVES LEFT
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(8);
    p5.fill(mainTextFillColor);
    p5.stroke(255);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('Lives:' + livesLeft, 103, 25);
    p5.pop();

    //LEGEND
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(5);
    p5.fill(200);
    p5.stroke(255);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('legend:', 108, 35);
    p5.pop();

    //shadow
    p5.push();
    p5.fill('rgba(255, 0, 0, .3)');
    p5.stroke('rgba(255, 0, 0, .3)');
    p5.strokeWeight(p5.random(0, 2));
    p5.rectMode(p5.CENTER);
    p5.translate(109, 39);
    p5.ellipse(0, 0, 3, 3);
    p5.pop();

    //main
    p5.push();
    p5.fill('red');
    p5.rectMode(p5.CENTER);
    p5.translate(109, 39);
    p5.ellipse(0, 0, 3, 3);
    p5.pop();

    //P TEXT
    p5.push();
    p5.fill('white');
    p5.textSize(2);
    p5.text('P', 109 - 0.6, 39 + 0.6);
    p5.pop();

    // TEXT
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.fill(200);
    p5.stroke(255);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text(' - powerup', 111, 40);
    p5.pop();

    ////KEY////

    //shadow
    p5.push();
    p5.fill('rgba(218,165,32, .3)');
    p5.stroke('rgba(218,165,32, .3)');
    p5.strokeWeight(p5.random(0, 2));
    p5.rectMode(p5.CENTER);
    p5.translate(109, 45);
    p5.ellipse(0, 0, 3, 3);
    p5.pop();

    //main
    p5.push();
    p5.fill('rgb(218,165,32)');
    p5.rectMode(p5.CENTER);
    p5.translate(109, 45);
    p5.ellipse(0, 0, 3, 3);
    p5.pop();

    //K TEXT
    p5.push();
    p5.fill('black');
    p5.textSize(2);
    p5.text('K', 109 - 0.6, 45 + 0.6);
    p5.pop();

    // TEXT
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.fill(200);
    p5.stroke(255);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text(' - key', 111, 46);
    p5.pop();

    ////POINTS////

    p5.push();
    p5.fill('white');
    p5.rectMode(p5.CENTER);
    p5.translate(109, 50);
    p5.ellipse(p5.random(0, 0.07), 0, 2, 2);
    p5.pop();

    // TEXT
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.fill(200);
    p5.stroke(255);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text(' - +100 Points', 111, 51);
    p5.pop();
  } else {
    //GAME
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(8);
    p5.fill(255, 0, 0);
    p5.stroke(255);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('GAME', 108, 45);
    p5.pop();

    //OVER
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(8);
    p5.fill(255, 0, 0);
    p5.stroke(255);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('OVER', 108, 55);
    p5.pop();

    //PRESS Y TO CONTINUE
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(2);
    p5.fill(255, 0, 0);
    p5.stroke(255);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('press y to continue', 107, 60);
    p5.pop();
  }

//KEYS REMAINING RENDERING
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(3);
    p5.fill(mainTextFillColor);
    p5.stroke(255);
    p5.strokeWeight(p5.random(0.07, 0.1));
    p5.text('Keys Remaining:' + keysToCollect, 105, 96);
    p5.pop();

    //LEVEL INDICATOR RENDERING
    p5.push();
    p5.textFont(mainFont);
    p5.textSize(8);
    p5.fill(mainTextFillColor);
    p5.stroke(255);
    p5.strokeWeight(p5.random(0.1, 0.15));
    p5.text('Level:' + levelIndicator, 103, 90);
    p5.pop();
  }
}