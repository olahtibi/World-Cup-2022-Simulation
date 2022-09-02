function startSimulation() {
    var n = document.getElementById("nSelector").value;
    var simulationNumber = document.getElementById("simulationNumber").textContent;
    document.simulations = [];
    for(var i = 0; i < n; i++) {
        var tor = new Tournament();
        tor.simulate();
        document.simulations.push(tor);
    }
    document.simulations[simulationNumber - 1].render();
    document.getElementById("butNext").disabled = false;
    summarize();
}

function nextSimulation() {
    var n = document.getElementById("nSelector").value;
    var simulationNumber = parseInt(document.getElementById("simulationNumber").textContent) + 1;
    document.getElementById("simulationNumber").textContent = simulationNumber;
    document.simulations[simulationNumber - 1].render();
    if(simulationNumber >= n) {
        document.getElementById("butNext").disabled = true;
    }
    document.getElementById("butPrev").disabled = false;
}

function prevSimulation() {
    var simulationNumber = parseInt(document.getElementById("simulationNumber").textContent) - 1;
    document.getElementById("simulationNumber").textContent = simulationNumber;
    document.simulations[simulationNumber - 1].render();
    if(simulationNumber <= 1) {
        document.getElementById("butPrev").disabled = true;
    }
    document.getElementById("butNext").disabled = false;
}

function summarize() {
    var n = document.getElementById("nSelector").value;
    for(var i = 0; i < n; i++) {
        var team = document.simulations[i].knockout.champion();
        team.wCount++;
        team.wProb = team.wCount / n;
    }
    teamsArr = teamsArr.sort(compareProbs);
    var str = '<table>';
    str+='<tr><td>Team</td><td>Probability to win</td></tr>'
    for(var i = 0; i < teamsArr.length; i++) {
        var t = teamsArr[i];
        str+='<tr><td>' + t.name + '</td><td>' + t.wProb + '</td></tr>'
    }
    str+='</table>'
    document.getElementById('summary').innerHTML = str;
}

function compareProbs(a, b) {
    if (a.wProb < b.wProb){
        return 1;
    }
    if (a.wProb > b.wProb){
        return -1;
    }
    return 0;
}
