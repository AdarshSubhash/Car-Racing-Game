var canvas, backgroundImage;
var carimag1,carimag2,carimag3,carimag4;
var track,ground;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4;
var Cars;
var form, player, game;

function preload(){
carimag1=loadImage("images/car1.png");
carimag2=loadImage("images/car2.png");
carimag3=loadImage("images/car3.png");
carimag4=loadImage("images/car4.png");
track=loadImage("images/track.jpg");
ground=loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState==2){
game.end();
  }
}
