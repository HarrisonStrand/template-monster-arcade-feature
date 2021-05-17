import Player from "../entities/player"
import Lava from '../entities/lava'
import { state } from '../game/state'
import * as p5 from 'p5'

export const playerReset = (p5) => {
  state.player = new Player(p5, 4, state.windowHeight -25);
};