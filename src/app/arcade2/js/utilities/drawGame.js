import { state } from '../game/state'


export const drawGame = (p5) => {
	p5.scale(state.rez);
	p5.background(0);
	state.player.onStartingPlatform();
	state.player.onEndingPlatform();
	state.player.onPlatform();


	var gravity = p5.createVector(0, 0.1);
	state.player.applyForce(gravity);
	state.player.update();
	state.player.lava();
	state.player.render(p5);
	state.enemy.update();
	state.enemy.render(p5);
	state.startingPlatform.render(p5);
	state.endingPlatform.render(p5);

	for (let i = 0; i < state.platforms.length; i ++) {
		state.platforms[i].render(p5);
	}


	for (let i = 0; i < state.columns.length; i ++) {
		for (let k = 0; k < state.columns[i].length; k ++) {
			p5.push();
			p5.fill('green')
			p5.noStroke();
			p5.rectMode(p5.CENTER);
			p5.ellipse(state.columns[i][k].x, state.columns[i][k].y, 2, 2)
			p5.pop();
		}
	}
}