class Player {
	constructor(positionX, positionY, playerRow, playerColumn) {
		this.positionX = positionX;
		this.positionY = positionY;
		this.playerRow = playerRow;
		this.playerColumn = playerColumn;
		this.bombInMap = false;
		this.bombRowPlayer;
		this.bombColumnPlayer;
		this.alive = true;
		
	}
	get posX() {
		return this.positionX;
	}
	get posY() {
		return this.positionY;
	}
	get playerRowArray() {
		return this.playerRow;
	}
	get playerColumnArray() {
		return this.playerColumn;
	}

	get playerRowBomb() {
		return this.bombRowPlayer;
	}
	get playerColumnBomb() {
		return this.bombColumnPlayer;
	}

	get playerAlive() {
		return this.alive;
	}

	get bombPlayerInMap() {
		return this.bombInMap;
	}

	setBombPlayerInMap(bombMap) {
		this.bombInMap = bombMap;
	}

	setPlayerAlive() {
		this.alive = false;
	}

	setBombRow(bombRowNumber) {
		this.bombRowPlayer = bombRowNumber;
	}

	setBombColumn(bombColumnNumber) {
		this.bombColumnPlayer = bombColumnNumber;
	}


	drawPlayer(rightPressed,leftPressed,upPressed,downPressed) {
		if (rightPressed && this.playerColumn < columnsMap && (arrayObjects[this.playerRow][this.playerColumn + 1] == 0)) {
			this.positionX += 60;
			this.playerColumn += 1;
		}

		else if (leftPressed && this.playerColumn > 0 && (arrayObjects[this.playerRow][this.playerColumn - 1] == 0)) {
			this.positionX -= 60;
			this.playerColumn -= 1;
		} else if (upPressed && this.playerRow > 0 && (arrayObjects[this.playerRow - 1][this.playerColumn] == 0)) {
			this.positionY -= 60;
			this.playerRow -= 1;

		} else if (downPressed && this.playerRow < rowsMap && (arrayObjects[this.playerRow + 1][this.playerColumn] == 0)) {
			this.positionY += 60;
			this.playerRow += 1;
		}

	}
	explosionBomb(bomba, rowBombEraser, columnBombEraser,player) {
		bomba.eraser(player);
		arrayObjects[rowBombEraser][columnBombEraser] = 0;
	}

	makeBomb(bombPlay) {
		if (this.bombInMap == false && this.alive) {
			this.bomba = new Bomb(this.playerRow, this.playerColumn, this.positionX, this.positionY);
			arrayObjects[this.playerRow][this.playerColumn] = 2;
			this.bombRowPlayer = this.playerRow;
			this.bombColumnPlayer = this.playerColumn;
			this.bombInMap=true;
			this.bomba.bomb(bombPlay);
			setTimeout(this.explosionBomb, 3000, this.bomba, this.playerRow, this.playerColumn,bombPlay);
		}
	}

	
}


var player1 = new Player(12, 2, 0, 0,false);
var player2 = new Player(14 * 60 + 12, 2, 0, 14,false);
var player3 = new Player(12, 8 * 60 + 2, 8, 0,false);
var player4 = new Player(14 * 60 + 12, 8 * 60 + 2, 8, 14,false);

var playerOne = new Image();
playerOne.src = 'images/white.png';
playerOne.onload = function () {
	ctx2.drawImage(playerOne, player1.posX, player1.posY, imageWidth, imageHeight);
}

var playerTwo = new Image();
playerTwo.src = 'images/yellow.png';
playerTwo.onload = function () {
	ctx2.drawImage(playerTwo, player2.posX, player2.posY, imageWidth, imageHeight);
}

var playerThree = new Image();
playerThree.src = 'images/pink.png';
playerThree.onload = function () {
	ctx2.drawImage(playerThree, player3.posX, player3.posY, imageWidth, imageHeight);
}

var playerFour = new Image();
playerFour.src = 'images/gray.png';
playerFour.onload = function () {
	ctx2.drawImage(playerFour, player4.posX, player4.posY, imageWidth, imageHeight);
}


