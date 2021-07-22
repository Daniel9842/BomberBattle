const canvasLobby = document.getElementById('canvasLobby');
const ctx1 = canvasLobby.getContext('2d');
canvasLobby.width = 1000;
canvasLobby.height = 800;
var loading = new Image();
loading.src = 'images/loading.png';
loading.onload = function () {
    ctx1.drawImage(loading, 200, 450, 600, 300);
}

var bomb = new Image();
bomb.src = 'images/bombMap.png';
bomb.onload = function () {
    ctx1.drawImage(bomb, 150, 80, 300, 300);
}

var moves = new Image();
moves.src = 'images/moves.png';
moves.onload = function () {
    ctx1.drawImage(moves, 500, 575, 200, 200);
}

var bomberLobby = new Image();
bomberLobby.src = 'images/bomberLobby.png';
bomberLobby.onload = function () {
    ctx1.drawImage(bomberLobby, 350, 15, 400, 400);
}

var timerSend = setInterval(sendMessage, 3000);
setTimeout(sending, 1000);
var players = 1;

function sending() {
    wsreference.send(1);
}
function sendMessage() {
    console.log(players);
    if (players == 4) {
        wsreference.send(players);
        clearInterval(timerSend);
        window.location.href = "/playBomberBattle.html"
    }

}

class BomberBattleChannel {
    constructor(URL, callback) {
        this.URL = URL;
        this.wsocket = new WebSocket(URL);
        this.wsocket.onopen = (evt) => this.onOpen(evt);
        this.wsocket.onmessage = (evt) => this.onMessage(evt);
        this.wsocket.onerror = (evt) => this.onError(evt);
        this.receivef = callback;
    }
    onOpen(evt) {
        console.log("In onOpen", evt);
    }
    onMessage(evt) {
        console.log("In onMessage", evt);
        if (evt.data != "Connection established.") {
            this.receivef(evt.data);
        }
    }
    onError(evt) {
        console.error("In onError", evt);
    }
    send(player) {
        let msg = '{ "player": ' + (player) + "}";
        console.log("sending: ", msg);
        this.wsocket.send(msg);
    }
}

var comunicationWS = new BomberBattleChannel(BomberBattleServiceURL(),
    (msg) => {
        var obj = JSON.parse(msg);
        console.log("On func call back ", msg);
        if (obj.player == 1) {
            players++;
        }
        else if (obj.player == 4) {
            window.location.href = "/playBomberBattle.html"
        }
    });

let wsreference = comunicationWS;

function BomberBattleServiceURL() {
    var host = window.location.host;
    var url = 'wss://' + (host) + '/bomberService';
    var url2 = 'ws://localhost:8080/bomberService';
    return url2;
}