import {TennisGame} from "./TennisGame";

let game = new TennisGame();
game.getScore('player1', 'player2', 6, 8);
console.log(game.score)