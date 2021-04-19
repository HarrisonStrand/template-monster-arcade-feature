import Snake from '../entities/snake';

const arcadeColor1 = '#aaa9ad';
const arcadeColor2 = 'blue';
const arcadeColor3 = '#4E0DFF';

export var state = {
  borderColor1: arcadeColor1,
  doorTriggerColor: arcadeColor2,
  mainTextFillColor: arcadeColor3,
  snake: null,
  enemy: null,
  hud: null,
  obstacle: null,
  point: null,
  powerUp: null,
  menuPowerUp: null,
  key: null,
  w: null,
  h: null,
  mainFont: null,
  move: false,
  menu: true,
  mVenom: [],
  enemies: [],
  obstacles: [],
  points: [],
  powerUps: [],
  menuPowerUps: [],
  keys: [],
  // turn into border object
  topBorder: [],
  rightBorderTop: [],
  rightBorderBottom: [],
  bottomBorder: [],
  leftBorderTop: [],
  leftBorderBottom: [],
  //
  doorTrigger: [],
  rez: 10,
  scoreCount: 0,
  numberOfObstacles: 20,
  sizeOfObstacles: 8, // NO HIGHER THAN 8!! MAYBE DO RANDOM??
  numberOfPoints: 100,
  pointSpread: 4, // EVEN NUMBERS ONLY! HIGHER IS MORE SPREAD AND LESS POINTS
  numberOfPowerUps: 3,
  numberOfKeys: 1,
  keysToCollect: 1,
  numberOfEnemies: 2,
  levelIndicator: 1,
  livesLeft: 3,
};
