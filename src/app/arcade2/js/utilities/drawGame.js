import { state } from '../game/state'


export const drawGame = (p5) => {
	p5.scale(state.rez);
	p5.background(0);
	state.player.onStartingPlatform();
	state.player.onPlatform();


	var gravity = p5.createVector(0, 0.1);
	state.player.applyForce(gravity);
	state.player.update();
	state.player.lava();
	state.player.render(p5);
	state.enemy.update();
	state.enemy.render(p5);
	state.startingPlatform.render(p5);

	for (let i = 0; i < state.platforms.length; i ++) {
		state.platforms[i].render(p5);
	}
}