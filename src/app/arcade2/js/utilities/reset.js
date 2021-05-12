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
	state.endingPlatform = new Platform(p5, state.windowWidth -4, state.windowHeight -10); //starting platform
	state.enemy = new Enemy(p5, state.windowWidth, state.windowHeight -6);
  state.grid = [];
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

  //PLATFORM RANDOM DISPLAY
  for (let x = 0; x < state.numberOfPlatforms; x++) {
    for (let a = 0; a < set1.length; a += 2) {
        const newPlatform = new Platform(
          p5, 
          set1[a].x,
          set1[a].y,
          )
          state.platforms.push(newPlatform)
    }
  }
//   //PLATFORM RANDOM DISPLAY
//   for (let x = 0; x < state.numberOfPlatforms; x++) {
//     for (let a = 0; a < state.columns.length; a +=2) {
//       const set1 = [(state.columns[a][4]), (state.columns[a][2])]
//       const random = Math.floor(p5.random(state.columns[a].length))
//         const newPlatform = new Platform(
//           p5, 
//           state.columns[a][random].x,
//           state.columns[a][random].y,
//           )
//           state.columns[a].splice(random, 1)
//           state.platforms.push(newPlatform)
//     }
//   }
}