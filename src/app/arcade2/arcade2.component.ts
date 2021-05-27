import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { state } from './js/game/state';
import { reset } from './js/utilities/reset';
import { drawGame } from './js/utilities/drawGame';
import { jump, move, shoot } from './js/utilities/keyPress';
import { backgroundMusic } from './js/utilities/utilities'

@Component({
  selector: 'app-arcade2',
  templateUrl: './arcade2.component.html',
  styleUrls: ['./arcade2.component.css'],
})
export class Arcade2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {

    const sketch = (p5: any) => {
      backgroundMusic();
      p5.preload = () => {
        state.clientLogo = p5.loadImage('../../assets/img/HubbText.png');
        state.platformFont = p5.loadFont('../../assets/fonts/ARCADE_R.TTF');
        state.mountains = p5.loadImage('../../assets/img/mountains1.jpeg');
        state.mountains2 = p5.loadImage('../../assets/img/mountains2.png');
        state.mountains3 = p5.loadImage('../../assets/img/mountains3.png');
        state.mountains4 = p5.loadImage('../../assets/img/mountains4.png');
        state.mountains5 = p5.loadImage('../../assets/img/mountains5.png');
        state.mountains6 = p5.loadImage('../../assets/img/mountains6.png');
        state.mountains7 = p5.loadImage('../../assets/img/mountains7.png');
        state.mountains8 = p5.loadImage('../../assets/img/mountains8.png');
        state.mountains9 = p5.loadImage('../../assets/img/mountains9.png');
        state.mountains10 = p5.loadImage('../../assets/img/mountains10.png');
        state.mountains11 = p5.loadImage('../../assets/img/mountains11.png');
        state.mountains12 = p5.loadImage('../../assets/img/mountains12.png');
        state.mountains13 = p5.loadImage('../../assets/img/mountains13.png');
      }
      
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
