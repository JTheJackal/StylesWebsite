/**
 * Created by Adam Walker and Joshua Styles
 * Initialise the game
 *
 * Changes:
 *
 * Created const to make it easy top reference the state later down the line
 *
 *
 * Bugs:
 *
 */

//Make states easy to call by holidng their reference. Add states such as high score as we go!
const STATES = {
    BOOT:"boot.js",
    LOAD:"load.js",
    SPLASH:"splash.js",
    MENU:"menu.js",
    PLAY:"playState",
    ABOUT:"aboutState",
    HIGH_SCORE:"highscore"
};

//global variables
var gameWidth = 800;
var gameHeight = 600;
var LEVELSPEEDX = -80;
const ORIGSPEEDX = LEVELSPEEDX;
const LEVELSPEEDY = 0;

//Create an instance of the game.
var game = new Phaser.Game(gameWidth,gameHeight,Phaser.CANVAS,"gameDiv");

//Add states to the game
game.state.add(STATES.BOOT,BootState);
game.state.add(STATES.LOAD,LoadState);
game.state.add(STATES.HIGH_SCORE,highscoreState);
game.state.add(STATES.MENU,MenuState);
game.state.add(STATES.PLAY,PlayState);
game.state.add(STATES.ABOUT, aboutState);

//Start State
game.state.start(STATES.LOAD);