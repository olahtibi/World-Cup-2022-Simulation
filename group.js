var Group = function (label, entries, results) {
    this.label = label;
    this.entries = entries;
    this.results = [];
};

Group.prototype.simulate = function() {
    for(var i = 0; i < this.entries.length; i++) {
        for(var j = i + 1; j < this.entries.length; j++) {
            var home = this.entries[i];
            var away = this.entries[j];
            var score = home.team.play(away.team);
            this.results.push(home.team.name + " vs " + away.team.name + ": " + score[0] + " - " + score[1]);
            home.pld++;
            away.pld++;
            home.gf += score[0];
            home.ga += score[1];
            away.gf += score[1];
            away.gl += score[0];
            home.gd = home.gf - home.ga;
            away.gd = away.gf - away.ga;
            if(score[0] > score[1]) {
                home.win++;
                away.loose++;
                home.pts += 3;
            }
            else if(score[0] < score[1]) {
                away.win++;
                home.loose++;
                away.pts += 3;
            }
            else {
                home.draw++;
                away.draw++;
                home.pts += 1;
                away.pts += 1;
            }
        }
    }
};

Group.prototype.sort = function() {
    this.entries = this.entries.sort(Group.prototype.compare);
}

Group.prototype.compare = function(a, b) {
    if (a.pts < b.pts){
        return 1;
    }
    if (a.pts > b.pts){
        return -1;
    }
    return 0;
}

