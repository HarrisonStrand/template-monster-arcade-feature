// snake tail resets the snake
// Random enemy objects that move across the map?
// food and powerups that do different things??
// SNAKE LIVES AS ARRAY OF IMAGES - IF DEATH, SPLICE ONE SNAKE OUT OF THE ARRAY
// snake flashes red color with a time wait before reset when hitting obstacles - indicating death
// fix overlapping bug for keys, powerups, and obstacles when next level is triggered

// powerups render on level 1!
// create set new room function
// total reset function


//lengthen snake
//refactor?

import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import Snake from './snake';
import Obstacle from './obstacle';
import Border from './border';
import Point from './points';
import PowerUp from './powerUp';
import Key from './key';
import Venom from './venom';
import Hud from './hud'
import { drawMenu } from "./menu"
import { collide, getPowerUp, getKey } from "./utilities"

@Component({
  selector: 'app-arcade1',
  templateUrl: './arcade1.component.html',
  styleUrls: ['./arcade1.component.css'],
})
export class Arcade1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {

    const borderColor1 = '#aaa9ad';
    const doorTriggerColor = 'blue';
    const mainTextFillColor = '#4E0DFF';
    let snake: any;
    let move: boolean = false;
    let mVenom: Array<any> = [];
    let obstacles: Array<any> = [];
    let hud: any;
    // turn into border object
    let topBorder: Array<any> = [];
    let rightBorderTop: Array<any> = [];
    let rightBorderBottom: Array<any> = [];
    let bottomBorder: Array<any> = [];
    let leftBorderTop: Array<any> = [];
    let leftBorderBottom: Array<any> = [];
    //
    let doorTrigger: Array<any> = [];
    let obstacle: any;
    let point: any;
    let rez = 10;
    let w: any;
    let h: any;
    let powerUp: any;
    let menuPowerUp: any;
    let powerUps: Array<any> = [];
    let menuPowerUps: Array<any> = [];
    let menu: boolean = true;
    let key: any;
    let keys: Array<any> = [];
    let scoreCount: number = 0;
    let numberOfObstacles: number = 20;
    let sizeOfObstacles: number = 8; // NO HIGHER THAN 8!! MAYBE DO RANDOM??
    let points: Array<any> = [];
    let numberOfPoints: number = 100;
    let pointSpread: number = 4; // EVEN NUMBERS ONLY! HIGHER IS MORE SPREAD AND LESS POINTS
    let numberOfPowerUps: number = 3;
    let numberOfKeys: number = 2;
    let keysToCollect: number = 1;
    let mainFont: any;
    let levelIndicator: number = 1;
    let livesLeft: number = 3;


