import Player from '../entities/player';
import { Enemy, Layer1, Layer2 } from '../entities/enemy';
import Platform from '../entities/platform';
import Background from '../entities/background'
import { MenuPlayer } from '../utilities/menu'
import Lava from '../entities/lava';
import { Hud, Arrow } from '../utilities/hud'
import { state } from "../game/state";
import { backgroundMusic } from '../utilities/utilities'

//add trail for player when jumping and moving
//add enemy layers for more difficulty and more shots
//add different platform sizes

export const reset = (p5, canvas) => {
  
  //CANVAS SETTINGS
	canvas = p5.createCanvas(p5.windowWidth * .95, p5.windowHeight * .95);
	canvas.parent('arcade2-container');
	// p5.pixelDensity(1);
	state.w = p5.windowWidth / state.rez;
  state.h = (p5.windowWidth * 0.714) / state.rez;
	state.windowWidth = (p5.windowWidth * 0.95) / state.rez;
  state.windowHeight = (p5.windowHeight * 0.95) / state.rez;
  p5.frameRate(state.frameRate);

  //ENTITIY INITIALIZATION
  state.gameOver = false;
	state.player = new Player(p5, 4, state.windowHeight -25);
	state.startingPlatform = new Platform(p5, 4, state.windowHeight -10, 'white', 'green', 8); //starting platform
	state.endingPlatform = new Platform(p5, state.windowWidth -4, state.windowHeight -10, 'white', 'red', 8); //ending platform
  state.hud = new Hud(state.platformFont);
  state.backgrounds.push(state.mountains, state.mountains2, state.mountains3);
  let randomBackground = state.backgrounds[Math.floor(Math.random() * state.backgrounds.length)]
  state.backgroundImage = new Background(p5, state.windowWidth /2, state.windowHeight/2, state.windowWidth * 2, state.windowHeight * 3.5, randomBackground)
  state.arrow = new Arrow();

  //ARRAY INITIALIZATION
  state.grid = [];
  state.enemies = [];
  state.enemyLayer1 = [];
  state.enemyLayer2 = [];
  state.columns = [];
  state.platforms = [];
  state.platformSets = [];
  state.col1 = [],
	state.col2 = [],
	state.col3 = [],
	state.col4 = [],
	state.col5 = [],
	state.col6 = [],
	state.col7 = [],
	state.col8 = [],
	state.col9 = [],
	state.col10 = [],
	state.col11 = [],
	state.col12 = [],
	state.col13 = [],
	state.col14 = [],
	state.col15 = [],

  //GRID ARRAY COLUMN LAYOUT
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
      state.columns[a][g].x += a * 11; // POSSIBLE FIX FOR DYNAMIC RESIZING
    }
  }

  //LAVA DISPLAY
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

  //PLATFORM LAYOUT SETS
  const platformSet1 = [
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

  const platformSet2 = [
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

  const platformSet3 = [
    (state.columns[0][4]),
    (state.columns[3][3]),
    (state.columns[5][3]),
    (state.columns[6][2]),
    (state.columns[10][3]),
    (state.columns[14][3])
  ]

  const platformSet4 = [
    (state.columns[2][4]),
    (state.columns[3][2]),
    (state.columns[5][3]),
    (state.columns[5][1]),
    (state.columns[9][2]),
    (state.columns[10][3]),
    (state.columns[14][3])
  ]

  const platformSet5 = [
    (state.columns[1][4]),
    (state.columns[5][4]),
    (state.columns[6][2]),
    (state.columns[7][3]),
    (state.columns[8][4]),
    (state.columns[10][2]),
    (state.columns[14][2])
  ]

  const platformSet6 = [
    (state.columns[1][4]),
    (state.columns[2][3]),
    (state.columns[1][2]),
    (state.columns[2][1]),
    (state.columns[7][3]),
    (state.columns[10][3]),
    (state.columns[13][3]),
  ]
  const platformSet7 = [
    (state.columns[1][4]),
    (state.columns[3][4]),
    (state.columns[5][4]),
    (state.columns[6][3]),
    (state.columns[5][2]),
    (state.columns[8][1]),
    (state.columns[10][2]),
    (state.columns[12][3]),
  ]

  const platformSet8 = [
    (state.columns[1][4]),
    (state.columns[1][3]),
    (state.columns[1][2]),
    (state.columns[1][1]),
    (state.columns[2][1]),
    (state.columns[3][1]),
    (state.columns[4][1]),
    (state.columns[5][1]),
    (state.columns[6][1]),
    (state.columns[7][1]),
    (state.columns[8][1]),
    (state.columns[9][1]),
    (state.columns[10][1]),
    (state.columns[11][1]),
    (state.columns[12][1]),

  ]

  const platformSet9 = [
    (state.columns[1][4]),
    (state.columns[3][3]),
    (state.columns[5][4]),
    (state.columns[7][3]),
    (state.columns[9][4]),
    (state.columns[11][3]),
    (state.columns[13][4]),
    
  ]

  const platformSet10 = [
    (state.columns[1][4]),
    (state.columns[3][3]),
    (state.columns[5][4]),
    (state.columns[7][3]),
    (state.columns[9][4]),
    (state.columns[11][3]),
    (state.columns[13][4]),

  ]

  state.platformSets.push(platformSet1, platformSet2, platformSet3, platformSet4, platformSet5, platformSet6, platformSet7, platformSet8, platformSet9)
  let randomPlatformSet = state.platformSets[Math.floor(Math.random() * state.platformSets.length)]
  
  // PLATFORM TEST DISPLAY
  for (let x = 0; x < state.numberOfPlatforms; x++) {
    for (let a = 0; a < platformSet10.length; a ++) {
      const newPlatform = new Platform(
        p5, 
        platformSet10[a].x,
        platformSet10[a].y,
        'white',
        'black',
        6
        )
        state.platforms.push(newPlatform)
      }
  }
  
  // //PLATFORM SET DISPLAY
  // for (let x = 0; x < state.numberOfPlatforms; x++) {
  //   for (let a = 0; a < randomPlatformSet.length; a ++) {
  //     const newPlatform = new Platform(
  //       p5, 
  //       randomPlatformSet[a].x,
  //       randomPlatformSet[a].y,
  //       'white',
  //       'black',
  //       p5.random(2,10)//MESS WITH SIZING??
  //       )
  //       state.platforms.push(newPlatform)
  //     }
  // }
  if (state.levelIndicator > 2 && state.levelIndicator % 3 === 0) {
    state.numberOfEnemies += 1;
  }
  //ENEMIES DISPLAY
  for (let i = 0; i < state.numberOfEnemies; i ++) {
    const newEnemy = new Enemy(
      p5, 
      state.windowWidth, 
      p5.random(4, 80)
      )
      state.enemies.push(newEnemy)
    }
    for (let x = 0; x < state.numberOfEnemies; x ++) {
      const layer1 = new Layer1(
        p5, 
        state.windowWidth, 
        state.enemies[x].pos.y
        )
        state.enemyLayer1.push(layer1)
    }
    for (let g = 0; g < state.numberOfEnemies; g ++) {
      const layer2 = new Layer2(
        p5, 
        state.windowWidth, 
        state.enemies[g].pos.y
        )
        state.enemyLayer2.push(layer2)
    }



    state.menuPlayer = new MenuPlayer(p5, state.windowWidth, state.windowHeight)
}