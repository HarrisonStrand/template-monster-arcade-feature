import { state } from '../game/state'
import { reset } from './reset';
import Venom from '../entities/venom'
import {
  collide,
  getPowerUp,
  getKey,
  getMenuPowerUp,
  getPoint,
  snakeReset
} from './utilities';

export const keyPress = (p5) => {
	if (p5.keyCode == p5.ENTER && state.menu) {
		getMenuPowerUp(state.menuPowerUps, state.menuPowerUps[0]);
		reset(p5);
		state.menu = false;
	} else if (p5.key == ' ' && state.move) {
		state.mVenom.push(
			new Venom(
				p5,
				state.snake.body[0].x,
				state.snake.body[0].y,
				1,
				state.snake
			)
		);
	} else if (p5.keyCode == p5.LEFT_ARROW) {
		state.move = true;
		state.snake.setDir(-1, 0);
	} else if (p5.keyCode === p5.RIGHT_ARROW) {
		state.move = true;
		state.snake.setDir(1, 0);
	} else if (p5.keyCode == p5.DOWN_ARROW) {
		state.move = true;
		state.snake.setDir(0, 1);
	} else if (p5.keyCode === p5.UP_ARROW) {
		state.move = true;
		state.snake.setDir(0, -1);
	} else if (p5.keyCode == p5.ENTER && state.livesLeft < 0 && state.menu == false) {
		state.numberOfKeys = 2;
		state.livesLeft = 3;
		state.obstacles.length = 0;
		state.points.length = 0;
		reset(p5);
	} else if (p5.keyCode == p5.ESCAPE) {
		state.menu = true;
	}
}