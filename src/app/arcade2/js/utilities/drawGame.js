import { state } from '../game/state'


export const drawGame = (p5) => {
	p5.scale(state.rez);
	p5.background(0);
	// console.log(Math.floor(state.player.pos.y), Math.ceil(state.platform.pos.y))
	state.player.onPlatform(p5, state.platform);

	var gravity = p5.createVector(0, 0.1);
	state.player.applyForce(gravity);
	state.player.update();
	state.player.lava();
	state.player.render(p5);
	state.enemy.update();
	state.enemy.render(p5);
	state.platform.render(p5);
	
}