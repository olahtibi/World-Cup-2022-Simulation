var Knockout = function (r16) {
    this.results = [];
    this.r16 = r16;
    this.r8 = [];
    this.r4 = [];
    this.r2 = [];
    this.r1 = [];
};

Knockout.prototype.champion = function() {
    return this.r1[0];
}

Knockout.prototype.simulate = function() {
    this.simulateRound(this.r16, this.r8);
    this.simulateRound(this.r8, this.r4);
    this.simulateRound(this.r4, this.r2);
    this.simulateRound(this.r2, this.r1);
}

Knockout.prototype.simulateRound = function(from, to) {
    for(var i = 0; i < from.length; i += 2) {
        var home = from[i];
        var away = from[i + 1];
        var score = home.play(away);
        var label = home.name + " vs " + away.name + ": " + score[0] + " - " + score[1]
        if(score[0] > score[1]) {
            to.push(home);
        }
        else if(score[0] < score[1]) {
            to.push(away);
        }
        else {
            // Penalties
            to.push(Math.random() < 0.5 ? home : away)
            label += " (penalties)";
        }
        this.results.push(label);
    }
}

