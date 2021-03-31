import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import Snake from './snake';

@Component({
  selector: 'app-arcade1',
  templateUrl: './arcade1.component.html',
  styleUrls: ['./arcade1.component.css'],
})
export class Arcade1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let snake: any;
    let rez = 20;
    let food: any;
    let w: any;
    let h: any;

    const sketch = (p5: any) => {
      function foodLocation() {
        let x = p5.floor(p5.random(w));
        let y = p5.floor(p5.random(h));
        food = p5.createVector(x, y);
      }

      p5.preload = () => {};

      p5.setup = () => {
        p5.createCanvas(400, 400);
        w = p5.floor(p5.width / rez);
        h = p5.floor(p5.height / rez);
        p5.frameRate(30);
        snake = new Snake(p5, w, h);
        foodLocation();
      };

      p5.draw = () => {
        p5.scale(rez);
        p5.background(220);
        if (snake.eat(food)) {
          foodLocation();
        }
        snake.update();
        snake.show(p5);

        if (snake.endGame(w, h)) {
          p5.background(255, 0, 0);
          p5.noLoop();
        }

        p5.noStroke();
        p5.fill(255, 0, 0);
        p5.rect(food.x, food.y, 1, 1);

      };
      p5.keyPressed = () => {
        if (p5.keyCode == p5.LEFT_ARROW) {
          snake.setDir(-1, 0);
        } else if (p5.keyCode === p5.RIGHT_ARROW) {
          snake.setDir(1, 0);
        } else if (p5.keyCode == p5.DOWN_ARROW) {
          snake.setDir(0, 1);
        } else if (p5.keyCode === p5.UP_ARROW) {
          snake.setDir(0, -1);
        }
      }
    };
    let canvas = new p5(sketch);
  }
}


//Snake.js
// class Snake {

//   constructor() {
//     this.body = [];
//     this.body[0] = createVector(floor(w / 2), floor(h / 2));
//     this.xdir = 0;
//     this.ydir = 0;
//     this.len = 0;
//   }

//   setDir(x, y) {
//     this.xdir = x;
//     this.ydir = y;
//   }

//   update() {
//     let head = this.body[this.body.length - 1].copy();
//     this.body.shift();
//     head.x += this.xdir;
//     head.y += this.ydir;
//     this.body.push(head);
//   }

//   grow() {
//     let head = this.body[this.body.length - 1].copy();
//     this.len++;
//     this.body.push(head);

//   }

//   endGame() {
//     let x = this.body[this.body.length - 1].x;
//     let y = this.body[this.body.length - 1].y;
//     if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
//       return true;
//     }
//     for (let i = 0; i < this.body.length - 1; i++) {
//       let part = this.body[i];
//       if (part.x == x && part.y == y) {
//         return true;
//       }
//     }
//     return false;
//   }

//   eat(pos) {
//     let x = this.body[this.body.length - 1].x;
//     let y = this.body[this.body.length - 1].y;
//     if (x == pos.x && y == pos.y) {
//       this.grow();
//       return true;
//     }
//     return false;
//   }

//   show() {
//     for (let i = 0; i < this.body.length; i++) {
//       fill(0);
//       noStroke();
//       rect(this.body[i].x, this.body[i].y, 1, 1);
//     }
//   }

// }

//Sketch.js
// let snake;
// let rez = 20;
// let food;
// let w;
// let h;

// function setup() {
//   createCanvas(400, 400);
//   w = floor(width / rez);
//   h = floor(height / rez);
//   frameRate(5);
//   snake = new Snake();
//   foodLocation();
// }

// function foodLocation() {
//   let x = floor(random(w));
//   let y = floor(random(h));
//   food = createVector(x, y);
// }

// function keyPressed() {
//   if (keyCode == LEFT_ARROW) {
//     snake.setDir(-1, 0);
//   } else if (keyCode === RIGHT_ARROW) {
//     snake.setDir(1, 0);
//   } else if (keyCode == DOWN_ARROW) {
//     snake.setDir(0, 1);
//   } else if (keyCode === UP_ARROW) {
//     snake.setDir(0, -1);
//   }
// }

// function draw() {
//   scale(rez);
//   background(220);
//   if (snake.eat(food)) {
//     foodLocation();
//   }
//   snake.update();
//   snake.show();

//   if (snake.endGame()) {
//     background(255, 0, 0);
//     noLoop();
//   }

//   noStroke();
//   fill(255, 0, 0);
//   rect(food.x, food.y, 1, 1);
// }