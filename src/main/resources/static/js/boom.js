class Boom {
	constructor(playerPositionArrayRow, playerPositionArrayColumn) {
		this.playerPositionArrayRow = playerPositionArrayRow;
		this.playerPositionArrayColumn = playerPositionArrayColumn;
	}

	boom(rowBoom,columnBoom) {
		ctx4.drawImage(explosion, columnBoom * 60, rowBoom * 60, 60, 60);
		arrayExplosion[rowBoom][columnBoom] = 1;
		for (let a = 0; a < bombSize; a++) {
			if (goRigth && columnBoom < columnsMap) {
				if(arrayObjects[rowBoom][columnBoom + 1] == 0){
					ctx4.drawImage(explosion, (columnBoom + a) * 60, rowBoom * 60, 60, 60);
					arrayExplosion[rowBoom][columnBoom + a] = 1;
				}
			} else {
				goRigth = false;
			}
			if (goLeft && columnBoom > 0 && (arrayObjects[rowBoom][columnBoom - 1] == 0)) {
				ctx4.drawImage(explosion, (columnBoom - a) * 60, rowBoom * 60, 60, 60);
				arrayExplosion[rowBoom][columnBoom - a] = 1;
			} else {
				goLeft = false;
			}
			if (goDown && rowBoom < rowsMap && (arrayObjects[rowBoom + 1][columnBoom] == 0)) {
				ctx4.drawImage(explosion, columnBoom * 60, (rowBoom + a) * 60, 60, 60);
				if((rowBoom + a)<=rowsMap){
					arrayExplosion[rowBoom + a][columnBoom] = 1;
				}
				
			} else {
				goDown = false;
			}
			if (goUp && rowBoom > 0 && (arrayObjects[rowBoom - 1][columnBoom] == 0)) {
				ctx4.drawImage(explosion, columnBoom * 60, (rowBoom - a) * 60, 60, 60);
				if((rowBoom - a)>=0){
					arrayExplosion[rowBoom - a][columnBoom] = 1;
				}
	
			} else {
				goUp = false;
			}


		}

	}

	eraser(rowBoom,columnBoom) {
		ctx4.clearRect(0, 0, 900, 540);
		arrayExplosion[rowBoom][columnBoom] = 0;
		for (var b = 0; b < bombSize; b++) {
			if (columnBoom < columnsMap) {
				arrayExplosion[rowBoom][columnBoom + b] = 0;
			}
			if (columnBoom > 0) {
				arrayExplosion[rowBoom][columnBoom - b] = 0;
			}
			if (rowBoom < rowsMap && (rowBoom + b)<=rowsMap) {
				arrayExplosion[rowBoom + b][columnBoom] = 0;
			}
			if (rowBoom > 0 && (rowBoom - b)>=0) {
				arrayExplosion[rowBoom - b][columnBoom] = 0;
			}
		}
		goUp = true;
		goDown = true;
		goLeft = true;
		goRigth = true;
	}
	

}
