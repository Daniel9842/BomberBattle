var positionx = 12;
var positiony = 2;
const size = 60;
const rowsMap = 8;
const columnsMap = 14;
var playerPositionArrayRow = 0;
var playerPositionArrayColumn = 0;
var bombSize = 2;
var bombInMap = false;
var goUp = true;
var goDown = true;
var goLeft = true;
var goRigth = true;
var positionBombRow;
var positionBombColumn;
var alive = true;
var timerAlive = setInterval(itsAlive, 500);
var timerSizeBomb = setInterval(sizeBomb, 30000);



var player = new Image();
player.src = 'images/bluelow.png';
player.onload = function () {
	ctx2.drawImage(player, positionx, positiony, 35, 55);
}

var player2 = new Image();
player2.src = 'images/white.png';
player2.onload = function () {
	ctx2.drawImage(player2, 14 * 60, 8 * 60, 35, 55);
}

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = true;
		wsreference.send(1);
		draw();
	}
	else if (e.keyCode == 37) {
		leftPressed = true;
		wsreference.send(2);
		draw();
	}
	else if (e.keyCode == 38) {
		upPressed = true;
		wsreference.send(3);
		draw();
	}
	else if (e.keyCode == 40) {
		downPressed = true;
		wsreference.send(4);
		draw();
	}
	else if (e.keyCode == 32) {
		spacePressed = true;
		wsreference.send(5);
		makeBomb();
	}
}

function makeBomb() {
	if (bombInMap == false) {
		var bomba = new Bomb(positionx, positiony);
		arrayObjects[playerPositionArrayRow][playerPositionArrayColumn] = 2;
		bombInMap = true;
		bomba.bomb();
		positionBombRow = playerPositionArrayRow;
		positionBombColumn = playerPositionArrayColumn;
		setTimeout(explosionBomb, 3000, bomba);
	}
}

function keyUpHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = false;
	}
	else if (e.keyCode == 37) {
		leftPressed = false;
	}
	else if (e.keyCode == 38) {
		upPressed = false;
	}
	else if (e.keyCode == 40) {
		downPressed = false;
	}
	else if (e.keyCode == 32) {
		spacePressed = false;
	}
}

function draw() {

	if (rightPressed && playerPositionArrayColumn < columnsMap && (arrayObjects[playerPositionArrayRow][playerPositionArrayColumn + 1] == 0)) {
		playerPositionArrayColumn += 1;
		positionx += size;
	}

	else if (leftPressed && playerPositionArrayColumn > 0 && (arrayObjects[playerPositionArrayRow][playerPositionArrayColumn - 1] == 0)) {
		playerPositionArrayColumn -= 1;
		positionx -= size;
	} else if (upPressed && playerPositionArrayRow > 0 && (arrayObjects[playerPositionArrayRow - 1][playerPositionArrayColumn] == 0)) {
		playerPositionArrayRow -= 1;
		positiony -= size;

	} else if (downPressed && playerPositionArrayRow < rowsMap && (arrayObjects[playerPositionArrayRow + 1][playerPositionArrayColumn] == 0)) {
		playerPositionArrayRow += 1;
		positiony += size;
	}

	ctx2.clearRect(0, 0, 900, 540);

	var player = new Image();
	player.src = 'images/bluelow.png';
	player.onload = function () {
		ctx2.drawImage(player, positionx, positiony, 35, 55);

	}

	var player2 = new Image();
	player2.src = 'images/white.png';
	player2.onload = function () {
		ctx2.drawImage(player2, 14 * 60, 8 * 60, 35, 55);
	}


}


function explosionBomb(bomba) {
	bomba.eraser();
	bombInMap = false;
	arrayObjects[positionBombRow][positionBombColumn] = 0;

}

function itsAlive() {
	for (let z = 0; z < rows; z++) {
		for (let x = 0; x < columns; x++) {
			if (arrayExplosion[playerPositionArrayRow][playerPositionArrayColumn] != 0) {
				alive = false;
				clearInterval(timerAlive);
			}
		}
	}

}

function sizeBomb() {
	if (bombSize <= 4) {
		bombSize += 1;
	} else if (bombSize == 5) {
		clearInterval(timerSizeBomb);
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
		// Este if permite que el primer mensaje del servidor no se tenga en cuenta.
		// El primer mensaje solo confirma que se estableció la conexión.
		// De ahí en adelante intercambiaremos solo puntos(x,y) con el servidor
		if (evt.data != "Connection established.") {
			this.receivef(evt.data);
		}
	}
	onError(evt) {
		console.error("In onError", evt);
	}
	send(press) {
		let msg = '{ "y": ' + (press) + "}";
		console.log("sending: ", msg);
		this.wsocket.send(msg);
	}
}




var comunicationWS = new BomberBattleChannel(BomberBattleServiceURL(),
		(msg) => {
			var obj = JSON.parse(msg);
			console.log("On func call back ", msg);
			if (obj.y==1) {
				rightPressed = true;
				draw();
				rightPressed = false;
			} else if (obj.y == 2) {
				leftPressed = true;
				draw();
				leftPressed = false;
			} else if (obj.y == 3) {
				upPressed = true;
				draw();
				upPressed = false;
			} else if (obj.y == 4) {
				downPressed = true;
				draw();
				downPressed = false;
			} else if (obj.y == 5) {
				spacePressed = true;
				makeBomb();
				spacePressed = false;
			}

		});
let wsreference = comunicationWS;

function BomberBattleServiceURL() {
	return 'ws://localhost:8080/bomberService';
}

