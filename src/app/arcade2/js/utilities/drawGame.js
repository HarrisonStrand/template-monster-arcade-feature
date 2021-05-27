import { state } from '../game/state'
import {
	enemyReset,
	playerReset,
	backgroundReset,
	playerDieSound,
	nextLevelSound,
	enemyHitSound,
	backgroundMusic
} from '../utilities/utilities'
import { reset } from './reset';
import { drawMenu } from './menu'


export const drawGame = (p5) => {
	
	p5.scale(state.rez);
	p5.background(state.mountains);
	if (state.menu) {
		drawMenu(p5, state.platformFont, state.windowWidth, state.windowHeight);
		state.menuPlayer.render(p5, state.windowWidth, state.windowHeight)

		} else {

		//BACKGROUND PARALLAX AND IMAGE CHANGE
		var gravity2 = p5.createVector(0, -0.1);
		if (state.player.onPlatform()) {
			gravity2 = p5.createVector(0, 0);
			state.backgroundImage.vel.y *= 0;
		}
		state.backgroundImage.applyForce(gravity2)
		state.backgroundImage.update();
		state.backgroundImage.render(p5);
		for (let i = 0; i <= state.levelIndicator; i ++) {
			state.backgroundImage.image = state.backgrounds[i]
		}


		//PLAYER VELOCITY AND GRAVITY
		p5.angleMode(p5.DEGREES);
		var gravity = p5.createVector(0, 0.1);
		state.player.applyForce(gravity);
		state.player.update();
		state.player.render(p5);
		state.player.onStartingPlatform();
		state.player.onEndingPlatform();
		state.player.onPlatform();

		//ENEMIES
			for (let i = 0; i < state.enemies.length; i ++) {
				state.enemies[i].render(p5);
				state.enemies[i].update()
			}
			for (let i = 0; i < state.enemyLayer1.length; i ++) {
				state.enemyLayer1[i].render(p5);
				state.enemyLayer1[i].update()
			}
			for (let i = 0; i < state.enemyLayer2.length; i ++) {
				state.enemyLayer2[i].render(p5);
				state.enemyLayer2[i].update()
			}

		// //GRID VISUAL
		// for (let i = 0; i < state.columns.length; i ++) {
		// 	for (let k = 0; k < state.columns[i].length; k ++) {
		// 		p5.push();
		// 		p5.fill('green')
		// 		p5.noStroke();
		// 		p5.rectMode(p5.CENTER);
		// 		p5.ellipse(state.columns[i][k].x, state.columns[i][k].y, 2, 2)
		// 		p5.pop();
		// 	}
		// }

		//PLATFORMS
		state.startingPlatform.render(p5);
		state.endingPlatform.render(p5);
		for (let i = 0; i < state.platforms.length; i ++) {
			state.platforms[i].render(p5);
		}

		//WALLS
		for (let i = 0; i < state.walls.length; i++) {
			state.walls[i].render(p5)
		}

		//LAVA RENDERING
		// for (var i = 0; i < state.lava.length; i++) {
		// 	state.lava[i].render(p5);
		// }

		//HITTING LAVA
			if (state.player.pos.y >= state.windowHeight -4) {
				playerDieSound();
				playerReset(p5);
				backgroundReset(p5);
				state.livesLeft -= 1;
			}

		//NEXT LEVEL INDICATOR
		if (state.player.onEndingPlatform()) {
			state.arrow.render(p5);
		}

		//HITTING NEXT LEVEL
		if ((Math.floor(state.player.pos.y) == Math.floor(state.windowHeight -14)) && (Math.floor(state.player.pos.x -2) == Math.floor(state.windowWidth))) {
			nextLevelSound();
			reset(p5);
			state.levelIndicator += 1;
		}

		//HITTING ENEMY
		for (let j = 0; j < state.enemies.length; j++) {
			var other = state.enemies[j];
			var d = p5.dist(state.player.pos.x, state.player.pos.y, other.pos.x, other.pos.y);
			if (d < Math.floor(state.player.r -5) + Math.floor(other.r)) {
				playerDieSound();
				playerReset(p5);
				state.livesLeft -= 1;
			}
		}
		for (let j = 0; j < state.enemyLayer1.length; j++) {
			var other = state.enemyLayer1[j];
			var d = p5.dist(state.player.pos.x, state.player.pos.y, other.pos.x, other.pos.y);
			if (d < Math.floor(state.player.r -5) + Math.floor(other.r)) {
				playerReset(p5);
				state.livesLeft -= 1;
			}
		}
		for (let j = 0; j < state.enemyLayer2.length; j++) {
			var other = state.enemyLayer2[j];
			var d = p5.dist(state.player.pos.x, state.player.pos.y, other.pos.x, other.pos.y);
			if (d < Math.floor(state.player.r -5) + Math.floor(other.r)) {
				playerReset(p5);
				state.livesLeft -= 1;
			}
		}

		//ENEMY RESET
		for (let i = 0; i < state.enemies.length; i ++) {
			if (state.enemies[i].pos.x < 0) {
				enemyReset(p5);
			}
		}

		//SHOOTING ENEMY
		for(let i = 0; i < state.bullets.length; i ++) {
			for(let j = 0; j < state.enemies.length; j ++) {
				if (state.bullets[i].hits(state.enemies[j])) {
					enemyHitSound();
					state.enemies.splice(j, 1);
					state.bullets.splice(i, 1);
				}
			}
		}
		for(let p = 0; p < state.bullets.length; p ++) {
			for(let x = 0; x < state.enemyLayer1.length; x ++) {
				if (state.bullets[p].hits(state.enemyLayer1[x])) {
					enemyHitSound();
					state.enemyLayer1.splice(x, 1);
					state.bullets.splice(p, 1);
				}
			}
		}
		for(let l = 0; l < state.bullets.length; l ++) {
			for(let r = 0; r < state.enemyLayer2.length; r ++) {
				if (state.bullets[l].hits(state.enemyLayer2[r])) {
					enemyHitSound();
					state.enemyLayer2.splice(r, 1);
					state.bullets.splice(l, 1);
				}
			}
		}

		//BULLETS OFFSCREEN & MOVE
		for (var i = state.bullets.length - 1; i >= 0; i--) {
			state.bullets[i].update(state.player);
			state.bullets[i].render(p5);
			if (state.bullets[i].offscreen()) {
				state.bullets.splice(i, 1);
			}
		}

			//HUD & MENU
			state.hud.render(p5, state.levelIndicator);
	}
}