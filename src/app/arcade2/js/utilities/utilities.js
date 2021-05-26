import Player from "../entities/player"
import Background from '../entities/background'
import { Enemy, Layer1, Layer2 } from "../entities/enemy"
import { state } from '../game/state'
import * as Tone from 'tone'

export const playerReset = (p5) => {
  state.player = new Player(p5, 4, state.windowHeight -25);
};

export const backgroundReset = (p5) => {
	let randomBackground = state.backgrounds[Math.floor(Math.random() * state.backgrounds.length)]
  state.backgroundImage = new Background(p5, state.windowWidth /2, state.windowHeight /2, state.windowWidth * 2, state.windowHeight * 3.5, randomBackground)
};

export const enemyReset = (p5) => {
	for (let i = 0; i < state.enemies.length; i ++) {
		state.enemies[i] = new Enemy(p5, state.windowWidth, p5.random(4, 80))
		state.enemyLayer1[i] = new Layer1(p5, state.windowWidth, state.enemies[i].pos.y)
		state.enemyLayer2[i] = new Layer2(p5, state.windowWidth, state.enemies[i].pos.y)
	}
};

export const backgroundMusic = (p5) => {
	const music = new Tone.Player({
		"url" : "../../assets/sounds/background1.wav",
		"autostart" : true,
		'loop' : true,
		'mute' : false
	}).toDestination();
	if (p5.key == 'm') {
		music.mute = true;
	}
}

export const jumpSound = () => {
	const jumpFX = new Tone.Player("../../assets/sounds/JUMP.wav").toDestination();
	Tone.loaded().then(() => {
		jumpFX.start();
	});
}

export const shootSound = () => {
	const shootFX = new Tone.Player("../../assets/sounds/SHOOT.wav").toDestination();
	Tone.loaded().then(() => {
		shootFX.start();
	});
}

export const playerDieSound = () => {
	const playerDieFX = new Tone.Player("../../assets/sounds/PLAYER_DIE.wav").toDestination();
	Tone.loaded().then(() => {
		playerDieFX.start();
	});
}

export const nextLevelSound = () => {
	const nextLevelFX = new Tone.Player("../../assets/sounds/NEXT_LEVEL.wav").toDestination();
	Tone.loaded().then(() => {
		nextLevelFX.start();
	});
}

export const enemyHitSound = () => {
	const enemyHitFX = new Tone.Player("../../assets/sounds/ENEMY_HIT.wav").toDestination();
	Tone.loaded().then(() => {
		enemyHitFX.start();
	});
}