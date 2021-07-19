class Boom {
	constructor(playerPositionArrayRow, playerPositionArrayColumn) {
		this.playerPositionArrayRow = playerPositionArrayRow;
		this.playerPositionArrayColumn = playerPositionArrayColumn;
	}
	boom(rowBoom, columnBoom, bomPlay) {
		if (bomPlay == 1) {
			ctx3.drawImage(explosion, columnBoom * position, rowBoom * position, position, position);
		} else if (bomPlay == 2) {
			ctx4.drawImage(explosion, columnBoom * position, rowBoom * position, position, position);
		} else if (bomPlay == 3) {
			ctx5.drawImage(explosion, columnBoom * position, rowBoom * position, position, position);
		} else if (bomPlay == 4) {
			ctx6.drawImage(explosion, columnBoom * position, rowBoom * position, position, position);
		}
		arrayExplosion[rowBoom][columnBoom] = 1;
		for (let a = 0; a < bombSize; a++) {
			if (goRigth && columnBoom < columnsMap) {
				if (arrayObjects[rowBoom][columnBoom + 1] == 0) {
					arrayExplosion[rowBoom][columnBoom + a] = 1;
					if (bomPlay == 1) {
						ctx3.drawImage(explosion, (columnBoom + a) * position, rowBoom * position, position, position);
					} else if (bomPlay == 2) {
						ctx4.drawImage(explosion, (columnBoom + a) * position, rowBoom * position, position, position);
					} else if (bomPlay == 3) {
						ctx5.drawImage(explosion, (columnBoom + a) * position, rowBoom * position, position, position);
					} else if (bomPlay == 4) {
						ctx6.drawImage(explosion, (columnBoom + a) * position, rowBoom * position, position, position);
					}
				}
			} else {
				goRigth = false;
			}
			if (goLeft && columnBoom > 0 && (arrayObjects[rowBoom][columnBoom - 1] == 0)) {
				arrayExplosion[rowBoom][columnBoom - a] = 1;
				if (bomPlay == 1) {
					ctx3.drawImage(explosion, (columnBoom - a) * position, rowBoom * position, position, position);
				} else if (bomPlay == 2) {
					ctx4.drawImage(explosion, (columnBoom - a) * position, rowBoom * position, position, position);
				} else if (bomPlay == 3) {
					ctx5.drawImage(explosion, (columnBoom - a) * position, rowBoom * position, position, position);
				} else if (bomPlay == 4) {
					ctx6.drawImage(explosion, (columnBoom - a) * position, rowBoom * position, position, position);
				}
			} else {
				goLeft = false;
			}
			if (goDown && rowBoom < rowsMap && (arrayObjects[rowBoom + 1][columnBoom] == 0)) {
				if (bomPlay == 1) {
					ctx3.drawImage(explosion, columnBoom * position, (rowBoom + a) * position, position, position);
				} else if (bomPlay == 2) {
					ctx4.drawImage(explosion, columnBoom * position, (rowBoom + a) * position, position, position);
				} else if (bomPlay == 3) {
					ctx5.drawImage(explosion, columnBoom * position, (rowBoom + a) * position, position, position);
				} else if (bomPlay == 4) {
					ctx6.drawImage(explosion, columnBoom * position, (rowBoom + a) * position, position, position);
				}
				if ((rowBoom + a) <= rowsMap) {
					arrayExplosion[rowBoom + a][columnBoom] = 1;
				}

			} else {
				goDown = false;
			}
			if (goUp && rowBoom > 0 && (arrayObjects[rowBoom - 1][columnBoom] == 0)) {
				if (bomPlay == 1) {
					ctx3.drawImage(explosion, columnBoom * position, (rowBoom - a) * position, position, position);
				} else if (bomPlay == 2) {
					ctx4.drawImage(explosion, columnBoom * position, (rowBoom - a) * position, position, position);
				} else if (bomPlay == 3) {
					ctx5.drawImage(explosion, columnBoom * position, (rowBoom - a) * position, position, position);
				} else if (bomPlay == 4) {
					ctx6.drawImage(explosion, columnBoom * position, (rowBoom - a) * position, position, position);
				}
				
				if ((rowBoom - a) >= 0) {
					arrayExplosion[rowBoom - a][columnBoom] = 1;
				}

			} else {
				goUp = false;
			}


		}

	}

	eraser(rowBoom, columnBoom, bombEraser) {
		if(bombEraser==1){
			ctx3.clearRect(0, 0, 900, 540);
		}else if(bombEraser==2){
			ctx4.clearRect(0, 0, 900, 540);
		}else if(bombEraser==3){
			ctx5.clearRect(0, 0, 900, 540);
		}else if(bombEraser==4){
			ctx6.clearRect(0, 0, 900, 540);
		}
		arrayExplosion[rowBoom][columnBoom] = 0;
		for (var b = 0; b < bombSize; b++) {
			if (columnBoom < columnsMap) {
				arrayExplosion[rowBoom][columnBoom + b] = 0;
			}
			if (columnBoom > 0) {
				arrayExplosion[rowBoom][columnBoom - b] = 0;
			}
			if (rowBoom < rowsMap && (rowBoom + b) <= rowsMap) {
				arrayExplosion[rowBoom + b][columnBoom] = 0;
			}
			if (rowBoom > 0 && (rowBoom - b) >= 0) {
				arrayExplosion[rowBoom - b][columnBoom] = 0;
			}
		}
		goUp = true;
		goDown = true;
		goLeft = true;
		goRigth = true;
	}


}
