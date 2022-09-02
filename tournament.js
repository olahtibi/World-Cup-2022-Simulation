var Tournament = function () {
    this.groups = [];

    var entriesA = [];
    entriesA.push(new GroupEntry(teams.qua, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesA.push(new GroupEntry(teams.ecu, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesA.push(new GroupEntry(teams.sen, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesA.push(new GroupEntry(teams.ned, 0, 0, 0, 0, 0, 0, 0, 0 ));
    this.groups.push(new Group(
        "A",
        entriesA
    ));

    var entriesB = [];
    entriesB.push(new GroupEntry(teams.eng, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesB.push(new GroupEntry(teams.ira, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesB.push(new GroupEntry(teams.usa, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesB.push(new GroupEntry(teams.wal, 0, 0, 0, 0, 0, 0, 0, 0 ));
    this.groups.push(new Group(
        "B",
        entriesB
    ));

    var entriesC = [];
    entriesC.push(new GroupEntry(teams.arg, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesC.push(new GroupEntry(teams.sau, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesC.push(new GroupEntry(teams.mex, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesC.push(new GroupEntry(teams.pol, 0, 0, 0, 0, 0, 0, 0, 0 ));
    this.groups.push(new Group(
        "C",
        entriesC
    ));

    var entriesD = [];
    entriesD.push(new GroupEntry(teams.fra, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesD.push(new GroupEntry(teams.aus, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesD.push(new GroupEntry(teams.den, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesD.push(new GroupEntry(teams.tun, 0, 0, 0, 0, 0, 0, 0, 0 ));
    this.groups.push(new Group(
        "D",
        entriesD
    ));

    var entriesE = [];
    entriesE.push(new GroupEntry(teams.spa, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesE.push(new GroupEntry(teams.cos, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesE.push(new GroupEntry(teams.ger, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesE.push(new GroupEntry(teams.jap, 0, 0, 0, 0, 0, 0, 0, 0 ));
    this.groups.push(new Group(
        "E",
        entriesE
    ));

    var entriesF = [];
    entriesF.push(new GroupEntry(teams.bel, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesF.push(new GroupEntry(teams.can, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesF.push(new GroupEntry(teams.mor, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesF.push(new GroupEntry(teams.cro, 0, 0, 0, 0, 0, 0, 0, 0 ));
    this.groups.push(new Group(
        "F",
        entriesF
    ));

    var entriesG = [];
    entriesG.push(new GroupEntry(teams.bra, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesG.push(new GroupEntry(teams.srb, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesG.push(new GroupEntry(teams.swi, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesG.push(new GroupEntry(teams.cam, 0, 0, 0, 0, 0, 0, 0, 0 ));
    this.groups.push(new Group(
        "G",
        entriesG
    ));

    var entriesH = [];
    entriesH.push(new GroupEntry(teams.por, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesH.push(new GroupEntry(teams.gha, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesH.push(new GroupEntry(teams.uru, 0, 0, 0, 0, 0, 0, 0, 0 ));
    entriesH.push(new GroupEntry(teams.kor, 0, 0, 0, 0, 0, 0, 0, 0 ));
    this.groups.push(new Group(
        "H",
        entriesH
    ));

};

Tournament.prototype.simulate = function() {
    for(var i = 0; i < this.groups.length; i++) {
        this.groups[i].simulate();
        this.groups[i].sort();
    }
    var data = [];
    data[0] = this.groups[0].entries[0].team;
    data[1] = this.groups[1].entries[1].team;
    data[2] = this.groups[2].entries[0].team;
    data[3] = this.groups[3].entries[1].team;
    data[4] = this.groups[4].entries[0].team;
    data[5] = this.groups[5].entries[1].team;
    data[6] = this.groups[6].entries[0].team;
    data[7] = this.groups[7].entries[1].team;
    data[8] = this.groups[1].entries[0].team;
    data[9] = this.groups[0].entries[1].team;
    data[10] = this.groups[3].entries[0].team;
    data[11] = this.groups[2].entries[1].team;
    data[12] = this.groups[5].entries[0].team;
    data[13] = this.groups[4].entries[1].team;
    data[14] = this.groups[7].entries[0].team;
    data[15] = this.groups[6].entries[1].team;
    this.knockout = new Knockout(data);
    this.knockout.simulate();
}

Tournament.prototype.render = function() {
    var str = '<table>';
    for(var i = 0; i < this.groups.length; i++) {
        var g = this.groups[i];
        str += '<tr><td colspan="9">Group ' + g.label + '</td></tr>';
        str += '<tr><td>Pos</td><td>Team</td><td>Pld</td><td>W</td><td>D</td><td>L</td><td>GF</td><td>GA</td><td>Pts</td></tr>'
        for(var j = 0; j < g.entries.length; j++) {
            var e = g.entries[j];
            str += '<tr><td>' + (j+1) + '</td><td>' + e.team.name + '</td><td>' + e.pld + '</td><td>' + e.win + '</td><td>' + e.draw +'</td><td>' + e.loose + '</td><td>' + e.gf + '</td><td>' + e.ga + '</td><td>' + e.pts + '</td></tr>'
        }
        for(var j = 0; j < g.results.length; j++) {
            str += '<tr><td colspan="9">' + g.results[j] + '</td></tr>';
        }
    }
    str += '<table>';
    for(var j = 0; j < this.knockout.results.length; j++) {
        str += '<br/><label>' + this.knockout.results[j] + '</label>';
    }

    document.getElementById('details').innerHTML = str;
    document.getElementById("champLabel").textContent = this.knockout.champion().name;
}
