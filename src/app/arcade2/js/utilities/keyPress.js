import { state } from "../game/state";

export const move = (p5) => {
  if (p5.keyIsDown(p5.RIGHT_ARROW)) {
    state.player.pos.x += 1;
  } else if (p5.keyIsDown(p5.LEFT_ARROW) && (Math.floor(state.player.pos.y) != Math.floor(state.endingPlatform.pos.y - 4))) {
    state.player.pos.x += -1;
  }
};

export const jump = (p5) => {
  if (p5.keyCode == (p5.UP_ARROW)) {
    if (Math.floor(state.player.pos.y) == Math.floor(state.startingPlatform.pos.y - 4)) {
      if (Math.floor(state.player.pos.x) <= Math.floor(state.startingPlatform.pos.x + 6) && Math.floor(state.player.pos.x) >= Math.floor(state.startingPlatform.pos.x - 6)) {
        state.player.applyForce(state.player.jump);
      }
    }
    for (let i = 0; i < state.platforms.length; i ++) {
      if (Math.floor(state.player.pos.y) == Math.floor(state.platforms[i].pos.y - 4)) {
        if (Math.floor(state.player.pos.x) <= Math.floor(state.platforms[i].pos.x + 6) && Math.floor(state.player.pos.x) >= Math.floor(state.platforms[i].pos.x - 6)) {
          state.player.applyForce(state.player.jump);
        }
      }
    }
  }
};