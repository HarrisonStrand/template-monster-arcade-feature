import Snake from "../entities/snake";
import Obstacle from "../entities/obstacle";
import Enemy from "../entities/enemy";
import Point from "../entities/points";
import PowerUp from "../entities/powerUp";
import PowerUp2 from "../entities/powerUp2";
import Border from "../entities/border";
import { MenuPowerUp } from "../utilities/menu";
import Key from "../entities/key";
import Hud from "../utilities/hud";
import { state } from "../game/state";

export const reset = (p5, canvas) => {
  console.log("RESET");
  canvas = p5.createCanvas(p5.windowWidth * 0.95, p5.windowHeight * 0.95);
  canvas.parent("arcade1-container");
  p5.pixelDensity(1);
  state.w = p5.windowWidth / state.rez;
  state.h = (p5.windowWidth * 0.714) / state.rez;
  p5.frameRate(state.frameRate);
  state.hud = new Hud(state.mainFont, state.mainTextFillColor);
  state.snake = new Snake(p5, 4, state.windowHeight / 2);
  state.key = new Key(p5, p5.random(3, 97), p5.random(3, 97), 2);
  state.obstacles = [];
  state.points = [];
  state.keys = [];
  state.powerUps = [];
  state.powerUps2 = [];
  state.powerUpsEaten = 0;
  state.windowWidth = (p5.windowWidth * 0.95) / state.rez;
  state.windowHeight = (p5.windowHeight * 0.95) / state.rez;

  const pointDisplay =
    (state.levelIndicator + state.numberOfPoints) *
    (state.levelIndicator + state.numberOfPoints);

  state.numberOfObstacles += state.levelIndicator;


  // //RANDOM INNER OBSTACLE LAYOUT
  // while (state.obstacles.length < state.numberOfObstacles) {
  //   state.obstacle = new Obstacle(
  //     p5,
  //     p5.random(3, 96),
  //     p5.random(3, 96),
  //     0,
  //     state.sizeOfObstacles
  //   );
  //   var overlapping = false;
  //   var blocking = false;
  //   for (let j = 0; j < state.obstacles.length; j++) {
  //     var other = state.obstacles[j];
  //     var d = p5.dist(state.obstacle.x, state.obstacle.y, other.x, other.y);
  //     if (d < state.obstacle.r + other.r) {
  //       overlapping = true;
  //       break;
  //     }
  //     if (
  //       (state.obstacle.x < 10 || state.obstacle.x > 90) &&
  //       state.obstacle.y > 30 &&
  //       state.obstacle.y < 70
  //     ) {
  //       blocking = true;
  //     }
  //   }
  //   if (!overlapping && !blocking) {
  //     state.obstacles.push(state.obstacle);
  //   }
  // }
  // // //POWERUP NO OVERLAP WITH OBSTACLES AND POINTS
  // while (state.powerUps.length < state.numberOfPowerUps) {
  //   state.powerUp = new PowerUp(
  //     p5,
  //     p5.random(3, 97),
  //     p5.random(3, 97),
  //     2
  //   );
  //   var overlapping = false;
  //   for (let j = 0; j < state.obstacles.length; j++) {
  //     var other = state.obstacles[j];
  //     var d = p5.dist(state.powerUp.x, state.powerUp.y, other.x, other.y);
  //     if (d < state.powerUp.r * 4 + other.r) {
  //       overlapping = true;
  //       break;
  //     }
  //   }
  //   for (let j = 0; j < state.powerUps.length; j++) {
  //     var other = state.powerUps[j];
  //     var d = p5.dist(state.powerUp.x, state.powerUp.y, other.x, other.y);
  //     if (d < state.powerUp.r + other.r) {
  //       overlapping = true;
  //       break;
  //     }
  //   }
  //   for (let j = 0; j < state.points.length; j++) {
  //     var other = state.points[j];
  //     var d = p5.dist(state.powerUp.x, state.powerUp.y, other.x, other.y);
  //     if (d < state.powerUp.r + other.r) {
  //       overlapping = true;
  //       break;
  //     }
  //   }
  //   if (!overlapping) {
  //     state.powerUps.push(state.powerUp);
  //   }
  // }
  // // //POWERUP2 NO OVERLAP WITH OBSTACLES AND POINTS
  // while (state.powerUps2.length < state.numberOfPowerUps) {
  //   state.powerUp2 = new PowerUp2(
  //     p5,
  //     p5.random(3, 97),
  //     p5.random(3, 97),
  //     2
  //   );
  //   var overlapping = false;
  //   for (let j = 0; j < state.obstacles.length; j++) {
  //     var other = state.obstacles[j];
  //     var d = p5.dist(state.powerUp2.x, state.powerUp2.y, other.x, other.y);
  //     if (d < state.powerUp2.r * 4 + other.r) {
  //       overlapping = true;
  //       break;
  //     }
  //   }
  //   for (let j = 0; j < state.powerUps2.length; j++) {
  //     var other = state.powerUps2[j];
  //     var d = p5.dist(state.powerUp2.x, state.powerUp2.y, other.x, other.y);
  //     if (d < state.powerUp2.r + other.r) {
  //       overlapping = true;
  //       break;
  //     }
  //   }
  //   for (let j = 0; j < state.points.length; j++) {
  //     var other = state.points[j];
  //     var d = p5.dist(state.powerUp2.x, state.powerUp2.y, other.x, other.y);
  //     if (d < state.powerUp2.r + other.r) {
  //       overlapping = true;
  //       break;
  //     }
  //   }
  //   if (!overlapping) {
  //     state.powerUps2.push(state.powerUp2);
  //   }
  // }

  // // //KEYS NO OVERLAP WITH OBSTACLES AND POINTS
  // while (state.keys.length < state.numberOfKeys) {
  //   state.key = new Key(p5, p5.random(3, 97), p5.random(3, 97), 2);
  //   var overlapping = false;
  //   for (let j = 0; j < state.obstacles.length; j++) {
  //     var other = state.obstacles[j];
  //     var d = p5.dist(state.key.x, state.key.y, other.x, other.y);
  //     if (d <= state.key.r * 2 + other.r) {
  //       overlapping = true;
  //       break;
  //     }
  //   }
  //   for (let k = 0; k < state.points.length; k++) {
  //     var other = state.points[k];
  //     var d = p5.dist(key.x, key.y, other.x, other.y);
  //     if (d < key.r * 2 + other.r) {
  //       overlapping = true;
  //       break;
  //     }
  //   }
  //   for (let i = 0; i < state.powerUps.length; i++) {
  //     var other = state.powerUps[i];
  //     var d = p5.dist(state.key.x, state.key.y, other.x, other.y);
  //     if (d < state.key.r * 2 + other.r) {
  //       overlapping = true;
  //       break;
  //     }
  //   }
  //   if (!overlapping) {
  //     state.keys.push(state.key);
  //   }
  // }

  // ENEMIES INSTANTIATION
  while (state.enemies.length < state.numberOfEnemies) {
    state.enemy = new Enemy(p5, p5.random(3, 97), p5.random(3, 97), 4);
    state.enemies.push(state.enemy);
  }

  //GRID PACMAN POINT GENERATION
  // while (state.points.length < state.numberOfPoints) {
  //   for (var a = 4; a < state.numberOfPoints; a += state.pointSpread) {
  //     for (var b = 4; b < state.numberOfPoints; b += state.pointSpread) {
  //       state.point = new Point(p5, a, b, 1);
  //       var overlapping = false;
  //       for (let j = 0; j < state.obstacles.length; j++) {
  //         var other = state.obstacles[j];
  //         var d = p5.dist(state.point.x, state.point.y, other.x, other.y);
  //         if (d < state.point.r + other.r) {
  //           overlapping = true;
  //           break;
  //         }
  //       }
  //       for (let j = 0; j < state.points.length; j++) {
  //         var other = state.points[j];
  //         var d = p5.dist(state.point.x, state.point.y, other.x, other.y);
  //         if (d < state.point.r + other.r) {
  //           overlapping = true;
  //           break;
  //         }
  //       }
  //       if (!overlapping) {
  //         state.points.push(state.point);
  //       }
  //     }
  //   }
  // }

  for (let x = 0; x < Math.sqrt(pointDisplay); x++) {
    for (let y = 0; y < Math.sqrt(pointDisplay); y++) {
      let overlapping = false;
      const spready = state.windowHeight / Math.sqrt(pointDisplay);
      const spreadx = state.windowWidth / Math.sqrt(pointDisplay);
      const point1 = new Point(
        p5,
        spreadx * x + spreadx / 2,
        spready * y + spready / 2,
        1
      );
      for (let i = 0; i < state.obstacles.length; i++) {
        let other = state.obstacles[i];
        let d = p5.dist(point1.x, point1.y, other.x, other.y);
        if (d < point1.r + other.r) {
          overlapping = true;
        }
      }
      if (!overlapping) {
        state.points.push(point1);
      }
    }
  }

  console.log(state.points.length);

  // //BORDER INITIALIZE
  // for (let i = 0; i < 50; i++) {
  //   state.topBorder[i] = new Border(p5, i * 2 + 1, 1, 0, 2);
  // }
  // for (let i = 0; i < 23; i++) {
  //   state.rightBorderTop[i] = new Border(p5, 99, i * 2 + 1, 0, 2);
  // }
  // for (let i = 0; i < 3; i++) {
  //   state.doorTrigger[i] = new Border(
  //     p5,
  //     99,
  //     i * 2 + 47,
  //     0,
  //     2
  //   );
  // }
  // for (let i = 0; i < 23; i++) {
  //   state.rightBorderBottom[i] = new Border(
  //     p5,
  //     99,
  //     i * 2 + 53,
  //     0,
  //     2,
  //   );
  // }
  // for (let i = 0; i < 50; i++) {
  //   state.bottomBorder[i] = new Border(p5, i * 2 + 1, 99, 0, 2);
  // }
  // for (let i = 0; i < 23; i++) {
  //   state.leftBorderTop[i] = new Border(p5, 1, i * 2 + 1, 0, 2);
  // }
  // for (let i = 0; i < 23; i++) {
  //   state.leftBorderBottom[i] = new Border(
  //     p5,
  //     1,
  //     i * 2 + 53,
  //     0,
  //     2
  //   );
  // }

    //BORDER INITIALIZE
    for (let i = 0; i < state.windowWidth / 2 - 2; i++) {
      state.topBorder[i] = new Border(p5, i * 2 + 1, 4, 1, 2, 0, 'white');
    }
    for (let i = 0; i < state.windowHeight / 2 - 4; i++) {
      state.rightBorderTop[i] = new Border(
        p5,
        state.windowWidth - 2,
        i * 2 + 4,
        1,
        0,
        2,
        'white'
      );
    }
    // for (let i = 0; i < state.rightBorderTop.length; i++) {
      // state.rightBorderTop.splice(18, 6, new Border(
      //   p5,
      //   state.windowWidth -2,
      //   40,
      //   1,
      //   0,
      //   2,
      //   'blue'
      //   ));
      // }

    for (let i = 0; i < state.windowWidth / 2 - 1; i++) {
      state.bottomBorder[i] = new Border(
        p5,
        i * 2 + 1,
        state.windowHeight - 2,
        1,
        2,
        0,
        'white'
      );
    }
    for (let i = 0; i < state.windowHeight / 2 - 4; i++) {
      state.leftBorderTop[i] = new Border(p5, 1, i * 2 + 4, 1, 0, 2, 'white');
    }
    for (let i = 0; i < state.windowHeight / 18; i++) {
      state.doorTrigger[i] = new Border(
        p5,
        state.windowWidth - 2,
        i * 2 + 40,
        1,
        0,
        2,
        'black'
      );
    }

  state.menuPowerUp = new MenuPowerUp(p5, 51, 49, 3);
  state.menuPowerUps.push(state.menuPowerUp);
};