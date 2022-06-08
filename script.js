/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
const STARTSCHERM = 3;
var spelStatus = STARTSCHERM;

var playerX = 600; // x-positie van speler
var playerY = 600; // y-positie van speler
var enemyX = 100;  // x-positie van vijand
var enemyY = 100;  // y-positie van vijand

var PLAYER_LEFT = 65;  // Key A
var PLAYER_RIGHT = 68; // Key D
var PLAYER_UP = 87;    // Key W
var PLAYER_DOWN = 83;  // Key S
var KEY_SPACEBAR = 32; // Key Spacebar
var KEY_INTERACT = 69; // E-Key for Interaction
var KEY_ENTER = 13;    // Enter key to reset game

var HP = 100
var enemyHP = 10

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var playerMovement = function () {
  if (keyIsDown(PLAYER_LEFT)) {
		playerX = playerX - 7;
	}
  if (keyIsDown(PLAYER_RIGHT)) {
    playerX = playerX + 7;
  }
	if (keyIsDown(PLAYER_UP)) {
    playerY = playerY - 7;
  }
	if (keyIsDown(PLAYER_DOWN)) {
    playerY = playerY + 7;
  }
};
  // vijand

var enemyAI = function () {
	
}
  // kogel

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
	if (playerX - enemyX < 50 &&
	    playerX - enemyX >-50 &&
	    playerY - enemyY < 50 &&
	    playerY - enemyY >-50) {
	  console.log("botsing");
		HP = HP - 1;
	}
  // botsing zwaard tegen vijand

  // update punten en health
};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  background('#1A4314');
  // vijand
  fill("red");
	rect(enemyX, enemyY, 50, 50);
	fill("black");
	ellipse(enemyX + 25, enemyY + 25, 10, 10);
  // speler
  fill("white");
  rect(playerX, playerY, 50, 50);
  fill("black");
  ellipse(playerX + 25, playerY + 25, 10, 10);

  // punten en health
	fill("red");
	rect(0, 0, 200, 50);
	textSize(32);
	fill("white");
	text("HP: " + HP, 0, 0, 200, 50);

};
/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
	if (HP === -1) {
		return true;
	}
	else {
	  return false;
	}
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
	background("blue");
}
/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    playerMovement();
		enemyAI();
    tekenAlles();
    verwerkBotsing();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }

    // teken game-over scherm
	if (spelStatus === STARTSCHERM) {
    background("black");
    fill ("white");
    textSize (60);
    text ("Ardok", 530, 220, width/3, height/3);
    textSize (30);
    text ("Press enter to play", 500, 400);
    textFont ("BlackChancery");
    if (keyIsDown(KEY_ENTER)) {
      playerX = 600;
      playerY = 600;
      spelStatus = SPELEN;
      hp = 100;
    }
  }
  if (spelStatus === GAMEOVER) {
		background("black")
    fill ("white");
    textSize (60);
		text("GAME OVER", width/3, height/2);
    color (250, 0, 0);
    textFont ("BlackChancery");
    textSize (100);
    text ("Ardok", 480, 220, width/3, height/3);
    textSize (30);
    text ("Press enter to play", 500, 450);
    textSize (30);
    text ("Press spacebar to exit", 485, 500);
    
    if (keyIsDown(KEY_SPACEBAR)) {
      spelStatus = STARTSCHERM;
    }
    if (keyIsDown(KEY_ENTER)) {
      playerX = 600;
      playerY = 600;
      HP = 100;
      spelStatus = SPELEN;
    }
  }
}
