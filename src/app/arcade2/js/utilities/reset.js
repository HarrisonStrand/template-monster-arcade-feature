import Player from '../entities/player';
import Enemy from '../entities/enemy';
import Platform from '../entities/platform';
import Lava from '../entities/lava';
import {Hud, Arrow} from '../utilities/hud'
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
	state.endingPlatform = new Platform(p5, state.windowWidth -4, state.windowHeight -10); //starting platform
	state.enemy = new Enemy(p5, state.windowWidth, state.windowHeight -6);
  state.hud = new Hud(state.mainFont);
  state.arrow = new Arrow();
  state.grid = [];
  state.enemies = [];
  state.columns.push(state.col1, state.col2, state.col3 , state.col4, state.col5, state.col6, state.col7, state.col8, state.col9, state.col10, state.col11, state.col12, state.col13, state.col14, state.col15)

  //GRID DISPLAY
  for (let a = 0; a < state.columns.length; a++) {
    for (let i = 0; i < 1; i++) {
      for (let k = 0; k < 5; k++) { 
        const spreadx = state.windowWidth / 15 + 15
        const spready = (state.windowHeight - 10) / 6 + 2
        const gridPoint = {
          x: Math.floor(spreadx * i + spreadx / 2),
          y: Math.floor(spready * k + spready / 2)
        }
        state.columns[a].push(gridPoint)
      }
    }
    for (let g = 0; g < state.columns[a].length; g ++) {
      state.columns[a][g].x += a * 11; // POSSIBLE FIX FOR RESIZING
    }
  }

  for (let i = 0; i < state.windowWidth / 2; i++) {
    state.lava[i] = new Lava(
      p5,
      i * 2,
      state.windowHeight,
      1,
      2,
      0,
      'rgb(255, 0, 0)',
    );
  }


  const set1 = [
    (state.columns[0][4]),
    (state.columns[1][3]),
    (state.columns[2][2]),
    (state.columns[3][1]),
    (state.columns[4][0]),
    (state.columns[5][1]),
    (state.columns[6][2]),
    (state.columns[7][3]),
    (state.columns[8][4]),
    (state.columns[9][3]),
    (state.columns[10][2]),
    (state.columns[11][1]),
    (state.columns[12][0]),
    (state.columns[13][1]),
    (state.columns[14][2])
  ]

  const set2 = [
    (state.columns[0][4]),
    (state.columns[2][4]),
    (state.columns[3][3]),
    (state.columns[5][3]),
    (state.columns[6][2]),
    (state.columns[8][2]),
    (state.columns[9][4]),
    (state.columns[11][3]),
    (state.columns[14][3])
  ]

  const set3 = [
    (state.columns[0][4]),
    (state.columns[3][3]),
    (state.columns[5][3]),
    (state.columns[6][2]),
    (state.columns[10][3]),
    (state.columns[14][3])
  ]

  const set4 = [
    (state.columns[2][4]),
    (state.columns[3][2]),
    (state.columns[5][3]),
    (state.columns[5][1]),
    (state.columns[9][2]),
    (state.columns[10][3]),
    (state.columns[14][3])
  ]

  const set5 = [
    (state.columns[1][4]),
    (state.columns[5][4]),
    (state.columns[6][2]),
    (state.columns[7][3]),
    (state.columns[8][4]),
    (state.columns[9][3]),
    (state.columns[10][2]),
    (state.columns[11][1]),
    (state.columns[12][0]),
    (state.columns[13][1]),
    (state.columns[14][2])
  ]

  state.platformSets.push(set1, set2, set3, set4, set5)
  let randomSet = state.platformSets[Math.floor(Math.random() * state.platformSets.length)]
  
  //PLATFORM SET DISPLAY
  // for (let x = 0; x < state.numberOfPlatforms; x++) {
  //   for (let a = 0; a < set5.length; a ++) {
  //     const newPlatform = new Platform(
  //       p5, 
  //       set5[a].x,
  //       set5[a].y,
  //       )
  //       state.platforms.push(newPlatform)
  //     }
  // }
  
  //PLATFORM SET DISPLAY
  for (let x = 0; x < state.numberOfPlatforms; x++) {
    for (let a = 0; a < randomSet.length; a ++) {
      const newPlatform = new Platform(
        p5, 
        randomSet[a].x,
        randomSet[a].y,
        )
        state.platforms.push(newPlatform)
      }
  }

  for (let i = 0; i < state.numberOfEnemies; i ++) {
    const newEnemy = new Enemy(
      p5, 
      state.windowWidth, 
      state.windowHeight -6
    )
    state.enemies.push(newEnemy);
  }

}