import { state } from '../game/state'

//Snake.js
export default class Snake {

  constructor(p5, x, y, r) {
    this.r = 2; //snake size
    this.x = x;
    this.y = y;
    this.body = [];
    this.body[0] = p5.createVector(1.5, 49);//snake default location
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }

  demo() {
    this.xdir = 1;
  }

  verticies(p5) {
    var snakeVerticies = [
      this.body[this.body.length -1].add(p5.createVector(-this.r / 2, this.r /2), this.body[0]), // bottom left corner
      this.body[this.body.length -1].add(p5.createVector(this.r / 2, this.r /2), this.body[0]), // bottom right corner
      this.body[this.body.length -1].add(p5.createVector(-this.r / 2, -this.r /2), this.body[0]), // top left corner
      this.body[this.body.length -1].add(p5.createVector(this.r / 2, -this.r /2), this.body[0]), // top right corner
    ]
    return snakeVerticies;
  }


  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir/2;
    head.y += this.ydir/2;
    this.body.push(head);
  }
  
  grow() {
      let head = this.body[this.body.length -1].copy();
      this.len++;
      this.body.push(head);
  }
  
  eatPowerUp(powerUp, p5) {
    const end_of_array = this.body.length -1
    let dist = (this.body[end_of_array].x - powerUp.pos.x) * (this.body[end_of_array].x - powerUp.pos.x) + (this.body[end_of_array].y - powerUp.pos.y) * (this.body[end_of_array].y - powerUp.pos.y);
    if (dist > (powerUp.r + this.body[end_of_array].r) * (powerUp.r + this.body[end_of_array].r)) {
      return false;
    }
    if (dist <= powerUp.r * 1.75) { // radius size for snake
      return true
    }
    return false;
  }
  
  eatKey(key, p5) {
    const end_of_array = this.body.length -1
    let dist = (this.body[end_of_array].x - key.pos.x) * (this.body[end_of_array].x - key.pos.x) + (this.body[end_of_array].y - key.pos.y) * (this.body[end_of_array].y - key.pos.y);
    if (dist > (key.r + this.body[end_of_array].r) * (key.r + this.body[end_of_array].r)) {
      return false;
    }
    if (dist <= key.r * 1.75) { // radius size for snake
      return true
    }
    return false;
  }

  eatPoint(point, p5) {
    const end_of_array = this.body.length -1
    let dist = (this.body[end_of_array].x - point.pos.x) * (this.body[end_of_array].x - point.pos.x) + (this.body[end_of_array].y - point.pos.y) * (this.body[end_of_array].y - point.pos.y);
    if (dist > (point.r + this.body[end_of_array].r) * (point.r + this.body[end_of_array].r)) {
      return false;
    }
    if (dist <= point.r * 3) { // radius size for snake
      return true
    }
    return false;
  }

  hitEnemy(enemy, p5) {
    const end_of_array = this.body.length -1
    let dist = (this.body[end_of_array].x - enemy.x) * (this.body[end_of_array].x - enemy.x) + (this.body[end_of_array].y - enemy.y) * (this.body[end_of_array].y - enemy.y);
    if (dist > (enemy.r + this.body[end_of_array].r) * (enemy.r + this.body[end_of_array].r)) {
      return false;
    }
    if (dist <= enemy.r * 2) { // radius size for snake
      return true
    }
    return false;
  }

  show(p5) {
    for (let i = 0; i < this.body.length; i++) {
      p5.fill(state.snakeMainColor);
      p5.noStroke();
      p5.rectMode(p5.CENTER);
      p5.rect(this.body[i].x, this.body[i].y, this.r, this.r);
    }
  }
} 