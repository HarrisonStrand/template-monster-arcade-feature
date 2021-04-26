const arcadeColor1 = '#4E0DFF';
const arcadeColor2 = 'red';
const arcadeColor3 = 'rgba(255, 0, 0, .3)';
const arcadeColor4 = 'white';
const arcadeColor5 = '#66ff00';
const arcadeColor6 = 'cyan';
const arcadeColor7 = '#0400ff';
const arcadeColor8 = '#0300BB';
const arcadeColor9 = '#030088';
const arcadeColor10 = '#02006D';
const arcadeColor11 = '#020061';
const arcadeColor12 = '#030159';
const arcadeColor13 = '#010054';
const arcadeColor14 = 'rgb(218,165,32)';
const arcadeColor15 = 'rgba(218,165,32, .3)';
const arcadeColor16 = 'black';
const arcadeColor17 = 'black';
const arcadeColor18 = '#0310ea';
const arcadeColor19 = '#fb33db';
const arcadeColor20 = '#7fff00';
const arcadeColor21 = 'white';
const arcadeColor22 = 'blue';
const arcadeColor23 = '#77fc03';
const arcadeColor24 = 'red';
const arcadeColor25 = '#77fc03';
const arcadeColor26 = 'blue';
const arcadeColor27 = '#77fc03';
const arcadeColor28 = '#ff0000';
const arcadeColor29 = '#ff0000';
const arcadeColor30 = '#ff03ab';
const arcadeColor31 = 'green';
const arcadeColor32 = '#4E0DFF';
const arcadeColor33 = 'white';
const arcadeColor34 = '#4E0DFF';
const arcadeColor35 = 'white';
const arcadeColor36 = '#4E0DFF';
const arcadeColor37 = 'white';
const arcadeColor38 = '200';
const arcadeColor39 = 'white';
const arcadeColor40 = 'red';
const arcadeColor41 = 'white';
const arcadeColor42 = '#4E0DFF';
const arcadeColor43 = 'white';
const arcadeColor44 = '#4E0DFF';
const arcadeColor45 = 'white';

export var state = {
  mainTextFillColor: arcadeColor1, //purpleish
  powerUpMainColor: arcadeColor2,
  powerUpShadowColor: arcadeColor3,
  powerUpLetterColor: arcadeColor4,
  snakeMainColor: arcadeColor5,
  venomMainColor: arcadeColor6,
  obstaclesStroke1: arcadeColor7,
  obstaclesStroke2: arcadeColor8,
  obstaclesStroke3: arcadeColor9,
  obstaclesStroke4: arcadeColor10,
  obstaclesStroke5: arcadeColor11,
  obstaclesStroke6: arcadeColor12,
  obstaclesStroke7: arcadeColor13,
  keyMainColor: arcadeColor14,
  keyShadowColor: arcadeColor15,
  keyLetterColor: arcadeColor16,
  enemyMainColor: arcadeColor17,
  gameBorderStroke1: arcadeColor18,
  gameBorderStroke2: arcadeColor19,
  gameBorderStroke3: arcadeColor20,
  gridPointsColor: arcadeColor21,
  menuBorderStroke1: arcadeColor22,
  menuBorderStroke2: arcadeColor23,
  menuBorderStroke3: arcadeColor24,
  menuTitleStroke1: arcadeColor25,
  menuTitleStroke2: arcadeColor26,
  menuGoalText: arcadeColor27,
  menuControlsText1: arcadeColor28,
  menuControlsText2: arcadeColor29,
  menuStartGameText1: arcadeColor30,
  menuStartGameText2: arcadeColor31,
  scoreTextFill: arcadeColor32,
  scoreTextStroke: arcadeColor33,
  scoreNumberFill: arcadeColor34,
  scoreNumberStroke: arcadeColor35,
  livesLeftTextFill: arcadeColor36,
  livesLeftTextStroke: arcadeColor37,
  legendTextFill: arcadeColor38,
  legendTextStroke: arcadeColor39,
  gameOverTextFill: arcadeColor40,
  gameOverTextStroke: arcadeColor41,
  keysRemainingTextFill: arcadeColor42,
  keysRemainingTextStroke: arcadeColor43,
  levelIndicatorTextFill: arcadeColor44,
  levelIndicatorTextStroke: arcadeColor45,
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
  enemySpeed: .5
};
