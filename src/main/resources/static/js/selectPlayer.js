class Player {
	constructor(positionX, positionY,playerRow,playerColumn) {
		this.positionX = positionX;
		this.positionY = positionY;
		this.playerRow = playerRow;
		this.playerColumn = playerColumn;
		this.bombRowPlayer;
		this.bombColumnPlayer;
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

	setBombRow(bombRowNumber){
		this.bombRowPlayer = bombRowNumber;
	}

	setBombColumn(bombColumnNumber){
		this.bombColumnPlayer = bombColumnNumber;
	}

	setPositionXColumn(numberX,symbolX){
		if(symbolX=="+"){
			this.positionX+=numberX;
			this.playerColumn+=1;
		}else if(symbolX=="-"){
			this.positionX-=numberX;
			this.playerColumn-=1;
		}
		
	}

	setPositionYRow(numberY,symbolY){
		if(symbolY=="+"){
			this.positionY+=numberY;
			this.playerRow+=1;
		}else if(symbolY=="-"){
			this.positionY-=numberY;
			this.playerRow-=1;
		}
	}

}

var imageWidth = 35;
var imageHeight = 55;
var player1 = new Player(12, 2, 0, 0);
var player2 = new Player( 14 * 60 + 12, 2,0,14);
var player3 = new Player( 12, 8 * 60 + 2,8,0);
var player4 = new Player(14 * 60 + 12, 8 * 60 + 2,8,14);

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
	ctx2.drawImage(playerFour,player4.posX, player4.posY, imageWidth, imageHeight);
}


