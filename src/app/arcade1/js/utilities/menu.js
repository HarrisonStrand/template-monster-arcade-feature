import { state } from "../game/state";

export function MenuPowerUp(p5, x, y, r) {
  this.pos = p5.createVector(x, y);
  this.x = x;
  this.y = y;
  this.r = r;

  this.render = function () {
    //POWERUP

    //shadow
    p5.push();
    p5.fill(state.arcadeColor5);
    p5.stroke(state.arcadeColor5);
    p5.strokeWeight(p5.random(0, 2));
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.ellipse(0, 0, this.r, this.r);
    p5.pop();

    //main
    p5.push();
    p5.fill(state.arcadeColor1);
    p5.noStroke();
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.ellipse(0, 0, this.r, this.r);
    p5.pop();

    //P TEXT
    p5.push();
    p5.fill(state.arcadeColor2);
    p5.textSize(1.5);
    p5.text('P', this.pos.x -.5, this.pos.y +.5);
    p5.pop();
    
  };

  this.verticies = function () {
    var menuPowerUpVerticies = [
      this.pos.add(p5.createVector(-this.r / 2, this.r / 2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, this.r / 2), this.pos),
      this.pos.add(p5.createVector(-this.r / 2, -this.r / 2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, -this.r / 2), this.pos),
    ];
    return menuPowerUpVerticies;
  };
}

export const drawMenu = (p5, mainFont, totalWidth, totalHeight) => {
  p5.push();
  p5.background(0);
  p5.pop();

  //TITLE PAGE BORDER
  p5.push();
  p5.noFill();
  p5.rectMode(p5.CORNER);
  p5.stroke(state.arcadeColor1);
  p5.strokeWeight(p5.random(0.2, 0.6));
  p5.rect(0.5, 0.5, totalWidth - 1, totalHeight - 1);
  p5.pop();

  p5.push();
  p5.noFill();
  p5.rectMode(p5.CORNER);
  p5.stroke(state.arcadeColor3);
  p5.strokeWeight(p5.random(0.2, 0.6));
  p5.rect(1, 1, totalWidth - 2, totalHeight - 2);
  p5.pop();

  p5.push();
  p5.noFill();
  p5.rectMode(p5.CORNER);
  p5.stroke(state.arcadeColor4);
  p5.strokeWeight(p5.random(0.2, 0.6));
  p5.rect(1.5, 1.5, totalWidth - 3, totalHeight - 3);
  p5.pop();

  //TITLE
  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke(state.arcadeColor3);
  p5.strokeWeight(p5.random(0.1, 0.2));
  p5.textSize(totalWidth * 0.1);
  p5.textAlign(p5.CENTER);
  p5.text("SNAKE-EATER", totalWidth / 2, totalHeight / 3.5);
  p5.pop();

  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke(state.arcadeColor4);
  p5.strokeWeight(p5.random(0.04, 0.2));
  p5.textSize(totalWidth * 0.099);
  p5.textAlign(p5.CENTER);
  p5.text("SNAKE-EATER", totalWidth / 2, totalHeight / 3.5);
  p5.pop();

  //GOAL TEXT
  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke(state.arcadeColor2);
  p5.strokeWeight(p5.random(0.1, 0.2));
  p5.textSize(totalWidth * 0.025);
  p5.textAlign(p5.CENTER);
  p5.text(
    "GOAL: COLLECT THE KEYS AND AVOID THE PONDS!",
    totalWidth / 2,
    totalHeight / 2
  );
  p5.pop();

  //CONTROLS
  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke(state.arcadeColor2);
  p5.strokeWeight(p5.random(0.1, 0.2));
  p5.textSize(totalWidth * 0.028);
  p5.textAlign(p5.CENTER);
  p5.text("CONTROLS:", totalWidth / 2, totalHeight / 1.65);
  p5.pop();

  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke(state.arcadeColor2);
  p5.strokeWeight(p5.random(0.1, 0.2));
  p5.textSize(totalWidth * 0.027);
  p5.textAlign(p5.CENTER);
  p5.text(
    "MOVE: ARROW KEYS VENOM: SPACEBAR",
    totalWidth / 2,
    totalHeight / 1.4
  );
  p5.pop();

  //START GAME
  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke(state.arcadeColor3);
  p5.strokeWeight(p5.random(0.1, 0.2));
  p5.textSize(totalWidth * 0.055);
  p5.textAlign(p5.CENTER);
  p5.text("START GAME: ENTER KEY", totalWidth / 2, totalHeight / 1.18);
  p5.pop();

  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke(state.arcadeColor4);
  p5.strokeWeight(p5.random(0, 0.15));
  p5.textSize(totalWidth * 0.055);
  p5.textAlign(p5.CENTER);
  p5.text("START GAME: ENTER KEY", totalWidth / 2, totalHeight / 1.18);
  p5.pop();
};

