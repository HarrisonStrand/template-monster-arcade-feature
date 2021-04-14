import * as p5 from 'p5';
import { lineIntersect } from './utilities'

//Snake.js
export default class Snake {

  constructor(p5, x, y, r, dir) {
    this.r = 2; //snake size
    this.body = [];
    this.body[0] = p5.createVector(1.5, 49);//snake default location
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
    this.dir = '';
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
    if (this.xdir == 1) {
      this.dir = 'RIGHT';
    } else if (this.xdir == -1) {
      this.dir = 'LEFT';
    } else if (this.ydir == 1) {
      this.dir = 'DOWN';
    } else if (this.ydir == -1) {
      this.dir = 'UP';
    } else {
      this.dir = '';
    }
    console.log(this.dir)
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

  show(p5) {
    for (let i = 0; i < this.body.length; i++) {
      p5.fill('#66ff00');
      p5.noStroke();
      p5.rectMode(p5.CENTER);
      p5.rect(this.body[i].x, this.body[i].y, this.r, this.r);
    }
  }
} 