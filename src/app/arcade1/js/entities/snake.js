import { state } from "../game/state";

//Snake.js
export default class Snake {
  constructor(p5, x, y) {
    this.r = 2; //snake size
    this.body = [];
    this.body[0] = p5.createVector(x, y); //snake default location
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }

  demo() {
    this.xdir = 1;
  }

  verticies(p5) {
    var snakeVerticies = [
      this.body[this.body.length - 1].add(
        p5.createVector(-this.r / 2, this.r / 2),
        this.body[0]
      ), // bottom left corner
      this.body[this.body.length - 1].add(
        p5.createVector(this.r / 2, this.r / 2),
        this.body[0]
      ), // bottom right corner
      this.body[this.body.length - 1].add(
        p5.createVector(-this.r / 2, -this.r / 2),
        this.body[0]
      ), // top left corner
      this.body[this.body.length - 1].add(
        p5.createVector(this.r / 2, -this.r / 2),
        this.body[0]
      ), // top right corner
    ];
    return snakeVerticies;
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir / 2;
    head.y += this.ydir / 2;
    this.body.push(head);
  }

  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.len++;
    this.body.push(head);
  }

  eatPowerUp(powerUp, p5) {
    const end_of_array = this.body.length - 1;
    let dist =
      (this.body[end_of_array].x - powerUp.pos.x) *
        (this.body[end_of_array].x - powerUp.pos.x) +
      (this.body[end_of_array].y - powerUp.pos.y) *
        (this.body[end_of_array].y - powerUp.pos.y);
    if (
      dist >
      (powerUp.r + this.body[end_of_array].r) *
        (powerUp.r + this.body[end_of_array].r)
    ) {
      return false;
    }
    if (dist <= powerUp.r * 1.75) {
      // radius size for snake
      return true;
    }
    return false;
  }

    eatPowerUp2(powerUp2, p5) {
    const end_of_array = this.body.length -1
    let dist = (this.body[end_of_array].x - powerUp2.pos.x) * (this.body[end_of_array].x - powerUp2.pos.x) + (this.body[end_of_array].y - powerUp2.pos.y) * (this.body[end_of_array].y - powerUp2.pos.y);
    if (dist > (powerUp2.r + this.body[end_of_array].r) * (powerUp2.r + this.body[end_of_array].r)) {
      return false;
    }
    if (dist <= powerUp2.r * 1.75) { // radius size for snake
      return true
    }
    return false;
  }

  eatKey(key, p5) {
    const end_of_array = this.body.length - 1;
    let dist =
      (this.body[end_of_array].x - key.pos.x) *
        (this.body[end_of_array].x - key.pos.x) +
      (this.body[end_of_array].y - key.pos.y) *
        (this.body[end_of_array].y - key.pos.y);
    if (
      dist >
      (key.r + this.body[end_of_array].r) * (key.r + this.body[end_of_array].r)
    ) {
      return false;
    }
    if (dist <= key.r * 1.75) {
      // radius size for snake
      return true;
    }
    return false;
  }

  hitTail(p5) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    let r = this.body[this.body.length - 1].r;

    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if ((x >= part.x - .2 && x <= part.x + .2) && (y >= part.y - .2 && y <= part.y + .2)) {
        state.hittingTail = true;
        return true;
      }
    }
    state.hittingTail = false;
    return false;
  }

  eatPoint(point, p5) {
    const end_of_array = this.body.length - 1;
    let dist =
      (this.body[end_of_array].x - point.pos.x) *
        (this.body[end_of_array].x - point.pos.x) +
      (this.body[end_of_array].y - point.pos.y) *
        (this.body[end_of_array].y - point.pos.y);
    if (
      dist >
      (point.r + this.body[end_of_array].r) *
        (point.r + this.body[end_of_array].r)
    ) {
      return false;
    }
    if (dist <= point.r * 3) { // radius size for snake
      return true;
    }
    return false;
  }

  hitEnemy(enemy, p5) {
    const end_of_array = this.body.length - 1;
    let dist =
      (this.body[end_of_array].x - enemy.x) *
        (this.body[end_of_array].x - enemy.x) +
      (this.body[end_of_array].y - enemy.y) *
        (this.body[end_of_array].y - enemy.y);
    if (
      dist >
      (enemy.r + this.body[end_of_array].r) *
        (enemy.r + this.body[end_of_array].r)
    ) {
      return false;
    }
    if (dist <= enemy.r * 2) {
      // radius size for snake
      return true;
    }
    return false;
  }

    pointMagnet(point, p5) {
    const end_of_array = this.body.length -1;
    let dist = (this.body[end_of_array].x - point.x) * (this.body[end_of_array].x - point.x) + (this.body[end_of_array].y - point.y) * (this.body[end_of_array].y - point.y);
    if (dist > (point.r + this.body[end_of_array].r) * (point.r + this.body[end_of_array].r)) {
      return false;
    }
    if (dist <= point.r * 10) { // radius size for snake
      return true;
    }
    return false;
  }

  show(p5) {
    for (let i = 0; i < this.body.length; i++) {
      p5.push();
      p5.noFill();
      p5.stroke(state.arcadeColor4);
      p5.strokeWeight(p5.random(0.05, 0.1));
      p5.rectMode(p5.CENTER);

      p5.rect(this.body[i].x, this.body[i].y, this.r, this.r);
      p5.pop();

      p5.push();
      p5.fill(state.arcadeColor4);

      p5.stroke(state.arcadeColor4);
      p5.strokeWeight(p5.random(0.05, 0.3));
      p5.rectMode(p5.CENTER);

      p5.rect(
        this.body[this.body.length - 1].x,
        this.body[this.body.length - 1].y,
        this.r,
        this.r
      );
      p5.pop();
    }
  }
}