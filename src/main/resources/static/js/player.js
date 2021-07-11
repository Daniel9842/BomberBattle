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
var timerAlive = setInterval(itsAlive,500);
var timerSizeBomb = setInterval(sizeBomb,30000);

var player = new Image();
player.src = 'images/bluelow.png';
player.onload = function () {
	ctx2.drawImage(player, positionx, positiony, 35, 55);
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
		draw();
	}
	else if (e.keyCode == 37) {
		leftPressed = true;
		draw();
	}
	else if (e.keyCode == 38) {
		upPressed = true;
		draw();
	}
	else if (e.keyCode == 40) {
		downPressed = true;
		draw();
	}
	else if (e.keyCode == 32) {
		spacePressed = true;
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
}


function explosionBomb(bomba) {
	bomba.eraser();
	bombInMap = false;
	arrayObjects[positionBombRow][positionBombColumn] = 0;

}

function itsAlive() {
	for (let z = 0; z < rows; z++) {
		for (let x = 0; x < columns; x++) {
			if(arrayExplosion[playerPositionArrayRow][playerPositionArrayColumn]!=0){
				alive = false;
			}
		}
	}
	console.log(alive);
}

function sizeBomb(){
	if(bombSize<=4){
		bombSize+=1;
	}else if(bombSize==5){
		clearInterval(timerSizeBomb);
	}
}
