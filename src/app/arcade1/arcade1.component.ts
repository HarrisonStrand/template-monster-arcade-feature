import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import Snake from './snake';
import Obstacle from './obstacle';
import PowerUp from "./powerUp";

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
    let topBorder: Array<any> = [];
    let rightBorderTop: Array<any> = [];
    let doorTrigger: Array<any> = [];
    let rightBorderBottom: Array<any> = [];
    let bottomBorder: Array<any> = [];
    let leftBorderTop: Array<any> = [];
    let leftBorderBottom: Array<any> = [];
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
        p5.pixelDensity(1);
        w = p5.floor(p5.width / rez);
        h = p5.floor(p5.height / rez);
        let numberOfObstacles = 6;
        p5.frameRate(30);
        snake = new Snake(p5, w, h);
        obstacle = new Obstacle(p5, 40, 40, 1, 4, '#a8ccd7CC');
        powerUp = new PowerUp(p5, 30, 30, 1, "red");
        
        //RANDOM INNER OBSTACLE LAYOUT
        for (let i = 0; i < numberOfObstacles; i++) {
          obstacles[i] = new Obstacle(p5, 10, i *10 +8, 0, 4, '#C2B280');
        }

        //OBSTACLE BORDER
        for (let i = 0; i < 50; i++) {
          topBorder[i] = new Obstacle(p5, i*2 + 1, 1, 0, 2, '#C2B280');
        }
        for (let i = 0; i < 23; i++) {
          rightBorderTop[i] = new Obstacle(p5, 99, i*2 + 1, 0, 2, '#C2B280');
        }
        for (let i = 0; i < 3; i++) {
          doorTrigger[i] = new Obstacle(p5, 101, i*2 + 47, 0, 2, 'blue');
        }
        for (let i = 0; i < 23; i++) {
          rightBorderBottom[i] = new Obstacle(p5, 99, i*2 + 53, 0, 2, '#C2B280');
        }
        for (let i = 0; i < 50; i++) {
          bottomBorder[i] = new Obstacle(p5, i*2 + 1, 99, 0, 2, '#C2B280');
        }
        for (let i = 0; i < 23; i++) {
          leftBorderTop[i] = new Obstacle(p5, 1, i*2 + 1, 0, 2, '#C2B280');
        }
        for (let i = 0; i < 23; i++) {
          leftBorderBottom[i] = new Obstacle(p5, 1, i*2 + 53, 0, 2, '#C2B280');
        }

      };

      p5.draw = () => {
        p5.scale(rez);
        p5.background(0);

        //Border
        p5.push();
        p5.fill(0);
        p5.strokeWeight(0.8);
        p5.stroke("red");
        p5.rectMode(p5.CENTER);
        p5.rect((p5.width/2)/10, (p5.height/2)/10, 100, 100);
        p5.pop();


        //LOAD PIXELS SLOWS DOWN FRAMERATE - TOO MUCH COMPUTED
        // p5.loadPixels();
        // for (var y = 0; y < p5.height; y++) {
        //   for( var x = 0; x < p5.width; x++) {
        //     var index = (x + y * p5.width) * 4;
        //       p5.pixels[index +0] = 0;
        //       p5.pixels[index +1] = 0;
        //       p5.pixels[index +2] = 255;
        //   }
        // }
        // p5.updatePixels();


        for (var i = 0; i < obstacles.length; i++) {
          obstacles[i].render(p5);
        }

        //OBSTACLE BORDER RENDER
        for (var i = 0; i < topBorder.length; i++) {
          p5.push();
          p5.strokeWeight(.2);
          p5.stroke(0);
          topBorder[i].render(p5);
          p5.pop();
        }
        for (var i = 0; i < rightBorderTop.length; i++) {
          p5.push();
          p5.strokeWeight(.2);
          p5.stroke(0);
          rightBorderTop[i].render(p5);
          p5.pop();
        }
        for (var i = 0; i < doorTrigger.length; i++) {
          p5.push();
          p5.strokeWeight(.2);
          p5.stroke(0);
          doorTrigger[i].render(p5);
          p5.pop();
        }
        for (var i = 0; i < rightBorderBottom.length; i++) {
          p5.push();
          p5.strokeWeight(.2);
          p5.stroke(0);
          rightBorderBottom[i].render(p5);
          p5.pop();
        }
        for (var i = 0; i < bottomBorder.length; i++) {
          p5.push();
          p5.strokeWeight(.2);
          p5.stroke(0);
          bottomBorder[i].render(p5);
          p5.pop();
        }
        for (var i = 0; i < leftBorderTop.length; i++) {
          p5.push();
          p5.strokeWeight(.2);
          p5.stroke(0);
          leftBorderTop[i].render(p5);
          p5.pop();
        }
        for (var i = 0; i < leftBorderBottom.length; i++) {
          p5.push();
          p5.strokeWeight(.2);
          p5.stroke(0);
          leftBorderBottom[i].render(p5);
          p5.pop();
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

        // array of all obstacles including border
        const allObstacles = obstacles.concat(topBorder, rightBorderTop, rightBorderBottom, bottomBorder, leftBorderBottom, leftBorderTop);
        for (var i = 0; i < allObstacles.length; i++) {
          if (snake.obstacleCollide(allObstacles[i], p5)) {
            console.log('COLLIDE')
            snake.setDir(0,0);
            snake.xdir = 0;
            snake.ydir = 0;
          }
        }
        
        for(var i = 0; i < doorTrigger.length; i++) {
          if (snake.obstacleCollide(doorTrigger[i], p5)) {
            console.log('DOOR TRIGGERED')
            //RESET SNAKE AND LAYOUT TO DEFAULT...
          }
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