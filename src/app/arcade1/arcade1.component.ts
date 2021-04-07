import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import Snake from './snake';
import Obstacle from './obstacle';
import PowerUp from "./powerUp";
import basicMap from './basicMap';

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
        let numberOfObstacles = 6;
        p5.frameRate(30);
        snake = new Snake(p5, w, h);
        obstacle = new Obstacle(p5, 40, 40, 1, 4, '#a8ccd7CC');
        powerUp = new PowerUp(p5, 30, 30, 1, "red");
        for (let i = 0; i < numberOfObstacles; i++) {
          obstacles[i] = new Obstacle(p5, 10, i *10 +4, 0, 4, '#C2B280');
        }
      };

      p5.draw = () => {
        p5.scale(rez);
        p5.background(0);
        // p5.loadPixels();
        // for (var i = 0; i < basicMap.layers[0].data.length; i++) {
        //   p5.pixels[i] = basicMap.layers[0].data[i];
        //   p5.pixels[i+1] = 255;
        // }
        // p5.updatePixels();

        //Border
        p5.push();
        p5.fill(0);
        p5.strokeWeight(0.5);
        p5.stroke("red");
        p5.rectMode(p5.CENTER);
        p5.rect((p5.width/2)/10, (p5.height/2)/10, 100, 100);
        p5.pop();

        for (var i = 0; i < obstacles.length; i++) {
          obstacles[i].render(p5);
        }
        snake.update();
        snake.show(p5, r);

        if (snake.eat(powerUp, p5)) {
          console.log('EAT')
          snake.grow()
          getPowerUp()
        }

        // single obstacle instance
        if (snake.obstacleCollide(obstacle, p5) && obstacle.pos.z === 0) {
            console.log('COLLIDE')
            snake.setDir(0,0);
            snake.xdir = 0;
            snake.ydir = 0;
          } else if (snake.obstacleCollide(obstacle, p5) && obstacle.pos.z > 0) {
            console.log('THROUGH')
          }

        // array of obstacles instance
        for (var i = 0; i < obstacles.length; i++) {
          if (snake.obstacleCollide(obstacles[i], p5)) {
            console.log('COLLIDE')
            snake.setDir(0,0);
            snake.xdir = 0;
            snake.ydir = 0;
          }

        // if (snake.borderCollide(p5, w, h)) {
        //   console.log('border hit!')
        //   snake.xdir = 0;
        //   snake.ydir = 0;
        // }


        }


        powerUp.render(p5)
        obstacle.render(p5)
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