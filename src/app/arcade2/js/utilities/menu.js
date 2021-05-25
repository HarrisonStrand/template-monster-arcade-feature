import { state } from "../game/state";

export function MenuPlayer(p5, totalWidth, totalHeight) {
	this.r = totalWidth /8.5; //Player size
	this.pos = p5.createVector(totalWidth / 2, totalHeight / 5.5);
	this.vel = p5.createVector(0, 0);
	this.acc = p5.createVector(0, 0);
	this.jump = p5.createVector(0, -2);
	this.xdir = 0;
	this.ang = 0;

	this.render = function(p5, totalWidth, totalHeight) {
    p5.push();
    p5.fill('blue');
    p5.stroke('blue');
    p5.strokeWeight(p5.random(0.5, 0.7));
    p5.ellipseMode(p5.CENTER);
    p5.ellipse(this.pos.x, this.pos.y, this.r, this.r);
    p5.pop();
    
    p5.push();
    p5.fill('white')
    p5.stroke('black')
    p5.strokeWeight(.5);
    p5.translate(this.pos.x, this.pos.y)
		let angleRight = this.ang += .1
		p5.rotate(angleRight)
    p5.rectMode(p5.CENTER)
    p5.rect(0, 0, this.r +.2, totalWidth /40)
    p5.pop();

  }
}

export const drawMenu = (p5, platformFont, totalWidth, totalHeight, ) => {
	p5.push();
  p5.background(state.mountains);
  p5.pop();

  //TITLE
  p5.push();
  p5.textFont(platformFont);
	p5.fill('blue')
  p5.stroke('blue');
  p5.strokeWeight(p5.random(0.3, 0.5));
  p5.textSize(totalWidth * 0.135);
  p5.textAlign(p5.CENTER);
  p5.text("B", totalWidth / 2.7, totalHeight / 3.4);
	p5.text("B", totalWidth / 1.55, totalHeight / 3.4);
  p5.pop();

  //GOAL TEXT
  p5.push();
  p5.textFont(platformFont);
  p5.fill('blue');
  p5.stroke('blue');
  p5.strokeWeight(p5.random(0.2, 0.3));
  p5.textSize(totalWidth * 0.025);
  p5.textAlign(p5.CENTER);
  p5.text(
    "MAKE IT TO THE LAST PLATFORM",
    totalWidth / 2,
    totalHeight / 2.5
  );
  p5.pop();

  p5.push();
  p5.textFont(platformFont);
  p5.fill('blue');
  p5.stroke('blue');
  p5.strokeWeight(p5.random(0.2, 0.3));
  p5.textSize(totalWidth * 0.025);
  p5.textAlign(p5.CENTER);
  p5.text(
    "AVOID THE",
    totalWidth / 3.45,
    totalHeight / 2
  );
	p5.fill('red');
  p5.stroke('red');
	p5.text(
    "LAVA",
    totalWidth / 2.12,
    totalHeight / 2
  );
	p5.fill('blue');
  p5.stroke('blue');
	p5.text(
    "AND",
    totalWidth / 1.72,
    totalHeight / 2
  );
	p5.fill('green');
  p5.stroke('green');
	p5.text(
    "ENEMIES",
    totalWidth / 1.37,
    totalHeight / 2
  );
  p5.pop();

  //CONTROLS
  p5.push();
  p5.textFont(platformFont);
  p5.fill('white')
  p5.stroke('white');
  p5.strokeWeight(p5.random(0.1, 0.2));
  p5.textSize(totalWidth * 0.027);
  p5.textAlign(p5.CENTER);
  p5.text("CONTROLS:", totalWidth / 2, totalHeight / 1.65);
  p5.pop();

	p5.push()
	p5.textSize(totalWidth * .06);
	p5.noFill();
	p5.stroke('white')
	p5.strokeWeight(p5.random(0.1, 0.3))
	p5.textAlign(p5.CENTER)
	p5.text("\u2191", totalWidth /2.4, totalHeight / 1.36)
	p5.text("\u2190\u2192", totalWidth /2.4, totalHeight / 1.2)
	p5.text("\u2423", totalWidth /2.4, totalHeight / 1.12)
	p5.pop()

  p5.push();
  p5.textFont(platformFont);
  p5.fill('white');
  p5.stroke('white');
  p5.strokeWeight(p5.random(0.1, 0.2));
  p5.textSize(totalWidth * 0.027);
  p5.textAlign(p5.CENTER);
  p5.text(
    "JUMP",
    totalWidth / 1.8,
    totalHeight / 1.4
  );
  p5.text(
    "MOVE",
    totalWidth / 1.8,
    totalHeight / 1.23
  );
  p5.text(
    "SHOOT",
    totalWidth / 1.8,
    totalHeight / 1.1
  );
  p5.pop();
};

