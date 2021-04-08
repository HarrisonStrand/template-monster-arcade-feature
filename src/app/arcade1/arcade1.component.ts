import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import Snake from './snake';
import Obstacle from './obstacle';
import PowerUp from './powerUp';
import Venom from './venom';
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
    let move: boolean = false;
    let venom: any;
    let mVenom: Array<any> = [];
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

    // const collide = (obstacle: any, snake: any) => {
    //   const snakeHead = snake.body[snake.body.length -1]
    //   const obsDiameter = obstacle.r * 2

    //   if (snakeHead.x > (obstacle.pos.x - obsDiameter) && snakeHead.x < (obstacle.pos.x + obsDiameter) && snakeHead.y > (obstacle.pos.y - obsDiameter) && snakeHead.y < (obstacle.pos.y + obsDiameter)){
    //     snake.setDir(0,0)
    //     console.log(snake.xdir)
    //   } else {
    //     move = 1;
    //   }
    // }

    const collide = (obstacle: any, snake: any) => {
      let axisHit = {
        totalDist: false,
        x: 0,
        y: 0,
      };

      const end_of_array = snake.body.length - 1;
      const distx =
        (snake.body[end_of_array].x - obstacle.pos.x) *
        (snake.body[end_of_array].x - obstacle.pos.x);
      const disty =
        (snake.body[end_of_array].y - obstacle.pos.y) *
        (snake.body[end_of_array].y - obstacle.pos.y);

      const dist = distx + disty;

      if (
        distx >
        (obstacle.r + snake.body[end_of_array].r) *
          (obstacle.r + snake.body[end_of_array].r)
      ) {
        axisHit.x = distx;
      }
      if (distx <= obstacle.r * 2.5) {
        // radius size for snake
        axisHit.x = distx;
      }
      if (distx <= obstacle.r * 2.5 && obstacle.pos.z < 0) {
        axisHit.x = distx;
      }
      if (
        disty >
        (obstacle.r + snake.body[end_of_array].r) *
          (obstacle.r + snake.body[end_of_array].r)
      ) {
        axisHit.y = disty;
      }
      if (disty <= obstacle.r * 2.5) {
        // radius size for snake
        axisHit.y = disty;
      }
      if (disty <= obstacle.r * 2.5 && obstacle.pos.z < 0) {
        axisHit.y = disty;
      }
      if (
        dist >
        (obstacle.r + snake.body[end_of_array].r) *
          (obstacle.r + snake.body[end_of_array].r)
      ) {
        axisHit.totalDist = false;
      }
      if (dist <= obstacle.r * 2.5) {
        // radius size for snake
        axisHit.totalDist = true;
      }
      if (dist <= obstacle.r * 2.5 && obstacle.pos.z < 0) {
        axisHit.totalDist = false;
      }

      return axisHit;
    };
    //   if (dist > (obstacle.r + snake.body[end_of_array].r) * (obstacle.r + snake.body[end_of_array].r)) {
    //     return false;
    //   }
    //   if (dist <= obstacle.r * 2.5) { // radius size for snake
    //     return true;
    //   }
    //   if (dist <= obstacle.r * 2.5 && obstacle.pos.z < 0) {
    //     return false;
    //   }
    //   return false;
    // }

    const doorTriggerCollide = (obstacle: any, snake: any) => {
      const end_of_array = snake.body.length - 1;
      let dist =
        (snake.body[end_of_array].x - obstacle.pos.x) *
          (snake.body[end_of_array].x - obstacle.pos.x) +
        (snake.body[end_of_array].y - obstacle.pos.y) *
          (snake.body[end_of_array].y - obstacle.pos.y);
      if (
        dist >
        (obstacle.r + snake.body[end_of_array].r) *
          (obstacle.r + snake.body[end_of_array].r)
      ) {
        return false;
      }
      if (dist <= obstacle.r * 2.5) {
        // radius size for snake
        return true;
      }
      if (dist <= obstacle.r * 2.5 && obstacle.pos.z < 0) {
        return false;
      }
      return false;
    };

    const sketch = (p5: any) => {
      function getPowerUp() {
        let x = p5.floor(p5.random(w));
        let y = p5.floor(p5.random(h));

        powerUp = new PowerUp(p5, w, y, 1, 'red'); // removed random methods from x and y.
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
        powerUp = new PowerUp(p5, 30, 30, 1, 'red');

        //RANDOM INNER OBSTACLE LAYOUT
        for (let i = 0; i < numberOfObstacles; i++) {
          obstacles[i] = new Obstacle(p5, 10, i * 10 + 8, 0, 4, '#C2B280');
        }
        for (var k = 0; k < mVenom.length; k++) {
          mVenom[k].show(p5);
          mVenom[k].update(p5);
          // if(mVenom[k].offscreen()) {
          //   mVenom.splice(k, 1);
          //   break;
          // }
        }

        //OBSTACLE BORDER
        for (let i = 0; i < 50; i++) {
          topBorder[i] = new Obstacle(p5, i * 2 + 1, 1, 0, 2, '#C2B280');
        }
        for (let i = 0; i < 23; i++) {
          rightBorderTop[i] = new Obstacle(p5, 99, i * 2 + 1, 0, 2, '#C2B280');
        }
        for (let i = 0; i < 3; i++) {
          doorTrigger[i] = new Obstacle(p5, 101, i * 2 + 47, 0, 2, 'blue');
        }
        for (let i = 0; i < 23; i++) {
          rightBorderBottom[i] = new Obstacle(
            p5,
            99,
            i * 2 + 53,
            0,
            2,
            '#C2B280'
          );
        }
        for (let i = 0; i < 50; i++) {
          bottomBorder[i] = new Obstacle(p5, i * 2 + 1, 99, 0, 2, '#C2B280');
        }
        for (let i = 0; i < 23; i++) {
          leftBorderTop[i] = new Obstacle(p5, 1, i * 2 + 1, 0, 2, '#C2B280');
        }
        for (let i = 0; i < 23; i++) {
          leftBorderBottom[i] = new Obstacle(
            p5,
            1,
            i * 2 + 53,
            0,
            2,
            '#C2B280'
          );
        }
      };

      p5.draw = () => {
        p5.scale(rez);
        p5.background(0);

        //Border
        p5.push();
        p5.fill(0);
        p5.strokeWeight(0.8);
        p5.stroke('red');
        p5.rectMode(p5.CENTER);
        p5.rect(p5.width / 2 / 10, p5.height / 2 / 10, 100, 100);
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
          p5.strokeWeight(0.2);
          p5.stroke(0);
          topBorder[i].render(p5);
          p5.pop();
        }
        for (var i = 0; i < rightBorderTop.length; i++) {
          p5.push();
          p5.strokeWeight(0.2);
          p5.stroke(0);
          rightBorderTop[i].render(p5);
          p5.pop();
        }
        for (var i = 0; i < doorTrigger.length; i++) {
          p5.push();
          p5.strokeWeight(0.2);
          p5.stroke(0);
          doorTrigger[i].render(p5);
          p5.pop();
        }
        for (var i = 0; i < rightBorderBottom.length; i++) {
          p5.push();
          p5.strokeWeight(0.2);
          p5.stroke(0);
          rightBorderBottom[i].render(p5);
          p5.pop();
        }
        for (var i = 0; i < bottomBorder.length; i++) {
          p5.push();
          p5.strokeWeight(0.2);
          p5.stroke(0);
          bottomBorder[i].render(p5);
          p5.pop();
        }
        for (var i = 0; i < leftBorderTop.length; i++) {
          p5.push();
          p5.strokeWeight(0.2);
          p5.stroke(0);
          leftBorderTop[i].render(p5);
          p5.pop();
        }
        for (var i = 0; i < leftBorderBottom.length; i++) {
          p5.push();
          p5.strokeWeight(0.2);
          p5.stroke(0);
          leftBorderBottom[i].render(p5);
          p5.pop();
        }

        for (let i = 0; i < obstacles.length; i++) {
          
          // if (collide(obstacles[i], snake).totalDist) {
            while(collide(obstacles[i], snake).totalDist) {
              console.log(collide(obstacles[i], snake).x, collide(obstacles[i], snake).y)
              if (snake.xdir > 0) {
                snake.body[snake.body.length -1].x -= .2;
              } else if (snake.xdir < 0) {
                snake.body[snake.body.length -1].x += .2;
              } else if (snake.ydir > 0) {
                snake.body[snake.body.length -1].y -= .2;
              } else if (snake.ydir < 0) {
                snake.body[snake.body.length -1].y += .2;
              }
              move = false;
            }
          // }
        }

        snake.show(p5, r);
        if (move) {
          snake.update();

        }

        if (snake.eat(powerUp, p5)) {
          snake.grow();
          getPowerUp();
        }

        // single obstacle instance
        // if (snake.obstacleCollide(obstacle, p5) && obstacle.pos.z === 0) {
        //     console.log('COLLIDE')
        //     snake.setDir(0,0);
        //     snake.xdir = 0;
        //     snake.ydir = 0;
        //   } else if (snake.obstacleCollide(obstacle, p5) && obstacle.pos.z > 0) {
        //     console.log('THROUGH')
        //   }

        // array of all obstacles including border
        // const allObstacles = obstacles.concat(topBorder, rightBorderTop, rightBorderBottom, bottomBorder, leftBorderBottom, leftBorderTop);
        // for (var i = 0; i < allObstacles.length; i++) {
        //   if (snake.obstacleCollide(allObstacles[i], p5)) {
        //     console.log('COLLIDE')
        //     snake.xdir = 0;
        //     snake.ydir = 0;
        //   }
        // }

        // Venom rendering
        for (var k = 0; k < mVenom.length; k++) {
          mVenom[k].show(p5);
          // mVenom[k].update(p5);
          if (mVenom[k].dissipate()) {
            mVenom.splice(k, 1);
            break;
          }
        }

        // if (snake.borderCollide(p5, w, h)) {
        //   console.log('border hit!')
        //   snake.xdir = 0;
        //   snake.ydir = 0;
        // }

        powerUp.render(p5);
        obstacle.render(p5);

        // for(var i = 0; i < doorTrigger.length; i++) {
        //   if (snake.obstacleCollide(doorTrigger[i], p5)) {
        //     console.log('DOOR TRIGGERED')
        //     //RESET SNAKE AND LAYOUT TO DEFAULT...
        //   }
        // }
        powerUp.render(p5);
        obstacle.render(p5);
      };
      p5.keyPressed = () => {
        if (p5.key == ' ') {
          mVenom.push(new Venom(p5, 10, 40));
          console.log(mVenom);
        } else if (p5.keyCode == p5.LEFT_ARROW) {
          move = true;
          snake.setDir(-1, 0);
        } else if (p5.keyCode === p5.RIGHT_ARROW) {
          move = true;
          snake.setDir(1, 0);
        } else if (p5.keyCode == p5.DOWN_ARROW) {
          move = true;
          snake.setDir(0, 1);
        } else if (p5.keyCode === p5.UP_ARROW) {
          move = true;
          snake.setDir(0, -1);
        }
      };
    };
    let canvas = new p5(sketch);
  }
}
