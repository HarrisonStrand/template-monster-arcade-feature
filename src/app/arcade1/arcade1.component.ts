// snake tail resets the snake
// Random enemy objects that move across the map?
// food and powerups that do different things??
// SNAKE LIVES AS ARRAY OF IMAGES - IF DEATH, SPLICE ONE SNAKE OUT OF THE ARRAY
// stroke color of obstacles are darker as they go in to appear like a hole
// snake flashes red color with a time wait before reset when hitting obstacles

import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import Snake from './snake';
import Obstacle from './obstacle';
import Border from './border';
import Point from './points';
import PowerUp from './powerUp';
import Key from './key';
import Venom from './venom';

@Component({
  selector: 'app-arcade1',
  templateUrl: './arcade1.component.html',
  styleUrls: ['./arcade1.component.css'],
})
export class Arcade1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const obstacleColor1 = '#0010CF';
    const borderColor1 = '#aaa9ad';
    const doorTriggerColor = 'blue';
    let snake: any;
    let move: boolean = false;
    let points: Array<any> = [];
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
    let point: any;
    let rez = 10;
    let r = 1;
    let w: any;
    let h: any;
    let powerUp: any;
    let powerUps: Array<any> = [];
    let key: any;
    let keys: Array<any> = [];
    let scoreCount: number = 0;
    let numberOfObstacles: number = 10;
    let sizeOfObstacles: number = 8; // NO HIGHER THAN 8!! MAYBE DO RANDOM??
    let numberOfPoints: number = 100;
    let pointSpread: number = 4; // EVEN NUMBERS ONLY! HIGHER IS MORE SPREAD AND LESS POINTS
    let numberOfPowerUps: number = 4; // ALWAYS ONE MORE THAN YOU WANT - BUG TO FIX
    let numberOfKeys: number = 2; // ALWAYS ONE MORE THAN YOU WANT - BUG TO FIX
    let keysToCollect: number = 1;
    let mainFont: any;
    let levelIndicator: number = 1;
    let livesLeft: number = 3;

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
      if (distx <= obstacle.r * 1.5) {
        // radius size for snake
        axisHit.x = distx;
      }
      if (distx <= obstacle.r * 1.5 && obstacle.pos.z < 0) {
        axisHit.x = distx;
      }
      if (
        disty >
        (obstacle.r + snake.body[end_of_array].r) *
          (obstacle.r + snake.body[end_of_array].r)
      ) {
        axisHit.y = disty;
      }
      if (disty <= obstacle.r * 1.5) {
        // radius size for snake
        axisHit.y = disty;
      }
      if (disty <= obstacle.r * 1.5 && obstacle.pos.z < 0) {
        axisHit.y = disty;
      }
      if (
        dist >
        (obstacle.r + snake.body[end_of_array].r) *
          (obstacle.r + snake.body[end_of_array].r)
      ) {
        axisHit.totalDist = false;
      }
      if (dist <= obstacle.r * 1.5) {
        // radius size for snake
        axisHit.totalDist = true;
      }
      if (dist <= obstacle.r * 1.5 && obstacle.pos.z < 0) {
        axisHit.totalDist = false;
      }
      return axisHit;
    };

    const sketch = (p5: any) => {
      //GET POWERUP
      function getPowerUp(powerUps: any, value: any) {
        var index = powerUps.indexOf(value);
        if (index > -1) {
          powerUps.splice(index, 1);
        }
        let num = 9;
        let limit = 96;
        const random = p5.random() * limit;
        const res = p5.round(random / num) * num;
        let x = res;
        let y = res;
        for (let i = 0; i < obstacles.length; i++) {
          if (
            powerUp.x == obstacles[i].x + 5 &&
            powerUp.y == obstacles[i].y + 5
          ) {
            getPowerUp(powerUps, powerUps[i]);
          }
        }
      }

      //GET KEY
      function getKey(keys: any, value: any) {
        var index = keys.indexOf(value);
        if (index > -1) {
          keys.splice(index, 1);
        }
        let num = 9;
        let limit = 96;
        const random = p5.random() * limit;
        const res = p5.round(random / num) * num;
        let x = res;
        let y = res;
        key = new Key(
          p5,
          p5.random(3, 97),
          p5.random(3, 97),
          2
          );
        keysToCollect -= 1;
        keys.push(key)
        for (let i = 0; i < obstacles.length; i++) {
          if (
            key.x == obstacles[i].x + 5 &&
            key.y == obstacles[i].y + 5
          ) {
            getKey(keys, keys[i]);
          }
        }
      }

      //GET POINT
      function getPoint(points: any, value: any) {
        var index = points.indexOf(value);
        if (index > -1) {
          points.splice(index, 1);
        }
        scoreCount += 100;
      }

      p5.preload = () => {
        mainFont = p5.loadFont('../../assets/fonts/Sabo-Filled.otf');
      };

      //SETUP//
      //////////////////////////////////////////////////////////////////////////////////////////////

      p5.setup = () => {
        p5.createCanvas(1400, 1000);
        p5.pixelDensity(1);
        w = p5.floor(p5.width / rez);
        h = p5.floor(p5.height / rez);
        p5.frameRate(30);
        snake = new Snake(p5, w, h);
        key = new Key(
          p5,
          p5.random(3, 97),
          p5.random(3, 97),
          2
        );
        obstacle = new Obstacle(p5, 90, 55, 1, 4, '#a8ccd7CC'); // glass square to go through

        //RANDOM INNER OBSTACLE LAYOUT
        while (obstacles.length < numberOfObstacles) {
          obstacle = new Obstacle(
            p5,
            p5.random(3, 96),
            p5.random(3, 96),
            0,
            sizeOfObstacles,
            obstacleColor1
          );
          var overlapping = false;
          var blocking = false;
          for (let j = 0; j < obstacles.length; j++) {
            var other = obstacles[j];
            var d = p5.dist(obstacle.x, obstacle.y, other.x, other.y);
            if (d < obstacle.r + other.r) {
              overlapping = true;
              break;
            }
            if (
              (obstacle.x < 10 || obstacle.x > 90) &&
              obstacle.y > 30 &&
              obstacle.y < 70
            ) {
              blocking = true;
            }
          }
          if (!overlapping && !blocking) {
            obstacles.push(obstacle);
          }
        }

        // //POWERUP NO OVERLAP WITH OBJECTS AND POINTS
        while (powerUps.length < numberOfPowerUps) {
            powerUp = new PowerUp(
              p5,
              p5.random(3, 97),
              p5.random(3, 97),
              2,
              'rgb(255, 0, 0)'
            );
          var overlapping = false;
          for (let j = 0; j < obstacles.length; j++) {
            var other = obstacles[j];
            var d = p5.dist(powerUp.x, powerUp.y, other.x, other.y);
            if (d < powerUp.r * 4 + other.r) {
              overlapping = true;
              break;
            }
          }
          for (let j = 0; j < points.length; j++) {
            var other = points[j];
            var d = p5.dist(powerUp.x, powerUp.y, other.x, other.y);
            if (d < powerUp.r + other.r) {
              overlapping = true;
              break;
            }
          }
          if (!overlapping) {
            powerUps.push(powerUp);
          }
        }

        // //KEYS NO OVERLAP WITH OBJECTS AND POINTS
        while (keys.length < numberOfKeys) {
            key = new Key(
              p5,
              p5.random(3, 97),
              p5.random(3, 97),
              2
            );
          var overlapping = false;
          for (let j = 0; j < obstacles.length; j++) {
            var other = obstacles[j];
            var d = p5.dist(key.x, key.y, other.x, other.y);
            if (d < key.r * 4 + other.r) {
              overlapping = true;
              break;
            }
          }
          for (let j = 0; j < points.length; j++) {
            var other = points[j];
            var d = p5.dist(key.x, key.y, other.x, other.y);
            if (d < key.r + other.r) {
              overlapping = true;
              break;
            }
          }
          for (let j = 0; j < powerUps.length; j++) {
            var other = powerUps[j];
            var d = p5.dist(key.x, key.y, other.x, other.y);
            if (d < key.r + other.r) {
              overlapping = true;
              break;
            }
          }
          if (!overlapping) {
            keys.push(key);
          }
        }

        //GRID PACMAN POINT GENERATION
        while (points.length < numberOfPoints) {
          for (var a = 4; a < numberOfPoints; a += pointSpread) {
            for (var b = 4; b < numberOfPoints; b += pointSpread) {
              point = new Point(p5, a, b, 1, 'white');
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

        //BORDER INITIALIZE
        for (let i = 0; i < 50; i++) {
          topBorder[i] = new Border(p5, i * 2 + 1, 1, 0, 2, borderColor1);
        }
        for (let i = 0; i < 23; i++) {
          rightBorderTop[i] = new Border(p5, 99, i * 2 + 1, 0, 2, borderColor1);
        }
        for (let i = 0; i < 3; i++) {
          doorTrigger[i] = new Border(
            p5,
            99,
            i * 2 + 47,
            0,
            2,
            doorTriggerColor
          );
        }
        for (let i = 0; i < 23; i++) {
          rightBorderBottom[i] = new Border(
            p5,
            99,
            i * 2 + 53,
            0,
            2,
            borderColor1
          );
        }
        for (let i = 0; i < 50; i++) {
          bottomBorder[i] = new Border(p5, i * 2 + 1, 99, 0, 2, borderColor1);
        }
        for (let i = 0; i < 23; i++) {
          leftBorderTop[i] = new Border(p5, 1, i * 2 + 1, 0, 2, borderColor1);
        }
        for (let i = 0; i < 23; i++) {
          leftBorderBottom[i] = new Border(
            p5,
            1,
            i * 2 + 53,
            0,
            2,
            borderColor1
          );
        }
      };

      //DRAW//
      //////////////////////////////////////////////////////////////////////////////////////////////

      p5.draw = () => {
        p5.scale(rez);
        p5.background(0);

        //Red Border
        // p5.push();
        // p5.fill(0);
        // p5.strokeWeight(0.5);
        // p5.stroke('red');
        // // p5.rectMode(p5.CENTER);
        // p5.rect(p5.width / 2.8 / 10, p5.height / 2 / 10, 99, 100);
        // p5.pop();

        //OBSTACLES RENDER
        for (var i = 0; i < obstacles.length; i++) {
          obstacles[i].render(p5);
        }

        //POINTS RENDER
        for (var i = 1; i < points.length; i++) {
          points[i].render(p5);
        }

        //POWERUPS RENDER
        for (var i = 1; i < powerUps.length; i++) {
          powerUps[i].render(p5);
        }
        
        for (var i = 1; i < keys.length; i++) {
          //KEYS RENDER
          if (keysToCollect >= 1) {
            keys[i].render(p5);
          }
        }

        // obstacle.render(p5); //glass

        //SCORE TEXT RENDERING
        p5.push();
        p5.textFont(mainFont);
        p5.textSize(8);
        p5.fill(100, 0, 255);
        p5.stroke(255);
        p5.strokeWeight(p5.random(0.1, 0.15));
        p5.text('Score:', 104, 10);
        p5.pop();

        //SCORE NUMBER RENDERING
        p5.push();
        p5.textFont(mainFont);
        p5.textSize(5);
        p5.fill(100, 0, 255);
        p5.stroke(255);
        p5.strokeWeight(p5.random(0.1, 0.15));
        p5.text(scoreCount, 104, 15);
        p5.pop();

        //LIVES LEFT TEXT RENDERING
        if (livesLeft >= 0 || p5.key == 'y') {
          p5.push();
          p5.textFont(mainFont);
          p5.textSize(8);
          p5.fill(100, 0, 255);
          p5.stroke(255);
          p5.strokeWeight(p5.random(0.1, 0.15));
          p5.text('Lives:' + livesLeft, 103, 25);
          p5.pop();
        } else {

          //GAME
          p5.push();
          p5.textFont(mainFont);
          p5.textSize(8);
          p5.fill(255, 0, 0);
          p5.stroke(255);
          p5.strokeWeight(p5.random(0.1, 0.15));
          p5.text('GAME', 108, 45);
          p5.pop();
          
          //OVER
          p5.push();
          p5.textFont(mainFont);
          p5.textSize(8);
          p5.fill(255, 0, 0);
          p5.stroke(255);
          p5.strokeWeight(p5.random(0.1, 0.15));
          p5.text('OVER', 108, 55);
          p5.pop();

          //PRESS Y TO CONTINUE
          p5.push();
          p5.textFont(mainFont);
          p5.textSize(2);
          p5.fill(255, 0, 0);
          p5.stroke(255);
          p5.strokeWeight(p5.random(0.1, 0.15));
          p5.text('press y to continue', 107, 60);
          p5.pop();
        }
        
        //LEGEND
        p5.push();
        p5.textFont(mainFont);
        p5.textSize(5);
        p5.fill(200);
        p5.stroke(255);
        p5.strokeWeight(p5.random(0.1, 0.15));
        p5.text('legend:', 108, 35);
        p5.pop();

        ////POWERUP////

        //shadow
        p5.push();
        p5.fill('rgba(255, 0, 0, .3)');
        p5.stroke('rgba(255, 0, 0, .3)')
        p5.strokeWeight(p5.random(0, 2));
        p5.rectMode(p5.CENTER);
        p5.translate(109, 39);
        p5.ellipse(0, 0, 3, 3);
        p5.pop();

        //main
        p5.push();
        p5.fill('red');
        p5.rectMode(p5.CENTER);
        p5.translate(109, 39);
        p5.ellipse(0, 0, 3, 3);
        p5.pop();

        //P TEXT
        p5.push();
        p5.fill('white');
        p5.textSize(2);
        p5.text('P', 109 -.6, 39 +.6);
        p5.pop();
        
        // TEXT
        p5.push();
        p5.textFont(mainFont);
        p5.textSize(3);
        p5.fill(200);
        p5.stroke(255);
        p5.strokeWeight(p5.random(0.1, 0.15));
        p5.text(' - powerup', 111, 40);
        p5.pop();

        ////KEY////

        //shadow
        p5.push();
        p5.fill('rgba(218,165,32, .3)');
        p5.stroke('rgba(218,165,32, .3)')
        p5.strokeWeight(p5.random(0, 2));
        p5.rectMode(p5.CENTER);
        p5.translate(109, 45);
        p5.ellipse(0, 0, 3, 3);
        p5.pop();

        //main
        p5.push();
        p5.fill('rgb(218,165,32)');
        p5.rectMode(p5.CENTER);
        p5.translate(109, 45);
        p5.ellipse(0, 0, 3, 3);
        p5.pop();

        //K TEXT
        p5.push();
        p5.fill('black');
        p5.textSize(2);
        p5.text('K', 109 -.6, 45 +.6);
        p5.pop();

        // TEXT
        p5.push();
        p5.textFont(mainFont);
        p5.textSize(3);
        p5.fill(200);
        p5.stroke(255);
        p5.strokeWeight(p5.random(0.1, 0.15));
        p5.text(' - key', 111, 46);
        p5.pop();

        ////POINTS////

        p5.push();
        p5.fill('white');
        p5.rectMode(p5.CENTER);
        p5.translate(109, 50);
        p5.ellipse(p5.random(0, .07), 0, 2, 2);
        p5.pop();

        // TEXT
        p5.push();
        p5.textFont(mainFont);
        p5.textSize(3);
        p5.fill(200);
        p5.stroke(255);
        p5.strokeWeight(p5.random(0.1, 0.15));
        p5.text(' - +100 Points', 111, 51);
        p5.pop();

        //KEYS REMAINING RENDERING
        p5.push();
        p5.textFont(mainFont);
        p5.textSize(3);
        p5.fill(100, 0, 255);
        p5.stroke(255);
        p5.strokeWeight(p5.random(0.07, 0.1));
        p5.text('Keys Remaining:' + keysToCollect, 105, 96);
        p5.pop();

        //LEVEL INDICATOR RENDERING
        p5.push();
        p5.textFont(mainFont);
        p5.textSize(8);
        p5.fill(100, 0, 255);
        p5.stroke(255);
        p5.strokeWeight(p5.random(0.1, 0.15));
        p5.text('Level:' + levelIndicator, 103, 90);
        p5.pop();

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
          if (keysToCollect > 0) {
            p5.push();
            p5.strokeWeight(0.2);
            p5.stroke(0);
            doorTrigger[i].render(p5);
            p5.pop();
          }
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
            if (livesLeft >= 0) {
              p5.setup();
              livesLeft -= 1;
            } else {
              scoreCount = 0;
              p5.setup();
            }
          }
        }

        if (livesLeft >= 0) {
          snake.show(p5, r);
          if (move) {
            p5.push();
            p5.strokeWeight(p5.random(0.5, 0.75));
            p5.pop();
            snake.update();
          }
        }

        for (let i = 0; i < powerUps.length; i++) {
          if (snake.eatPowerUp(powerUps[i], p5)) {
            snake.grow();
            getPowerUp(powerUps, powerUps[i]);
          }
        }

        for (let i = 0; i < keys.length; i++) {
          if (snake.eatKey(keys[i], p5)) {
            getKey(keys, keys[i]);
            console.log(keys)
          }
        }

        for (let i = 0; i < points.length; i++) {
          if (snake.eatPoint(points[i], p5)) {
            getPoint(points, points[i]);
          }
        }

        // Venom rendering
        // for (var k = 0; k < mVenom.length; k++) {
        //   mVenom[k].show(p5);
        //   // mVenom[k].update(p5);
        //   if (mVenom[k].dissipate()) {
        //     mVenom.splice(k, 1);
        //     break;
        //   }
        // }

        for (var i = mVenom.length - 1; i >= 0; i--) {
          mVenom[i].show(p5);
          if (snake.dir == 'RIGHT') {
            //venom velocity +1 on x
          } else if (snake.dir == 'LEFT') {
            //venom velocity -1 on x
          } else if (snake.dir == 'DOWN') {
            //venom velocity +1 on y
          } else if (snake.dir == 'UP') {
            //venom velocity -1 on y
          }
          // mVenom[i].update();
        }

        for (var i = 0; i < doorTrigger.length; i++) {
          if (collide(doorTrigger[i], snake).totalDist && keysToCollect <= 0) {
            obstacles.length = 0;
            points.length = 0;
            numberOfObstacles += 5;
            p5.setup();
            levelIndicator += 1;
            for (var i = 1; i <= levelIndicator; i++) {
              keysToCollect ++;
            }
            //RESET SNAKE AND LAYOUT TO DEFAULT...
          } else if (collide(doorTrigger[i], snake).totalDist) {
            while (collide(doorTrigger[i], snake).totalDist) {
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
      };

      p5.keyPressed = () => {
        if (p5.key == ' ') {
          mVenom.push(
            new Venom(p5, snake.body[0].x, snake.body[0].y, 1, snake.dir)
          );
          console.log(mVenom);
          // mVenom.push(new Venom(p5, 40, 40));
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
        } else if (p5.key == 'y' && livesLeft < 0) {
          numberOfKeys = 2;
          livesLeft = 3;
          obstacles.length = 0;
          points.length = 0;
          p5.setup();
        }
      };
    };
    let canvas = new p5(sketch);
  }
}
