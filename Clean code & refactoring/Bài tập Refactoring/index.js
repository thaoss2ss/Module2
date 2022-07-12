"use strict";
exports.__esModule = true;
var TennisGame_1 = require("./TennisGame");
var game = new TennisGame_1.TennisGame();
game.getScore('player1', 'player2', 6, 8);
console.log(game.score);
