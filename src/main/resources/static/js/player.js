const size = 60;
const rowsMap = 8;
const columnsMap = 14;
var bombSize = 2;
var bombInMap = false;
var goUp = true;
var goDown = true;
var goLeft = true;
var goRigth = true;
var alive = true;
var timerAlive = setInterval(itsAlive, 500);
var timerSizeBomb = setInterval(sizeBomb, 30000);

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
		var bomba = new Bomb(player1.playerRowArray,player1.playerColumnArray,player1.posX, player1.posY);
		arrayObjects[player1.playerRowArray][player1.playerColumnArray] = 2;
		player1.setBombRow(player1.playerRowArray);
		player1.setBombColumn(player1.playerColumnArray);
		bombInMap = true;
		bomba.bomb();
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

	if (rightPressed && player1.playerColumnArray < columnsMap && (arrayObjects[player1.playerRowArray][player1.playerColumnArray + 1] == 0)) {
		player1.setPositionXColumn(size,"+");
	}

	else if (leftPressed && player1.playerColumnArray > 0 && (arrayObjects[player1.playerRowArray][player1.playerColumnArray - 1] == 0)) {
		player1.setPositionXColumn(size,"-");
	} else if (upPressed && player1.playerRowArray > 0 && (arrayObjects[player1.playerRowArray - 1][player1.playerColumnArray] == 0)) {
		player1.setPositionYRow(size,"-");

	} else if (downPressed && player1.playerRowArray < rowsMap && (arrayObjects[player1.playerRowArray + 1][player1.playerColumnArray] == 0)) {
		player1.setPositionYRow(size,"+");
	}

	ctx2.clearRect(0, 0, 900, 540);

	var playerOne = new Image();
	playerOne.src = 'images/white.png';
	playerOne.onload = function () {
		ctx2.drawImage(playerOne, player1.posX, player1.posY, imageWidth, imageHeight);

	}

	var playerTwo = new Image();
	playerTwo.src = 'images/yellow.png';
	playerTwo.onload = function () {
		ctx2.drawImage(playerTwo,player2.posX, player2.posY, imageWidth, imageHeight);

	}

	var playerThree = new Image();
	playerThree.src = 'images/pink.png';
	playerThree.onload = function () {
		ctx2.drawImage(playerThree,player3.posX, player3.posY, imageWidth, imageHeight);

	}

	var playerFour = new Image();
	playerFour.src = 'images/gray.png';
	playerFour.onload = function () {
		ctx2.drawImage(playerFour, player4.posX, player4.posY, imageWidth, imageHeight);

	}



}


function explosionBomb(bomba) {
	bomba.eraser();
	bombInMap = false;
	arrayObjects[player1.playerRowBomb][player1.playerColumnBomb] = 0;
}

function itsAlive() {
	for (let z = 0; z < rows; z++) {
		for (let x = 0; x < columns; x++) {
			if (arrayExplosion[player1.playerRowArray][player1.playerColumnArray] != 0) {
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


