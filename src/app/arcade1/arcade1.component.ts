// snake tail resets the snake
// Random enemy objects that move across the map?
// food and powerups that do different things??
// SNAKE LIVES AS ARRAY OF IMAGES - IF DEATH, SPLICE ONE SNAKE OUT OF THE ARRAY
// snake flashes red color with a time wait before reset when hitting obstacles - indicating death
// fix overlapping bug for keys, powerups, and obstacles when next level is triggered
// ENEMIES HIT SNAKE - DRAW GAME 193
// create set new room function
// total reset function in it's own file

//keep snake length at new level???
//refactor?

import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { state } from './js/game/state';
import { reset } from './js/utilities/reset';
import { drawGame } from './js/utilities/drawGame';
import { keyPress } from './js/utilities/keyPress';
import {
  collide,
  getPowerUp,
  getKey,
  getMenuPowerUp,
  getPoint,
  snakeReset,
} from './js/utilities/utilities';

@Component({
  selector: 'app-arcade1',
  templateUrl: './arcade1.component.html',
  styleUrls: ['./arcade1.component.css'],
})
export class Arcade1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // callGame(p5)

    // let snake: any;
    let move: boolean = false;
    let mVenom: Array<any> = [];
    let enemy: any;
    let enemies: Array<any> = [];
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
    let numberOfKeys: number = 1;
    let keysToCollect: number = 1;
    let numberOfEnemies: number = 2;
    let mainFont: any;
    let levelIndicator: number = 1;
    let livesLeft: number = 3;

    const sketch = (p5: any) => {
      p5.preload = () => {
        state.mainFont = p5.loadFont('../../assets/fonts/Sabo-Filled.otf');
      };

      // const snakeReset = (p5: any) => {
      //   state.snake = new Snake(p5, w, h);
      // };

      // const reset = (p5: any) => {
      //   p5.createCanvas(1400, 1000);
      //   p5.pixelDensity(1);
      //   w = p5.floor(p5.width / rez);
      //   h = p5.floor(p5.height / rez);
      //   p5.frameRate(30);
      //   snake = new Snake(p5, w, h);
      //   key = new Key(p5, p5.random(3, 97), p5.random(3, 97), 2);
      //   // obstacle = new Obstacle(p5, 90, 55, 1, 4); // glass square to go through
      //   hud = new Hud(mainFont, mainTextFillColor);

      //   enemies = [];
      //   obstacles = [];
      //   keys = [];
      //   powerUps = [];
      //   points = [];

      //   //RANDOM INNER OBSTACLE LAYOUT
      //   while (obstacles.length < numberOfObstacles) {
      //     obstacle = new Obstacle(
      //       p5,
      //       p5.random(3, 96),
      //       p5.random(3, 96),
      //       0,
      //       sizeOfObstacles
      //     );
      //     var overlapping = false;
      //     var blocking = false;
      //     for (let j = 0; j < obstacles.length; j++) {
      //       var other = obstacles[j];
      //       var d = p5.dist(obstacle.x, obstacle.y, other.x, other.y);
      //       if (d < obstacle.r + other.r) {
      //         overlapping = true;
      //         break;
      //       }
      //       if (
      //         (obstacle.x < 10 || obstacle.x > 90) &&
      //         obstacle.y > 30 &&
      //         obstacle.y < 70
      //       ) {
      //         blocking = true;
      //       }
      //     }
      //     if (!overlapping && !blocking) {
      //       obstacles.push(obstacle);
      //     }
      //   }
      //   // //POWERUP NO OVERLAP WITH OBSTACLES AND POINTS
      //   while (powerUps.length < numberOfPowerUps) {
      //     powerUp = new PowerUp(
      //       p5,
      //       p5.random(3, 97),
      //       p5.random(3, 97),
      //       2,
      //       'rgb(255, 0, 0)'
      //     );
      //     var overlapping = false;
      //     for (let j = 0; j < obstacles.length; j++) {
      //       var other = obstacles[j];
      //       var d = p5.dist(powerUp.x, powerUp.y, other.x, other.y);
      //       if (d < powerUp.r * 4 + other.r) {
      //         overlapping = true;
      //         break;
      //       }
      //     }
      //     for (let j = 0; j < powerUps.length; j++) {
      //       var other = powerUps[j];
      //       var d = p5.dist(powerUp.x, powerUp.y, other.x, other.y);
      //       if (d < powerUp.r + other.r) {
      //         overlapping = true;
      //         break;
      //       }
      //     }
      //     for (let j = 0; j < points.length; j++) {
      //       var other = points[j];
      //       var d = p5.dist(powerUp.x, powerUp.y, other.x, other.y);
      //       if (d < powerUp.r + other.r) {
      //         overlapping = true;
      //         break;
      //       }
      //     }
      //     if (!overlapping) {
      //       powerUps.push(powerUp);
      //     }
      //   }

      //   // //KEYS NO OVERLAP WITH OBSTACLES AND POINTS
      //   while (keys.length < numberOfKeys) {
      //     key = new Key(p5, p5.random(3, 97), p5.random(3, 97), 2);
      //     var overlapping = false;
      //     for (let j = 0; j < obstacles.length; j++) {
      //       var other = obstacles[j];
      //       var d = p5.dist(key.x, key.y, other.x, other.y);
      //       if (d < key.r + other.r) {
      //         overlapping = true;
      //         break;
      //       }
      //     }
      //     for (let k = 0; k < points.length; k++) {
      //       var other = points[k];
      //       var d = p5.dist(key.x, key.y, other.x, other.y);
      //       if (d < key.r + other.r) {
      //         overlapping = true;
      //         break;
      //       }
      //     }
      //     for (let i = 0; i < powerUps.length; i++) {
      //       var other = powerUps[i];
      //       var d = p5.dist(key.x, key.y, other.x, other.y);
      //       if (d < key.r + other.r) {
      //         overlapping = true;
      //         break;
      //       }
      //     }
      //     if (!overlapping) {
      //       keys.push(key);
      //     }
      //   }

      //   // ENEMIES NO OVERLAP WITH OBSTACLES
      //   while (enemies.length < numberOfEnemies) {
      //     enemy = new Enemy(p5, p5.random(3, 97), p5.random(3, 97), 4);
      //     var overlapping = false;
      //     for (let j = 0; j < obstacles.length; j++) {
      //       var other = obstacles[j];
      //       var d = p5.dist(enemy.x, enemy.y, other.x, other.y);
      //       if (d < enemy.r + other.r) {
      //         overlapping = true;
      //         break;
      //       }
      //     }
      //     if (!overlapping) {
      //       enemies.push(enemy);
      //     }
      //   }

      //   //GRID PACMAN POINT GENERATION
      //   while (points.length < numberOfPoints) {
      //     for (var a = 4; a < numberOfPoints; a += pointSpread) {
      //       for (var b = 4; b < numberOfPoints; b += pointSpread) {
      //         point = new Point(p5, a, b, 1, 'white');
      //         var overlapping = false;
      //         for (let j = 0; j < obstacles.length; j++) {
      //           var other = obstacles[j];
      //           var d = p5.dist(point.x, point.y, other.x, other.y);
      //           if (d < point.r + other.r) {
      //             overlapping = true;
      //             break;
      //           }
      //         }
      //         for (let j = 0; j < points.length; j++) {
      //           var other = points[j];
      //           var d = p5.dist(point.x, point.y, other.x, other.y);
      //           if (d < point.r + other.r) {
      //             overlapping = true;
      //             break;
      //           }
      //         }
      //         if (!overlapping) {
      //           points.push(point);
      //         }
      //       }
      //     }
      //   }

      //   //BORDER INITIALIZE
      //   for (let i = 0; i < 50; i++) {
      //     topBorder[i] = new Border(p5, i * 2 + 1, 1, 0, 2, borderColor1);
      //   }
      //   for (let i = 0; i < 23; i++) {
      //     rightBorderTop[i] = new Border(p5, 99, i * 2 + 1, 0, 2, borderColor1);
      //   }
      //   for (let i = 0; i < 3; i++) {
      //     doorTrigger[i] = new Border(
      //       p5,
      //       99,
      //       i * 2 + 47,
      //       0,
      //       2,
      //       doorTriggerColor
      //     );
      //   }
      //   for (let i = 0; i < 23; i++) {
      //     rightBorderBottom[i] = new Border(
      //       p5,
      //       99,
      //       i * 2 + 53,
      //       0,
      //       2,
      //       borderColor1
      //     );
      //   }
      //   for (let i = 0; i < 50; i++) {
      //     bottomBorder[i] = new Border(p5, i * 2 + 1, 99, 0, 2, borderColor1);
      //   }
      //   for (let i = 0; i < 23; i++) {
      //     leftBorderTop[i] = new Border(p5, 1, i * 2 + 1, 0, 2, borderColor1);
      //   }
      //   for (let i = 0; i < 23; i++) {
      //     leftBorderBottom[i] = new Border(
      //       p5,
      //       1,
      //       i * 2 + 53,
      //       0,
      //       2,
      //       borderColor1
      //     );
      //   }

      //   menuPowerUp = new MenuPowerUp(p5, 51, 49, 2, 'red');
      //   menuPowerUps.push(menuPowerUp);
      // };

      p5.setup = () => {
        reset(p5);
      };

      p5.draw = () => {
        drawGame(p5);
        // p5.scale(rez);
        // p5.background(0);
        // if (menu) {
        //   drawMenu(p5, mainFont);
        //   state.snake.demo();
        //   state.snake.update();
        //   state.snake.show(p5);
        //   for (let i = 0; i < menuPowerUps.length; i++) {
        //     menuPowerUps[i].render(p5);
        //     if (state.snake.eatPowerUp(menuPowerUps[i], p5)) {
        //       state.snake.grow();
        //       state.snake.grow();
        //       state.snake.grow();
        //       state.snake.grow();
        //       state.snake.grow();
        //       state.snake.grow();
        //       getMenuPowerUp(menuPowerUps, menuPowerUps[i]);
        //     }
        //   }
        // } else {
        //   hud.render(p5, scoreCount, livesLeft, keysToCollect, levelIndicator);
        //   //OBSTACLES RENDER
        //   for (var i = 0; i < obstacles.length; i++) {
        //     obstacles[i].render(p5);
        //   }
        //   //POINTS RENDER
        //   for (var i = 0; i < points.length; i++) {
        //     points[i].render(p5);
        //   }
        //   //POWERUPS RENDER
        //   for (var i = 0; i < powerUps.length; i++) {
        //     powerUps[i].render(p5);
        //   }
        //   for (var i = 0; i < keys.length; i++) {
        //     //KEYS RENDER
        //     if (keysToCollect >= 1) {
        //       keys[i].render(p5);
        //     }
        //   }
        //   for (var i = 0; i < enemies.length; i++) {
        //     //ENEMIES RENDER
        //     enemies[i].render(p5);
        //     enemies[i].update();
        //   }
        //   //OBSTACLE BORDER RENDER
        //   for (var i = 0; i < topBorder.length; i++) {
        //     p5.push();
        //     p5.strokeWeight(0.2);
        //     p5.stroke(0);
        //     topBorder[i].render(p5);
        //     p5.pop();
        //   }
        //   for (var i = 0; i < rightBorderTop.length; i++) {
        //     p5.push();
        //     p5.strokeWeight(0.2);
        //     p5.stroke(0);
        //     rightBorderTop[i].render(p5);
        //     p5.pop();
        //   }
        //   for (var i = 0; i < doorTrigger.length; i++) {
        //     if (keysToCollect > 0) {
        //       p5.push();
        //       p5.strokeWeight(0.2);
        //       p5.stroke(0);
        //       doorTrigger[i].render(p5);
        //       p5.pop();
        //     }
        //   }
        //   for (var i = 0; i < rightBorderBottom.length; i++) {
        //     p5.push();
        //     p5.strokeWeight(0.2);
        //     p5.stroke(0);
        //     rightBorderBottom[i].render(p5);
        //     p5.pop();
        //   }
        //   for (var i = 0; i < bottomBorder.length; i++) {
        //     p5.push();
        //     p5.strokeWeight(0.2);
        //     p5.stroke(0);
        //     bottomBorder[i].render(p5);
        //     p5.pop();
        //   }
        //   for (var i = 0; i < leftBorderTop.length; i++) {
        //     p5.push();
        //     p5.strokeWeight(0.2);
        //     p5.stroke(0);
        //     leftBorderTop[i].render(p5);
        //     p5.pop();
        //   }
        //   for (var i = 0; i < leftBorderBottom.length; i++) {
        //     p5.push();
        //     p5.strokeWeight(0.2);
        //     p5.stroke(0);
        //     leftBorderBottom[i].render(p5);
        //     p5.pop();
        //   }
        //   const borderObstacles = topBorder.concat(
        //     rightBorderTop,
        //     rightBorderBottom,
        //     bottomBorder,
        //     leftBorderBottom,
        //     leftBorderTop
        //   );
        //   for (let i = 0; i < borderObstacles.length; i++) {
        //     if (collide(borderObstacles[i], state.snake).totalDist) {
        //       while (collide(borderObstacles[i], state.snake).totalDist) {
        //         if (state.snake.xdir > 0) {
        //           state.snake.body[state.snake.body.length - 1].x -= 0.2;
        //         } else if (state.snake.xdir < 0) {
        //           state.snake.body[state.snake.body.length - 1].x += 0.2;
        //         } else if (state.snake.ydir > 0) {
        //           state.snake.body[state.snake.body.length - 1].y -= 0.2;
        //         } else if (state.snake.ydir < 0) {
        //           state.snake.body[state.snake.body.length - 1].y += 0.2;
        //         }
        //         move = false;
        //       }
        //     }
        //   }
        //   for (let i = 0; i < obstacles.length; i++) {
        //     if (collide(obstacles[i], state.snake).totalDist) {
        //       if (livesLeft >= 0) {
        //         snakeReset(p5);
        //         menu = false;
        //         livesLeft -= 1;
        //       }
        //     }
        //   }
        //   if (livesLeft >= 0) {
        //     state.snake.show(p5);
        //     if (move) {
        //       p5.push();
        //       p5.strokeWeight(p5.random(0.5, 0.75));
        //       p5.pop();
        //       state.snake.update();
        //     }
        //   }
        //   for (let i = 0; i < powerUps.length; i++) {
        //     if (state.snake.eatPowerUp(powerUps[i], p5)) {
        //       state.snake.grow();
        //       getPowerUp(powerUps, powerUps[i]);
        //     }
        //   }
        //   for (let i = 0; i < keys.length; i++) {
        //     if (state.snake.eatKey(keys[i], p5)) {
        //       getKey(p5, keys, keys[i]);
        //       keysToCollect -= 1;
        //     }
        //   }
        //   for (let i = 0; i < points.length; i++) {
        //     if (state.snake.eatPoint(points[i], p5)) {
        //       getPoint(points, points[i]);
        //       scoreCount += 100;
        //     }
        //   }
        //   for (var i = mVenom.length - 1; i >= 0; i--) {
        //     mVenom[i].update(state.snake);
        //     mVenom[i].show(p5);
        //     if (mVenom[i].offscreen()) {
        //       mVenom.splice(i, 1);
        //     }
        //   }
        //   // for (let i = 0; i < enemies.length; i ++) {
        //   //   for (let j = 0; j < obstacles.length; j++) {
        //   //     //Right and up
        //   //     if (enemies[i].xdir > 0 && enemies[i].ydir > 0 && enemies[i].hits(obstacles[j])) {
        //   //       enemies[i].xdir = -.1;
        //   //       enemies[i].ydir = .1;
        //   //     //Left and up
        //   //     } else if (enemies[i].xdir < 0 && enemies[i].ydir > 0 && enemies[i].hits(obstacles[j])) {
        //   //       enemies[i].xdir = .1;
        //   //       enemies[i].ydir = .1;
        //   //     //Right and down
        //   //     } else if (enemies[i].xdir > 0 && enemies[i].ydir < 0 && enemies[i].hits(obstacles[j])) {
        //   //       enemies[i].xdir = -.1;
        //   //       enemies[i].ydir = -.1;
        //   //     //Left and down
        //   //     } else if (enemies[i].xdir < 0 && enemies[i].ydir < 0 && enemies[i].hits(obstacles[j])) {
        //   //       enemies[i].xdir = -.1;
        //   //       enemies[i].ydir = .1;
        //   //     }
        //   //   }
        //   // }
        //   for (var i = 0; i < doorTrigger.length; i++) {
        //     //NEXT LEVEL TRIGGER
        //     if (
        //       collide(doorTrigger[i], state.snake).totalDist &&
        //       keysToCollect <= 0
        //     ) {
        //       obstacles.length = 0;
        //       points.length = 0;
        //       reset(p5);
        //       menu = false;
        //       levelIndicator += 1;
        //       for (var i = 1; i <= levelIndicator; i++) {
        //         keysToCollect++;
        //         if (levelIndicator > 3) {
        //           keysToCollect = 3;
        //         }
        //       }
        //       //RESET SNAKE AND LAYOUT TO DEFAULT...
        //     } else if (collide(doorTrigger[i], state.snake).totalDist) {
        //       while (collide(doorTrigger[i], state.snake).totalDist) {
        //         if (state.snake.xdir > 0) {
        //           state.snake.body[state.snake.body.length - 1].x -= 0.2;
        //         } else if (state.snake.xdir < 0) {
        //           state.snake.body[state.snake.body.length - 1].x += 0.2;
        //         } else if (state.snake.ydir > 0) {
        //           state.snake.body[state.snake.body.length - 1].y -= 0.2;
        //         } else if (state.snake.ydir < 0) {
        //           state.snake.body[state.snake.body.length - 1].y += 0.2;
        //         }
        //         move = false;
        //       }
        //     }
        //   }
        // }
      };

      p5.keyPressed = () => {
        keyPress(p5);
        // if (p5.keyCode == p5.ENTER && menu) {
        //   getMenuPowerUp(menuPowerUps, menuPowerUps[0]);
        //   reset(p5);
        //   menu = false;
        // } else if (p5.key == ' ' && move) {
        //   mVenom.push(
        //     new Venom(
        //       p5,
        //       state.snake.body[0].x,
        //       state.snake.body[0].y,
        //       1,
        //       state.snake
        //     )
        //   );
        // } else if (p5.keyCode == p5.LEFT_ARROW) {
        //   move = true;
        //   state.snake.setDir(-1, 0);
        // } else if (p5.keyCode === p5.RIGHT_ARROW) {
        //   move = true;
        //   state.snake.setDir(1, 0);
        // } else if (p5.keyCode == p5.DOWN_ARROW) {
        //   move = true;
        //   state.snake.setDir(0, 1);
        // } else if (p5.keyCode === p5.UP_ARROW) {
        //   move = true;
        //   state.snake.setDir(0, -1);
        // } else if (p5.key == 'y' && livesLeft < 0) {
        //   numberOfKeys = 2;
        //   livesLeft = 3;
        //   obstacles.length = 0;
        //   points.length = 0;
        //   reset(p5);
        // }
      };
    };
    let canvas = new p5(sketch);
  }
}
