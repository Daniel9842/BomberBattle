class Boom {
	constructor(rowBoom, columnBoom) {
		this.rowBoom = rowBoom;
		this.columnBoom = columnBoom;
	}
	boom() {
		ctx4.drawImage(explosion, this.positionBombColumn * 60, this.positionBombRow * 60, 60, 60);
		arrayExplosion[positionBombRow][positionBombColumn] = 1;
		for (let a = 0; a < bombSize; a++) {

			if (goRigth && this.positionBombColumn < columnsMap) {
				if(arrayObjects[this.positionBombRow][this.positionBombColumn + 1] == 0){
					ctx4.drawImage(explosion, (this.positionBombColumn + a) * 60, this.positionBombRow * 60, 60, 60);
					arrayExplosion[positionBombRow][positionBombColumn + a] = 1;
				}else if(arrayObjects[this.positionBombRow][this.positionBombColumn + 1] == 5){
					arrayWalls[this.positionBombRow][this.positionBombColumn + 1] =0;
					//eraserWalls(this.positionBombRow,this.positionBombColumn);
				}
				
			} else {
				goRigth = false;
			}
			if (this.positionBombColumn > 0 && (arrayObjects[this.positionBombRow][this.positionBombColumn - 1] == 0)) {
				ctx4.drawImage(explosion, (this.positionBombColumn - a) * 60, this.positionBombRow * 60, 60, 60);
				arrayExplosion[positionBombRow][positionBombColumn - a] = 1;
			} else {
				goLeft = false;
			}
			if (this.positionBombRow < rowsMap && (arrayObjects[this.positionBombRow + 1][this.positionBombColumn] == 0)) {
				ctx4.drawImage(explosion, this.positionBombColumn * 60, (this.positionBombRow + a) * 60, 60, 60);
				if((positionBombRow + a)<rowsMap){
					arrayExplosion[positionBombRow + a][positionBombColumn] = 1;
				}
				
			} else {
				goDown = false;
			}
			if (this.positionBombRow > 0 && (arrayObjects[this.positionBombRow - 1][this.positionBombColumn] == 0)) {
				ctx4.drawImage(explosion, this.positionBombColumn * 60, (this.positionBombRow - a) * 60, 60, 60);
				if((positionBombRow - a)>rowsMap){
					arrayExplosion[positionBombRow - a][positionBombColumn] = 1;
				}
	
			} else {
				goUp = false;
			}


		}

	}
	eraser() {
		ctx4.clearRect(0, 0, 900, 540);
		arrayExplosion[positionBombRow][positionBombColumn] = 0;
		for (var b = 0; b < bombSize; b++) {
			if (this.positionBombColumn < columnsMap) {
				arrayExplosion[positionBombRow][positionBombColumn + b] = 0;
			}
			if (this.positionBombColumn > 0) {
				arrayExplosion[positionBombRow][positionBombColumn - b] = 0;
			}
			if (this.positionBombRow < rowsMap && (positionBombRow + b)<rowsMap) {
				arrayExplosion[positionBombRow + b][positionBombColumn] = 0;
			}
			if (this.positionBombRow > 0 && (positionBombRow - b)>rowsMap) {
				arrayExplosion[positionBombRow - b][positionBombColumn] = 0;
			}
		}

		goUp = true;
		goDown = true;
		goLeft = true;
		goRigth = true;
	}

}
