var Team = function (name, eloRanking) {
    this.name = name;
    this.eloRanking = eloRanking;
    this.wCount = 0;
    this.wProb = 0.0;
};

Team.prototype.play = function(awayTeam) {
    var score = [];
    var a = 80 - this.eloRanking;
    var b = 80 - awayTeam.eloRanking;
    var x0 = -0.34657321; // tanh(x0) = -1/3
    var w = 40;
    var probHomeWin = (Math.tanh(((a - b) / w) + x0) + 1.0) / 2.0;
    var probAwayWin = (Math.tanh(((b - a) / w) + x0) + 1.0) / 2.0;
    var probDraw = 1.0 - probHomeWin - probAwayWin;
    var rnd = Math.random();
    if(rnd < probHomeWin) {
        score[0] = Math.round(Math.random() * 2.0 + 1.0);
        score[1] = Math.floor(Math.random() * score[0]);
    }
    else if(rnd < (probHomeWin + probDraw)) {
        score[0] = Math.round(Math.random() * 3.0);
        score[1] = score[0];
    }
    else {
        score[1] = Math.round(Math.random() * 2.0 + 1.0);
        score[0] = Math.floor(Math.random() * score[1]);
    }
    // console.log(this.name + " - " + awayTeam.name + /*": " + score[0] + " - " + score[1] +*/ ": " + probHomeWin + ",  " + probDraw + ", " + probAwayWin);
    return score;
};