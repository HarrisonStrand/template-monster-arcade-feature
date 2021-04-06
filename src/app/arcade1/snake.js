import { lineIntersect } from './utilities'

//Snake.js
export default class Snake {

  constructor(p5, w, h, r) {
    this.r = 2; //snake size
    this.body = [];
    this.body[0] = p5.createVector(.5, p5.floor(h / 2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
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

  endGame(w, h) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
      return true;
    }
    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (part.x == x && part.y == y) {
        return true;
      }
    }
    return false;
  }
  
  
  eat(powerUp, p5) {

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

  obstacleCollide(obstacle, p5) {
    const end_of_array = this.body.length -1
    let dist = (this.body[end_of_array].x - obstacle.pos.x) * (this.body[end_of_array].x - obstacle.pos.x) + (this.body[end_of_array].y - obstacle.pos.y) * (this.body[end_of_array].y - obstacle.pos.y);
    if (dist > (obstacle.r + this.body[end_of_array].r) * (obstacle.r + this.body[end_of_array].r)) {
      return false;
    }
    if (dist <= obstacle.r * 2.5) { // radius size for snake
      return true
    }
    return false;
  }

  show(p5) {
    for (let i = 0; i < this.body.length; i++) {
      p5.fill('#66ff00');
      p5.noStroke();
      p5.rectMode(p5.CENTER);
      p5.rect(this.body[i].x, this.body[i].y, this.r, this.r);
    }
  }
}