class Bomb {
	constructor(playerPositionArrayRow, playerPositionArrayColumn,mapPosX,mapPosY) {
		this.playerPositionArrayRow = playerPositionArrayRow;
		this.playerPositionArrayColumn = playerPositionArrayColumn;
		this.mapPosX = mapPosX;
		this.mapPosY = mapPosY;
	}

	bomb() {
		ctx3.drawImage(bombi, this.mapPosX, this.mapPosY, 35, 55);
		var explosion = new Boom(this.playerPositionArrayRow,this.playerPositionArrayColumn);
		setTimeout(explosion.boom,2000,this.playerPositionArrayRow,this.playerPositionArrayColumn);
		setTimeout(explosion.eraser,3100,this.playerPositionArrayRow,this.playerPositionArrayColumn);
	}

	eraser(){
		ctx3.clearRect(0, 0, 900, 540);
	}

}