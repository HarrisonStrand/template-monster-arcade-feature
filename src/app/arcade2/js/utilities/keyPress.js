import { state } from "../game/state";
import Shot from '../entities/shot'
import { reset } from "./reset";

export const move = (p5) => {
  if (p5.keyIsDown(p5.RIGHT_ARROW) && state.gameOver == false) {
    state.player.pos.x += 1;
    state.player.xidir = 1;
    state.backgroundImage.pos.x -=.2;
  } else if (p5.keyIsDown(p5.LEFT_ARROW) && (Math.floor(state.player.pos.y) != Math.floor(state.endingPlatform.pos.y - 4))) {
    state.player.pos.x += -1;
    state.player.xdir = -1;
    state.backgroundImage.pos.x +=.2;
  } else if (p5.keyCode == p5.ENTER && state.menu || p5.keyCode == p5.ENTER && state.gameOver) {
    reset(p5);
    state.menu = false;
    state.livesLeft = 3;
    state.levelIndicator = 1;
  } else if (p5.keyCode == p5.ESCAPE) {
    state.menu = true;
  }
};

export const shoot = (p5) => {
  if (p5.key == " ") {
    state.bullets.push(
      new Shot(
        p5,
        state.player.pos.x,
        state.player.pos.y,
        1.2,
        state.player
      )
    );
  }
}

export const jump = (p5) => {
  if (p5.keyCode == (p5.UP_ARROW)) {
    state.backgroundImage.applyForce(state.backgroundImage.jump)
    if (Math.floor(state.player.pos.y) == Math.floor(state.startingPlatform.pos.y - 4)) {
      if (Math.floor(state.player.pos.x) <= Math.floor(state.startingPlatform.pos.x + state.startingPlatform.w) && Math.floor(state.player.pos.x) >= Math.floor(state.startingPlatform.pos.x - state.startingPlatform.w)) {
        state.player.applyForce(state.player.jump);
      }
    }
    for (let i = 0; i < state.platforms.length; i ++) {
      if (Math.floor(state.player.pos.y) == Math.floor(state.platforms[i].pos.y - 4)) {
        if (Math.floor(state.player.pos.x) <= Math.floor(state.platforms[i].pos.x + state.platforms[i].w) && Math.floor(state.player.pos.x) >= Math.floor(state.platforms[i].pos.x - state.platforms[i].w)) {
          state.player.applyForce(state.player.jump);
        }
      }
    }
  }
};