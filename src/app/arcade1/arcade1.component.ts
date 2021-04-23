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

      p5.setup = () => {
        reset(p5);
      };

      p5.draw = () => {
        drawGame(p5);
      };

      p5.keyPressed = () => {
        keyPress(p5);
      };
    };
    let canvas = new p5(sketch);
  }
}
