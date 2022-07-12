"use strict";
exports.__esModule = true;
exports.TennisGame = void 0;
var TennisGame = /** @class */ (function () {
    function TennisGame() {
        this.score = '';
    }
    TennisGame.prototype.getScore = function (player1Name, player2Name, m_score1, m_score2) {
        var tempScore = 0;
        if (m_score1 == m_score2) {
            switch (m_score1) {
                case 0:
                    this.score = "Love-All";
                    break;
                case 1:
                    this.score = "Fifteen-All";
                    break;
                case 2:
                    this.score = "Thirty-All";
                    break;
                case 3:
                    this.score = "Forty-All";
                    break;
                default:
                    this.score = "Deuce";
                    break;
            }
        }
        else if (m_score1 >= 4 || m_score2 >= 4) {
            var minusResult = m_score1 - m_score2;
            if (minusResult == 1)
                this.score = "Advantage player1";
            else if (minusResult == -1)
                this.score = "Advantage player2";
            else if (minusResult >= 2)
                this.score = "Win for player1";
            else
                this.score = "Win for player2";
        }
        else {
            for (var i = 1; i < 3; i++) {
                if (i == 1)
                    tempScore = m_score1;
                else {
                    this.score += "-";
                    tempScore = m_score2;
                }
                switch (tempScore) {
                    case 0:
                        this.score += "Love";
                        break;
                    case 1:
                        this.score += "Fifteen";
                        break;
                    case 2:
                        this.score += "Thirty";
                        break;
                    case 3:
                        this.score += "Forty";
                        break;
                }
            }
        }
    };
    return TennisGame;
}());
exports.TennisGame = TennisGame;
