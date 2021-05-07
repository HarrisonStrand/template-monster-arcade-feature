import { drawMenu } from '../utilities/menu'
import { state } from '../game/state'
import Snake from '../entities/snake'
import {
  collide,
  getPowerUp,
  getPowerUp2,
  getKey,
  getMenuPowerUp,
  getPoint,
  snakeReset
} from './utilities';
import { reset } from "./reset"


export const drawGame = (p5) => {

	let pointGet = false;
	
	p5.scale(state.rez);
	p5.background(0);
	if (state.menu) {
		drawMenu(p5, state.mainFont, state.windowWidth, state.windowHeight);
		state.snake = new Snake(p5, 4, state.windowHeight / 2 + 4);
		//BUG GETTING THE SNAKE TO MOVE DURING MENU
		state.snake.show(p5);
		state.snake.demo();
		state.snake.update();

	for (let i = 0; i < state.menuPowerUps.length; i++) {
		state.menuPowerUps[i].render(p5);
		if (state.snake.eatPowerUp(state.menuPowerUps[i], p5)) {
			state.snake.grow();
			state.snake.grow();
			state.snake.grow();
			state.snake.grow();
			state.snake.grow();
			state.snake.grow();
			getMenuPowerUp(state.menuPowerUps, state.menuPowerUps[i]);
		}
	}
} else {

	//OBSTACLES RENDER
	// if (state.levelIndicator > 1) {
		for (var i = 0; i < state.obstacles.length; i++) {
			state.obstacles[i].render(p5);
		}
	// }

	//POINTS RENDER
	for (var i = 0; i < state.points.length; i++) {
		state.points[i].render(p5);
	}

	// //POWERUPS RENDER
	// for (var i = 0; i < state.powerUps.length; i++) {
	// 	state.powerUps[i].render(p5);
	// }
	// for (var i = 0; i < state.powerUps2.length; i++) {
	// 	state.powerUps2[i].render(p5);
	// }

	// for (var i = 0; i < state.keys.length; i++) {
	// 	//KEYS RENDER
	// 	if (state.keysToCollect >= 1) {
	// 		state.keys[i].render(p5);
	// 	}
	// }

	for (var i = 0; i < state.enemies.length; i++) {
		//ENEMIES RENDER
		state.enemies[i].render(p5);
	}

	

	// if (state.hittingTail) {
	// 	// reset(p5);
	// 	console.log("HIT TAIL")
	// }

	
	const borderObstacles = state.topBorder.concat(
		state.rightBorderTop,
		state.rightBorderBottom,
		state.bottomBorder,
		state.leftBorderBottom,
		state.leftBorderTop,
		);
		
		const randomWeight = p5.random(.2, .25);
		
		for (var i = 0; i < borderObstacles.length; i++) {
			borderObstacles[i].render(p5, randomWeight);
		}

		if (state.points <= 0) {
			for (var i = 0; i < state.doorTrigger.length; i ++) {
				state.doorTrigger[i].render(p5, randomWeight);
			}
		}

	state.hud.render(p5, state.scoreCount, state.livesLeft, state.keysToCollect, state.levelIndicator, state.windowWidth, state.windowHeight);

	for (let i = 0; i < borderObstacles.length; i++) {
		if (collide(borderObstacles[i], state.snake).totalDist) {
			snakeReset(p5);
			state.livesLeft -= 1;
		}
	}

	for (let i = 0; i < state.obstacles.length; i++) {
		if (collide(state.obstacles[i], state.snake).totalDist) {
			if (state.livesLeft >= 0) {
				snakeReset(p5);
				state.menu = false;
				state.livesLeft -= 1;
			}
		}
	}

	if (state.livesLeft >= 0) {
		state.snake.show(p5);
		if (state.move) {
			p5.push();
			p5.strokeWeight(p5.random(0.5, 0.75));
			p5.pop();
			state.snake.update();
		}
	}
	
	for (let i = 0; i < state.powerUps.length; i++) {
		if (state.snake.eatPowerUp(state.powerUps[i], p5)) {
			state.powerUpsEaten += 1;
			console.log(state.powerUpsEaten)
			getPowerUp(state.powerUps, state.powerUps[i]);
		}
	}
	
	for (let i = 0; i < state.powerUps2.length; i++) {
		if (state.snake.eatPowerUp2(state.powerUps2[i], p5)) {
			state.powerUps2Eaten += 1;
			getPowerUp2(state.powerUps2, state.powerUps2[i]);
		}
	}
	
		for (let i = 0; i < state.points.length; i++) {
			if (state.snake.pointMagnet(state.points[i], p5) && state.powerUpsEaten > 0) {
				console.log('magnetized');
			}
		}

	for (let i = 0; i < state.keys.length; i++) {
		if (state.snake.eatKey(state.keys[i], p5)) {
			getKey(p5, state.keys, state.keys[i]);
			state.keysToCollect -= 1;
		}
	}


	for (let i = 0; i < state.points.length; i++) {
			if (state.snake.eatPoint(state.points[i], p5)) {
				getPoint(state.points, state.points[i]);
				for (let i = 0; i < 10; i++) {
					state.snake.grow()
				}
				pointGet = true
				if (state.playerSpeed <= 3) {
					state.playerSpeed += 0.1;

				}
				state.scoreCount += 100;
			}
	}

	if (state.snake.hitTail(p5) && !pointGet) {
		snakeReset(p5)
		state.livesLeft -= 1;
	}

	for (let i = 0; i < state.enemies.length; i++) {
		if (state.snake.hitEnemy(state.enemies[i], p5)) {
			if (state.livesLeft >= 0) {
				snakeReset(p5);
				state.menu = false;
				state.livesLeft -= 1;
			}
		}
	}

	for(let i = 0; i < state.mVenom.length; i++) {
		for(let j = 0; j < state.enemies.length; j++) {
			if (state.mVenom[i].hits(state.enemies[j])) {
				state.enemies.splice(j, 1);
			}
		}
	}

	for (var i = state.mVenom.length - 1; i >= 0; i--) {
		state.mVenom[i].update(state.snake);
		state.mVenom[i].show(p5);
		if (state.mVenom[i].offscreen()) {
			state.mVenom.splice(i, 1);
		}
	}

	for (var i = 0; i < state.enemies.length; i++) {
		state.enemies[i].x = state.enemies[i].x + state.enemies[i].xspeed;
		state.enemies[i].y = state.enemies[i].y + state.enemies[i].yspeed;
		if (Math.floor(state.enemies[i].x) == 96 || Math.floor(state.enemies[i].x) == 6) {
			state.enemies[i].xspeed = state.enemies[i].xspeed * -1;
		}
		if (Math.floor(state.enemies[i].y) == 96 || Math.floor(state.enemies[i].y) == 6) {
			state.enemies[i].yspeed = state.enemies[i].yspeed * -1;
		}
	}

	
	for (var i = 0; i < state.doorTrigger.length; i++) {
		//NEXT LEVEL TRIGGER
		if (collide(state.doorTrigger[i], state.snake).totalDist && state.points.length === 0) {
			state.levelIndicator += 1;
			console.log(state.totalObstacles)
			if (state.levelIndicator % 2 === 0) {
				state.totalObstacles += 2;
			}
			reset(p5);
			state.menu = false;
			for (var i = 1; i <= state.levelIndicator; i++) {
				state.keysToCollect++;
				if (state.levelIndicator > 3) {
					state.keysToCollect = 3;
				}
			}
		} 
	}
}
}