export function MenuPowerUp(p5, x, y, r, color) {

  this.pos = p5.createVector(x, y);
  this.x = x;
  this.y = y;
  this.r = r;

  this.render = function() {

    //shadow
    p5.push();
    p5.fill('rgba(255, 0, 0, .3)');
    p5.stroke('rgba(255, 0, 0, .3)')
    p5.strokeWeight(p5.random(0, 2));
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.ellipse(0, 0, this.r, this.r);
    p5.pop();

    //main
    p5.push();
    p5.fill(color);
    p5.rectMode(p5.CENTER);
    p5.translate(this.pos.x, this.pos.y);
    p5.ellipse(0, 0, this.r, this.r);
    p5.pop();

    //P TEXT
    p5.push();
    p5.fill('white');
    p5.textSize(1.5);
    p5.text('P', this.pos.x -.5, this.pos.y +.5);
    p5.pop();
    
  }

  this.verticies = function() {
    var menuPowerUpVerticies = [
      this.pos.add(p5.createVector(-this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, this.r /2), this.pos),
      this.pos.add(p5.createVector(-this.r / 2, -this.r /2), this.pos),
      this.pos.add(p5.createVector(this.r / 2, -this.r /2), this.pos),
    ]
    return menuPowerUpVerticies;
  }

  
}

export const drawMenu = (p5, mainFont) => {
  p5.push();
  p5.background(0);
  p5.pop();

  p5.push();
  p5.noFill();
  p5.stroke('blue');
  p5.strokeWeight(p5.random(0.1, 0.3));
  p5.rect(50, 50, 99.5, 99.5);
  p5.pop();

  p5.push();
  p5.noFill();
  p5.stroke('#77fc03');
  p5.strokeWeight(p5.random(0.1, 0.3));
  p5.rect(50, 50, 99, 99);
  p5.pop();

  p5.push();
  p5.noFill();
  p5.stroke('red');
  p5.strokeWeight(p5.random(0.1, 0.3));
  p5.rect(50, 50, 98.5, 98.5);
  p5.pop();

  //title
  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke('#77fc03');
  p5.strokeWeight(p5.random(0.1, 0.2));
  p5.textSize(10);
  p5.text('SNAKE-EATER', 8, 35);
  p5.pop();

  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke('blue');
  p5.strokeWeight(p5.random(0, 0.15));
  p5.textSize(9.9);
  p5.text('SNAKE-EATER', 8.5, 35);
  p5.pop();

  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke('#77fc03');
  p5.strokeWeight(p5.random(0.1, 0.2));
  p5.textSize(2.4);
  p5.text('GOAL: COLLECT AS MANY FLIES AND POWERUPS AS YOU CAN!', 8, 45);
  p5.pop();

  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke('#ff0000');
  p5.strokeWeight(p5.random(0.1, 0.2));
  p5.textSize(2.6);
  p5.text('CONTROLS:', 43, 53);
  p5.pop();

  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke('#ff0000');
  p5.strokeWeight(p5.random(0.1, 0.2));
  p5.textSize(3.2);
  p5.text('MOVE: ARROW KEYS VENOM: SPACEBAR', 15, 60);
  p5.pop();

  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke('#ff03ab');
  p5.strokeWeight(p5.random(0.1, 0.2));
  p5.textSize(5.7);
  p5.text('START GAME: ENTER KEY', 8, 70);
  p5.pop();

  p5.push();
  p5.textFont(mainFont);
  p5.noFill();
  p5.stroke('green');
  p5.strokeWeight(p5.random(0, 0.15));
  p5.textSize(5.6);
  p5.text('START GAME: ENTER KEY', 8.75, 70);
  p5.pop();
};
