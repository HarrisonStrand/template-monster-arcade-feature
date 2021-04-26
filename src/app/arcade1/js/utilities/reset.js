import Snake from "../entities/snake"
import Obstacle from '../entities/obstacle'
import Enemy from '../entities/enemy'
import Point from '../entities/points'
import PowerUp from '../entities/powerUp'
import Border from "../entities/border"
import { MenuPowerUp } from '../utilities/menu'
import Key from '../entities/key'
import Hud from '../utilities/hud'
import { state } from '../game/state'

export const reset = (p5, canvas) => {
  canvas = p5.createCanvas(1400, 1000);
  canvas.parent('arcade1-container');
  p5.pixelDensity(1);
  state.w = p5.floor(p5.width / state.rez);
  state.h = p5.floor(p5.height / state.rez);
  p5.frameRate(30);
  state.snake = new Snake(p5, state.w, state.h);
  state.key = new Key(p5, p5.random(3, 97), p5.random(3, 97), 2);
  // obstacle = new Obstacle(p5, 90, 55, 1, 4); // glass square to go through
  state.hud = new Hud(state.mainFont, state.mainTextFillColor);

  //RANDOM INNER OBSTACLE LAYOUT
  while (state.obstacles.length < state.numberOfObstacles) {
    state.obstacle = new Obstacle(
      p5,
      p5.random(3, 96),
      p5.random(3, 96),
      0,
      state.sizeOfObstacles
    );
    var overlapping = false;
    var blocking = false;
    for (let j = 0; j < state.obstacles.length; j++) {
      var other = state.obstacles[j];
      var d = p5.dist(state.obstacle.x, state.obstacle.y, other.x, other.y);
      if (d < state.obstacle.r + other.r) {
        overlapping = true;
        break;
      }
      if (
        (state.obstacle.x < 10 || state.obstacle.x > 90) &&
        state.obstacle.y > 30 &&
        state.obstacle.y < 70
      ) {
        blocking = true;
      }
    }
    if (!overlapping && !blocking) {
      state.obstacles.push(state.obstacle);
    }
  }
  // //POWERUP NO OVERLAP WITH OBSTACLES AND POINTS
  while (state.powerUps.length < state.numberOfPowerUps) {
    state.powerUp = new PowerUp(
      p5,
      p5.random(3, 97),
      p5.random(3, 97),
      2
    );
    var overlapping = false;
    for (let j = 0; j < state.obstacles.length; j++) {
      var other = state.obstacles[j];
      var d = p5.dist(state.powerUp.x, state.powerUp.y, other.x, other.y);
      if (d < state.powerUp.r * 4 + other.r) {
        overlapping = true;
        break;
      }
    }
    for (let j = 0; j < state.powerUps.length; j++) {
      var other = state.powerUps[j];
      var d = p5.dist(state.powerUp.x, state.powerUp.y, other.x, other.y);
      if (d < state.powerUp.r + other.r) {
        overlapping = true;
        break;
      }
    }
    for (let j = 0; j < state.points.length; j++) {
      var other = state.points[j];
      var d = p5.dist(state.powerUp.x, state.powerUp.y, other.x, other.y);
      if (d < state.powerUp.r + other.r) {
        overlapping = true;
        break;
      }
    }
    if (!overlapping) {
      state.powerUps.push(state.powerUp);
    }
  }

  // //KEYS NO OVERLAP WITH OBSTACLES AND POINTS
  while (state.keys.length < state.numberOfKeys) {
    state.key = new Key(p5, p5.random(3, 97), p5.random(3, 97), 2);
    var overlapping = false;
    for (let j = 0; j < state.obstacles.length; j++) {
      var other = state.obstacles[j];
      var d = p5.dist(state.key.x, state.key.y, other.x, other.y);
      if (d < state.key.r + other.r) {
        overlapping = true;
        break;
      }
    }
    for (let k = 0; k < state.points.length; k++) {
      var other = state.points[k];
      var d = p5.dist(key.x, key.y, other.x, other.y);
      if (d < key.r + other.r) {
        overlapping = true;
        break;
      }
    }
    for (let i = 0; i < state.powerUps.length; i++) {
      var other = state.powerUps[i];
      var d = p5.dist(state.key.x, state.key.y, other.x, other.y);
      if (d < state.key.r + other.r) {
        overlapping = true;
        break;
      }
    }
    if (!overlapping) {
      state.keys.push(state.key);
    }
  }

  // ENEMIES NO OVERLAP WITH OBSTACLES
  while (state.enemies.length < state.numberOfEnemies) {
    state.enemy = new Enemy(p5, p5.random(3, 97), p5.random(3, 97), 4);
    var overlapping = false;
    for (let j = 0; j < state.obstacles.length; j++) {
      var other = state.obstacles[j];
      var d = p5.dist(state.enemy.x, state.enemy.y, other.x, other.y);
      if (d < state.enemy.r + other.r) {
        overlapping = true;
        break;
      }
    }
    if (!overlapping) {
      state.enemies.push(state.enemy);
    }
  }

  //GRID PACMAN POINT GENERATION
  while (state.points.length < state.numberOfPoints) {
    for (var a = 4; a < state.numberOfPoints; a += state.pointSpread) {
      for (var b = 4; b < state.numberOfPoints; b += state.pointSpread) {
        state.point = new Point(p5, a, b, 1);
        var overlapping = false;
        for (let j = 0; j < state.obstacles.length; j++) {
          var other = state.obstacles[j];
          var d = p5.dist(state.point.x, state.point.y, other.x, other.y);
          if (d < state.point.r + other.r) {
            overlapping = true;
            break;
          }
        }
        for (let j = 0; j < state.points.length; j++) {
          var other = state.points[j];
          var d = p5.dist(state.point.x, state.point.y, other.x, other.y);
          if (d < state.point.r + other.r) {
            overlapping = true;
            break;
          }
        }
        if (!overlapping) {
          state.points.push(state.point);
        }
      }
    }
  }

  //BORDER INITIALIZE
  for (let i = 0; i < 50; i++) {
    state.topBorder[i] = new Border(p5, i * 2 + 1, 1, 0, 2);
  }
  for (let i = 0; i < 23; i++) {
    state.rightBorderTop[i] = new Border(p5, 99, i * 2 + 1, 0, 2);
  }
  for (let i = 0; i < 3; i++) {
    state.doorTrigger[i] = new Border(
      p5,
      99,
      i * 2 + 47,
      0,
      2
    );
  }
  for (let i = 0; i < 23; i++) {
    state.rightBorderBottom[i] = new Border(
      p5,
      99,
      i * 2 + 53,
      0,
      2,
    );
  }
  for (let i = 0; i < 50; i++) {
    state.bottomBorder[i] = new Border(p5, i * 2 + 1, 99, 0, 2);
  }
  for (let i = 0; i < 23; i++) {
    state.leftBorderTop[i] = new Border(p5, 1, i * 2 + 1, 0, 2);
  }
  for (let i = 0; i < 23; i++) {
    state.leftBorderBottom[i] = new Border(
      p5,
      1,
      i * 2 + 53,
      0,
      2
    );
  }

  state.menuPowerUp = new MenuPowerUp(p5, 51, 49, 2, 'red');
  state.menuPowerUps.push(state.menuPowerUp);
};