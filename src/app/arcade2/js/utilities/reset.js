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
	state.player = new Player(p5, 4, state.windowHeight -25);
	state.startingPlatform = new Platform(p5, 4, state.windowHeight -10); //starting platform
	state.enemy = new Enemy(p5, state.windowWidth, state.windowHeight -6);


	for (let i = 0; i < state.numberOfPlatforms; i ++) {
    state.platform = new Platform(
      p5,
      p5.random(3, 97),
      p5.random(3, 97),
    );
    var overlapping = false;
    // for (let j = 0; j < state.platforms.length; j++) {
    //   var other = state.platforms[j];
    //   var d = p5.dist(state.platform.x, state.platform.y, other.x, other.y);
    //   if (d < state.platform.y + 4 + other.y) {
    //     overlapping = true;
    //     break;
    //   }
    // }
    if (!overlapping) {
      state.platforms.push(state.platform);
    }

	// while (state.platforms.length < state.numberOfPlatforms) {
  //   state.platform = new Platform(
  //     p5,
  //     p5.random(3, 97),
  //     p5.random(3, 97),
  //   );
  //   var overlapping = false;
  //   // for (let j = 0; j < state.platforms.length; j++) {
  //   //   var other = state.platforms[j];
  //   //   var d = p5.dist(state.platform.x, state.platform.y, other.x, other.y);
  //   //   if (d < state.platform.y + 4 + other.y) {
  //   //     overlapping = true;
  //   //     break;
  //   //   }
  //   // }
  //   if (!overlapping) {
  //     state.platforms.push(state.platform);
  //   }
  }




}