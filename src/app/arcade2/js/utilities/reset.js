import Player from '../entities/player';
import Enemy from '../entities/enemy';
import Platform from '../entities/platform';
import { state } from "../game/state"; 

export const reset = (p5, canvas) => {
	canvas = p5.createCanvas(p5.windowWidth * .95, p5.windowHeight * .95);
	canvas.parent('arcade2-container');
	p5.pixelDensity(1);
	state.w = p5.windowWidth / state.rez;
  state.h = (p5.windowWidth * 0.714) / state.rez;
	state.windowWidth = (p5.windowWidth * 0.95) / state.rez;
  state.windowHeight = (p5.windowHeight * 0.95) / state.rez;
  p5.frameRate(state.frameRate);
	state.player = new Player(p5, 4, state.windowHeight -20);
	state.platform = new Platform(p5, 4, state.windowHeight -10);
	state.enemy = new Enemy(p5, state.windowWidth, state.windowHeight -6);
}