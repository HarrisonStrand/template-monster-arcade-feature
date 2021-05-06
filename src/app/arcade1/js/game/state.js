//MAIN COLORS
const arcadeColorOne = 'red' //red
const arcadeColorTwo = 'white' //white
const arcadeColorThree = '#0400ff' //blue
const arcadeColorFour = "#C9FF00" //snake green
const arcadeColorFive = 'rgba(255, 0, 0, .3)'; //red shadow
const arcadeColorSix = 'rgb(218,165,32)'; //gold
const arcadeColorSeven = 'rgba(218,165,32, .3)'; //gold shadow
const arcadeColorEight = 'black'//black
const arcadeColorNine = 'rgb(91,131,145)';//cyan
const arcadeColorTen = 'rgba(91,131,145,.3)';//cyan shadow

//I'm a little confused here... So if we had Green, Red and Blue as our 
  
  export var state = {
  arcadeColor1: arcadeColorOne,
  arcadeColor2: arcadeColorTwo,
  arcadeColor3: arcadeColorThree,
  arcadeColor4: arcadeColorFour,
  arcadeColor5: arcadeColorFive,
  arcadeColor6: arcadeColorSix,
  arcadeColor7: arcadeColorSeven,
  arcadeColor8: arcadeColorEight,
  arcadeColor9: arcadeColorNine,
  arcadeColor10: arcadeColorTen,

  clientNameText: 'Hubb',
  clientLogo: null,
  snake: null,
  enemy: null,
  hud: null,
  obstacle: null,
  point: null,
  powerUp: null,
  powerUp2: null,
  menuPowerUp: null,
  key: null,
  w: null,
  h: null,
  mainFont: null,
  hittingTail: false,
  move: false,
  menu: true,
  gameOver: false,
  mVenom: [],
  enemies: [],
  obstacles: [],
  points: [],
  powerUps: [],
  powerUps2: [],
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
  grid: [],
  rez: 10,
  scoreCount: 0,
  numberOfObstacles: 0,
  sizeOfObstacles: 8, // NO HIGHER THAN 8!! MAYBE DO RANDOM??
  numberOfPoints: 2,
  pointSpread: 2, // EVEN NUMBERS ONLY! HIGHER IS MORE SPREAD AND LESS POINTS
  numberOfPowerUps: 1,
  numberOfKeys: 1,
  keysToCollect: 1,
  numberOfEnemies: 0,
  levelIndicator: 1,
  livesLeft: 3,
  enemySpeed: .5,
  playerSpeed: 1,
  frameRate: 30,
  pointSpeed: .5,
  pointsEaten: 0,
  powerUpsEaten: 0,
  powerUps2Eaten: 0,
};
