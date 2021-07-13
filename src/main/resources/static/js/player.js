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

let points = { pointsarr: [] };
let allPoints = { newpointsarr: [] };
let timerId = setInterval(() => checkPoints(), 1500);
let timer = setInterval(() => getPointsCacheUser(), 1000);

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
		points.pointsarr.push(["rightPressed", "true"]);
	}
	else if (e.keyCode == 37) {
		points.pointsarr.push(["leftPressed", "true"]);
	}
	else if (e.keyCode == 38) {
		points.pointsarr.push(["upPressed", "true"]);
	}
	else if (e.keyCode == 40) {
		
	}
	else if (e.keyCode == 32) {
		points.pointsarr.push(["spacePressed", "true"]);
		
	}
}

function makeBomb(){
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


function checkPoints() {
	let msg = points;
	points = { pointsarr: [] };
	fetch("/points", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(msg)
	})
		.then(res => res.json())
}

function getPointsCacheUser() {
	fetch("/newPoints", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(res => res.json())
		.then(res => allPoints = res)
		.then(resultPoints => console.log(resultPoints));

	for (let h = 0; h < allPoints.newpointsarr.length; h++) {
		if (allPoints.newpointsarr[h][0] == "rightPressed") {
			rightPressed = true;
			draw();
			rightPressed = false;
			allPoints.newpointsarr[h][0] = "";
		} else if (allPoints.newpointsarr[h][0] == "leftPressed") {
			leftPressed = true;
			draw();
			leftPressed = false;
			allPoints.newpointsarr[h][0] = "";
		} else if (allPoints.newpointsarr[h][0] == "upPressed") {
			upPressed = true;
			draw();
			upPressed = false;
			allPoints.newpointsarr[h][0] = "";
		} else if (allPoints.newpointsarr[h][0] == "downPressed") {
			downPressed = true;
			draw();
			downPressed = false;
			allPoints.newpointsarr[h][0] = "";
		}else if (allPoints.newpointsarr[h][0] == "spacePressed") {
			spacePressed = true;
			makeBomb();
			spacePressed = false;
			allPoints.newpointsarr[h][0] = "";
		}

	}

}  