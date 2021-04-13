// snake tail resets the snake
// enemies that follow?
// food and powerups that do different things??

import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import Snake from './snake';
import Obstacle from './obstacle';
import Point from './points';
import PowerUp from './powerUp';
import Venom from './venom';

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
    let points: Array<any> = [];
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
    let newObstacle: any;
    let point: any;
    let rez = 10;
    let r = 1;
    let w: any;
    let h: any;
    let powerUp: any;
    let powerUps: Array<any> = [];
    let scoreCount: number = 0;
    let numberOfObstacles: number = 20;
    let sizeOfObstacles: number = 8;
    let numberOfPoints: number = 100;
    let pointSpread: number = 3; // EVEN NUMBERS ONLY! HIGHER IS MORE SPREAD AND LESS POINTS
    let numberOfPowerUps: number = 4;

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

    const sketch = (p5: any) => {

      function getPowerUp(powerUps: any, value: any) {
        var index = powerUps.indexOf(value);
        if (index > -1) {
          powerUps.splice(index, 1);
        }
          let num = 9;
          let limit = 96;
          const random = p5.random() * limit;
          const res = p5.round( random / num ) * num;
        let x = res;
        let y = res;
        powerUp = new PowerUp(p5, x, y, 1, 'red'); // removed random methods from x and y.
        for (let i = 0; i < obstacles.length; i++) {
          if (
            powerUp.x == obstacles[i].x + 5 &&
            powerUp.y == obstacles[i].y + 5
          ) {
            getPowerUp(powerUps, powerUps[i]);
          }
        }
      }

      function getPoint(points: any, value: any) {
          var index = points.indexOf(value);
          if (index > -1) {
            points.splice(index, 1);
          }
          scoreCount += 1;
          console.log(scoreCount);
      }

      p5.preload = () => {};

      p5.setup = () => {
        p5.createCanvas(1000, 1000);
        p5.pixelDensity(1);
        w = p5.floor(p5.width / rez);
        h = p5.floor(p5.height / rez);
        p5.frameRate(30);
        snake = new Snake(p5, w, h);
        obstacle = new Obstacle(p5, 90, 55, 1, 4, '#a8ccd7CC'); // glass square to go through
        // powerUp = new PowerUp(p5, p5.random(3, 97), p5.random(3, 97), 1, 'red');

        //RANDOM INNER OBSTACLE LAYOUT
        while (obstacles.length < numberOfObstacles) {
          newObstacle = new Obstacle(
            p5,
            p5.random(3, 97),
            p5.random(3, 97),
            0,
            sizeOfObstacles,
            '#C2B280'
          );
          var overlapping = false;
          var blocking = false;
          for (let j = 0; j < obstacles.length; j++) {
            var other = obstacles[j];
            var d = p5.dist(newObstacle.x, newObstacle.y, other.x, other.y);
            if (d < newObstacle.r + other.r) {
              overlapping = true;
              break;
            }
            if ((newObstacle.x < 10 || newObstacle.x > 90) && (newObstacle.y > 40 && newObstacle.y < 60) ) {
              blocking = true;
            }
          }
          if (!overlapping && !blocking) {
            obstacles.push(newObstacle);
          }
        }


        // //POWERUP NO OVERLAP WITH OBJECTS AND POINTS
        while (powerUps.length < numberOfPowerUps) {
          powerUp = new PowerUp(p5, p5.random(3, 97), p5.random(3, 97), 1, 'red');
              var overlapping = false;
              for (let j = 0; j < obstacles.length; j++) {
                var other = obstacles[j];
                var d = p5.dist(powerUp.pos.x, powerUp.pos.y, other.pos.x, other.pos.y);
                if (d < powerUp.r + other.r) {
                  overlapping = true;
                  break;
                }
              }
              for (let j = 0; j < points.length; j++) {
                var other = points[j];
                var d = p5.dist(powerUp.pos.x, powerUp.pos.y, other.pos.x, other.pos.y);
                if (d < powerUp.r + other.r) {
                  overlapping = true;
                  break;
                }
              }
              if (!overlapping) {
                powerUps.push(powerUp)
              }
        }


        //GRID PACMAN POINT GENERATION
        while (points.length < numberOfPoints) {
          for (var a = 4; a < numberOfPoints; a += pointSpread) {
            for (var b = 4; b < numberOfPoints; b += pointSpread) {
              point = new Point(
                p5,
                a,
                b,
                1,
                'white'
              );
              var overlapping = false;
              for (let j = 0; j < obstacles.length; j++) {
                var other = obstacles[j];
                var d = p5.dist(point.x, point.y, other.x, other.y);
                if (d < point.r + other.r) {
                  overlapping = true;
                  break;
                }
              }
              for (let j = 0; j < points.length; j++) {
                var other = points[j];
                var d = p5.dist(point.x, point.y, other.x, other.y);
                if (d < point.r + other.r) {
                  overlapping = true;
                  break;
                }
              }
              if (!overlapping) {
                points.push(point);
              }
            }
          }
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

        //Red Border
        p5.push();
        p5.fill(0);
        p5.strokeWeight(0.8);
        p5.stroke('red');
        p5.rectMode(p5.CENTER);
        p5.rect(p5.width / 2 / 10, p5.height / 2 / 10, 100, 100);
        p5.pop();

        
        for (var i = 0; i < obstacles.length; i++) {
          obstacles[i].render(p5);
        }
        
        for (var i = 1; i < points.length; i++) {
          points[i].render(p5);
        }

        // for (let i = 90; i < numberOfPoints; i += 30 ){
        //   powerUps[i].render(p5);
        // }

        // powerUp.render(p5);
        for (var i = 1; i < powerUps.length; i++) {
          powerUps[i].render(p5);
        }
        
        obstacle.render(p5); //glass

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

        const borderObstacles = topBorder.concat(
          rightBorderTop,
          rightBorderBottom,
          bottomBorder,
          leftBorderBottom,
          leftBorderTop
        );

        for (let i = 0; i < borderObstacles.length; i++) {
          if (collide(borderObstacles[i], snake).totalDist) {
            while (collide(borderObstacles[i], snake).totalDist) {
            if (snake.xdir > 0) {
              snake.body[snake.body.length - 1].x -= 0.2;
            } else if (snake.xdir < 0) {
              snake.body[snake.body.length - 1].x += 0.2;
            } else if (snake.ydir > 0) {
              snake.body[snake.body.length - 1].y -= 0.2;
            } else if (snake.ydir < 0) {
              snake.body[snake.body.length - 1].y += 0.2;
            }
            move = false;
            }
          }
        }

        for (let i = 0; i < obstacles.length; i++) {
          if (collide(obstacles[i], snake).totalDist) {
            scoreCount = 0;
            p5.setup();
          }
        }

        snake.show(p5, r);
        if (move) {
          snake.update();
        }

        for (let i = 0; i < powerUps.length; i++) {
          if (snake.eatPowerUp(powerUps[i], p5)) {
            snake.grow();
            getPowerUp(powerUps, powerUps[i]);
          }
        }

        for (let i = 0; i < points.length; i++) {
          if(snake.eatPoint(points[i], p5)) {
            getPoint(points, points[i]);
          }
        }

        // Venom rendering
        for (var k = 0; k < mVenom.length; k++) {
          mVenom[k].show(p5);
          // mVenom[k].update(p5);
          if (mVenom[k].dissipate()) {
            mVenom.splice(k, 1);
            break;
          }
        }

        for (var i = 0; i < doorTrigger.length; i++) {
          if (collide(doorTrigger[i], snake).totalDist) {
            obstacles.length = 0;
            points.length = 0;
            console.log('DOOR TRIGGERED');
            numberOfObstacles += 5;
            p5.setup();
            //RESET SNAKE AND LAYOUT TO DEFAULT...
          }
        }

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