    const sketch = (p5: any) => {
      //GET POWERUP
      // function getPowerUp(powerUps: any, value: any) {
      //   var index = powerUps.indexOf(value);
      //   if (index > -1) {
      //     powerUps.splice(index, 1);
      //   }
      //   let num = 9;
      //   let limit = 96;
      //   const random = p5.random() * limit;
      //   const res = p5.round(random / num) * num;
      //   let x = res;
      //   let y = res;
      //   for (let i = 0; i < obstacles.length; i++) {
      //     if (
      //       p5.floor(powerUp.x) == p5.floor(obstacles[i].x + 5) &&
      //       p5.floor(powerUp.y) == p5.floor(obstacles[i].y + 5) // DOES NOT WORK!!!
      //     ) {
      //       getPowerUp(powerUps, powerUps[i]);
      //     }
      //   }
      // }

      function getMenuPowerUp(menuPowerUps: any, value: any) {
        var index = menuPowerUps.indexOf(value);
        if (index > -1) {
          menuPowerUps.splice(index, 1);
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

      const snakeReset = (p5: any) => {
        snake = new Snake(p5, w, h);
      }

      const reset = (p5: any) => {
        p5.createCanvas(1400, 1000);
        p5.pixelDensity(1);
        w = p5.floor(p5.width / rez);
        h = p5.floor(p5.height / rez);
        p5.frameRate(30);
        snake = new Snake(p5, w, h);
        key = new Key(p5, p5.random(3, 97), p5.random(3, 97), 2);
        obstacle = new Obstacle(p5, 90, 55, 1, 4); // glass square to go through
        hud = new Hud(mainFont, mainTextFillColor)

        obstacles = []
        keys = []
        powerUps = []
        points = []
        

        //RANDOM INNER OBSTACLE LAYOUT
        while (obstacles.length < numberOfObstacles) {
          obstacle = new Obstacle(
            p5,
            p5.random(3, 96),
            p5.random(3, 96),
            0,
            sizeOfObstacles
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

        console.log(menu);
        // //POWERUP NO OVERLAP WITH OBJECTS AND POINTS
        while (powerUps.length < numberOfPowerUps && !menu) {
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
          for (let j = 0; j < powerUps.length; j++) {
            var other = powerUps[j];
            var d = p5.dist(powerUp.x, powerUp.y, other.x, other.y);
            if (d < powerUp.r + other.r) {
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
          key = new Key(p5, p5.random(3, 97), p5.random(3, 97), 2);
          var overlapping = false;
          for (let j = 0; j < obstacles.length; j++) {
            var other = obstacles[j];
            var d = p5.dist(key.x, key.y, other.x, other.y);
            if (d < key.r + other.r) {
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

        menuPowerUp = new PowerUp(p5, 51, 49, 2, 'red');
        menuPowerUps.push(menuPowerUp);

      }

      p5.setup = () => {
        reset(p5)
      };

      p5.draw = () => {
        p5.scale(rez);
        p5.background(0);
        if (menu) {
          drawMenu(p5, mainFont);
          snake.demo();
          snake.update();
          snake.show(p5);
          for (let i = 0; i < menuPowerUps.length; i++) {
            menuPowerUps[i].render(p5);
            if (snake.eatPowerUp(menuPowerUps[i], p5)) {
              snake.grow();
              snake.grow();
              snake.grow();
              snake.grow();
              snake.grow();
              snake.grow();
              getMenuPowerUp(menuPowerUps, menuPowerUps[i]);
            }
          }
        } else {
          hud.render(p5, scoreCount, livesLeft, keysToCollect, levelIndicator)
          //OBSTACLES RENDER
          for (var i = 0; i < obstacles.length; i++) {
            obstacles[i].render(p5);
          }

          //POINTS RENDER
          for (var i = 0; i < points.length; i++) {
            points[i].render(p5);
          }

          //POWERUPS RENDER
          for (var i = 0; i < powerUps.length; i++) {
            powerUps[i].render(p5);
          }

          for (var i = 1; i < keys.length; i++) {
            //KEYS RENDER
            if (keysToCollect >= 1) {
              keys[i].render(p5);
            }
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
                snakeReset(p5);
                menu = false;
                livesLeft -= 1;
              }
            }
          }

          if (livesLeft >= 0) {
            snake.show(p5);
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
              getKey(p5, keys, keys[i]);
              keysToCollect -= 1;
              console.log(keys);
            }
          }

          for (let i = 0; i < points.length; i++) {
            if (snake.eatPoint(points[i], p5)) {
              getPoint(points, points[i]);
            }
          }

          for (var i = mVenom.length - 1; i >= 0; i--) {
            mVenom[i].update(snake);
            mVenom[i].show(p5);
            if (mVenom[i].offscreen()) {
              mVenom.splice(i, 1);
            }
          }

          for (var i = 0; i < doorTrigger.length; i++) {
            //NEXT LEVEL TRIGGER
            if (
              collide(doorTrigger[i], snake).totalDist &&
              keysToCollect <= 0
            ) {
              obstacles.length = 0;
              points.length = 0;
              // numberOfObstacles += 5;
              reset(p5);
              menu = false;
              levelIndicator += 1;
              for (var i = 1; i <= levelIndicator; i++) {
                keysToCollect++;
                if (levelIndicator > 3) {
                  keysToCollect = 3;
                }
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
        }
      };

      p5.keyPressed = () => {
        if (p5.keyCode == p5.ENTER && menu) {
          getMenuPowerUp(menuPowerUps, menuPowerUps[0]);
          reset(p5);
          menu = false;
        } else if (p5.key == ' ' && move) {
          mVenom.push(
            new Venom(p5, snake.body[0].x, snake.body[0].y, 1, snake)
          );
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
        } else if (p5.key == 'y' && livesLeft < 0) {
          numberOfKeys = 2;
          livesLeft = 3;
          obstacles.length = 0;
          points.length = 0;
          reset(p5);
        }
      };
    };
    let canvas = new p5(sketch);
  }
}
