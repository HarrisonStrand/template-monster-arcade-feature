import { state } from "../game/state";

export const move = (p5) => {
  if (p5.keyIsDown(p5.RIGHT_ARROW)) {
    state.player.pos.x += 1;
  } else if (p5.keyIsDown(p5.LEFT_ARROW)) {
    state.player.pos.x += -1;
  }
};

export const jump = (p5) => {
  if (p5.keyCode == (p5.UP_ARROW)) {
    state.player.jump = p5.createVector(0, -2);
    state.player.applyForce(state.player.jump);
  }
};