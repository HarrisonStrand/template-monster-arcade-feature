import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { state } from './js/game/state';
import { reset } from './js/utilities/reset';
import { drawGame } from './js/utilities/drawGame';
import { jump, move, shoot } from './js/utilities/keyPress';

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
        state.platformFont = p5.loadFont('../../assets/fonts/ARCADE_R.TTF');
        state.mountains = p5.loadImage('../../assets/img/mountains1.jpeg');
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
        shoot(p5);
      };
    };
    let canvas = new p5(sketch);
  }
}
