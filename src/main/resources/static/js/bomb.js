class Bomb {
	constructor(playerPositionArrayRow, playerPositionArrayColumn) {
		this.playerPositionArrayRow = playerPositionArrayRow;
		this.playerPositionArrayColumn = playerPositionArrayColumn;

	}

	get rowPosition() {
		return this.rowPosition();
	}

	get columnPosition() {
		return this.columnPosition();
	}

	bomb() {
		ctx3.drawImage(bombi, this.playerPositionArrayRow, this.playerPositionArrayColumn, 35, 55);
		var explosion = new Boom(this.playerPositionArrayRow,this.playerPositionArrayColumn);
		setTimeout(explosion.boom,2000);
		setTimeout(explosion.eraser,3100);
	}

	eraser(){
		ctx3.clearRect(0, 0, 900, 540);
	}

}