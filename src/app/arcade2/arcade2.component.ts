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
import { jump, move } from './js/utilities/keyPress';
// import {
//   collide,
//   getPowerUp,
//   getKey,
//   getMenuPowerUp,
//   getPoint,
//   snakeReset,
// } from './js/utilities/utilities';

@Component({
  selector: 'app-arcade2',
  templateUrl: './arcade2.component.html',
  styleUrls: ['./arcade2.component.css'],
})
export class Arcade2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {

    const sketch = (p5: any) => {
      p5.preload = () => {
        state.clientLogo = p5.loadImage('../../assets/img/HubbText.png');
        state.mainFont = p5.loadFont('../../assets/fonts/Sabo-Filled.otf');
      };

      p5.setup = () => {
        reset(p5);
      };

      p5.draw = () => {
        move(p5);
        drawGame(p5);
      };

      p5.keyPressed = () => {
        jump(p5);
      };
    };
    let canvas = new p5(sketch);
  }
}
