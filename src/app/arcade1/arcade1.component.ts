import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import Snake from './snake';
import Obstacle from './obstacle';
import PowerUp from "./powerUp"

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
    let rez = 10;
    let r = 1;
    let w: any;
    let h: any;
    let powerUp: any;

    const sketch = (p5: any) => {

      function getPowerUp() {
        let x = p5.floor(p5.random(w));
        let y = p5.floor(p5.random(h));

        powerUp = new PowerUp(p5, p5.random(0, x), p5.random(0, y), 1, "red")
      }

      p5.preload = () => {};

      p5.setup = () => {
        p5.createCanvas(1000, 1000);
        w = p5.floor(p5.width / rez);
        h = p5.floor(p5.height / rez);
        let numberOfObstacles = 10;
        p5.frameRate(30);
        snake = new Snake(p5, w, h);
        obstacle = new Obstacle(p5, w, h);
        powerUp = new PowerUp(p5, 30, 30, 1, "red");
        for (let i = 0; i < numberOfObstacles; i++) {
          obstacles[i] = new Obstacle(p5, 2, 6, i * 4 + 2, 20);
        }
        // powerUp();

        
      };

      p5.draw = () => {
        p5.scale(rez);
        p5.background(0);

        //Border
        p5.push();
        p5.fill(0);
        p5.strokeWeight(0.5);
        p5.stroke("red");
        p5.rectMode(p5.CENTER);
        p5.rect((p5.width/2)/10, (p5.height/2)/10, 100, 100);
        p5.pop();

        for (var i = 0; i < obstacles.length; i++) {
          obstacles[i].show(p5);
        }
        snake.update();
        snake.show(p5, r);

        if (snake.eat(powerUp, p5)) {
          console.log('EAT')
          snake.grow()
          getPowerUp()
        }

        // if (snake.endGame(w, h)) {
        //   p5.background(255, 0, 0);
        //   p5.noLoop();
        // }

        powerUp.render(p5)
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
