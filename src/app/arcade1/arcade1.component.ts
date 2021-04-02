import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import Snake from './snake';
import Obstacle from './obstacle';

@Component({
  selector: 'app-arcade1',
  templateUrl: './arcade1.component.html',
  styleUrls: ['./arcade1.component.css'],
})
export class Arcade1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let snake: any;
    let obstacles: Array<any> = [];
    let obstacle: any;
    let rez = 15;
    let	food: any;
    let w: any;
    let h: any;

    const sketch = (p5: any) => {

      function powerUp() {
        let x = p5.floor(p5.random(w));
        let y = p5.floor(p5.random(h));
        food = p5.createVector(x, y);
      }

      p5.preload = () => {};

      p5.setup = () => {
        p5.createCanvas(400, 400);
        w = p5.floor(p5.width / rez);
        h = p5.floor(p5.height / rez);
        let numberOfObstacles = 6;
        p5.frameRate(10);
        snake = new Snake(p5, w, h);
        obstacle = new Obstacle(p5, w, h);
        for (let i = 0; i < numberOfObstacles; i++) {
          obstacles[i] = new Obstacle(p5,2, 6, i*p5.random((3+6), (4+6)), 10);
        }
        powerUp();
      };

      p5.draw = () => {
        p5.scale(rez);
        p5.background(220);

        if (snake.eat(food)) {
          powerUp();
        }
        for(var i = 0; i < obstacles.length; i++) {
          obstacles[i].show(p5);
        }
        snake.update();
        snake.show(p5);

        if (snake.endGame(w, h)) {
          p5.background(255, 0, 0);
          p5.noLoop();
        }

        // PowerUP
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
      };
    };
    let canvas = new p5(sketch);
  }
}


//if (game is in initial state) {
  //initial value of obstacles
//} else if (snake hits door) {
//  change value of obstacles positions
//}


//every time the snake hits the door, we randomize the obstacles and the enemies ect. within the parameters of our choosing
//when door hit, reset snake to original position and randomize obstacles