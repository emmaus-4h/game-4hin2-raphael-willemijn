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
const UITLEG = 3;
var spelStatus = SPELEN;

var playerX = 600; // x-positie van speler
var playerY = 600; // y-positie van speler

var enemyX = 600;
var enemyY = 500;

var PLAYER_LEFT = 65;  // Key A
var PLAYER_RIGHT = 68; // Key D
var PLAYER_UP = 87;    // Key W
var PLAYER_DOWN = 83;  // Key S
var KEY_SPACEBAR = 32; // Key Spacebar
var KEY_INTERACT = 69; // E-Key for Interaction

var HP = 100

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

  // kogel

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  if (playerX - enemyX < 50 && playerX - enemyX >- 50 &&
     playerY - enemyY < 50 && playerY - enemyY >- 50) {
  console.log("botsing");
  HP = HP - 1;
  }
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  background ('blue');
  
  // vijand
  fill ("red");
  rect (enemyX, enemyY, 50, 50);
  fill("black");
  ellipse (enemyX + 25, enemyY + 25, 10, 10);
  
  // hit registration
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      rect(mouseX, mouseY, 1, 75);
    }
  }
  // speler
  fill("white");
  rect(playerX, playerY, 50, 50);
  fill("black");
  ellipse(playerX + 25, playerY + 25, 10, 10);

  // punten en health

};
/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
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
    tekenAlles();
    verwerkBotsing();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
      console.log("spelen");
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("uitleg");
    textSize(70);
    fill (black);
    text ("game over, druk spatie voor start", 100 , 100);
    if (keyIsDown(32)) { // spatie
      spelStatus = UITLEG;
    }
  }
  
  if (spelStatus === UITLEG){
    // teken uitleg scherm
    console.log("uitleg");
    textSize(70);
    fill (black);
    text ("uitleg: druk op enter", 100 , 100);
      if (keyIsDown(13)) { // enter
      spelStatus = SPELEN;
      }
  }
}
