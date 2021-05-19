import Player from "../entities/player"
import Enemy from "../entities/enemy"
import { state } from '../game/state'

export const playerReset = (p5) => {
  state.player = new Player(p5, 4, state.windowHeight -25);
};

export const enemyReset = (p5) => {
	for (let i = 0; i < state.enemies.length; i ++) {
		state.enemies[i] = new Enemy(p5, state.windowWidth, state.windowHeight -6)
	}
};