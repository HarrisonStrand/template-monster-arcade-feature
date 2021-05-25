import Player from "../entities/player"
import Background from '../entities/background'
import { Enemy, Layer1, Layer2 } from "../entities/enemy"
import { state } from '../game/state'

export const playerReset = (p5) => {
  state.player = new Player(p5, 4, state.windowHeight -25);
};

export const backgroundReset = (p5) => {
  state.backgroundImage = new Background(p5, state.windowWidth /2, state.windowHeight /2, state.windowWidth * 2, state.windowHeight * 2)
};

export const enemyReset = (p5) => {
	for (let i = 0; i < state.enemies.length; i ++) {
		state.enemies[i] = new Enemy(p5, state.windowWidth, p5.random(4, 80))
		state.enemyLayer1[i] = new Layer1(p5, state.windowWidth, state.enemies[i].pos.y)
		state.enemyLayer2[i] = new Layer2(p5, state.windowWidth, state.enemies[i].pos.y)
	}
};