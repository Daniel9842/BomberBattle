setTimeout(drawBombsInMap, 15000, 0, 14, 8, 0, true, 1, 7);
setTimeout(generateExplosion, 18000, 0, 14, 8, 0, true, 1, 7);

setTimeout(drawBombsInMap, 30000, 1, 13, 7, 1, false, 1, 7);
setTimeout(quitBombs, 33000, 1, 13, 7, 1, false, 1, 7);
setTimeout(generateExplosion,33000, 1, 13, 7, 1, false, 1, 7);

setTimeout(drawBombsInMap, 45000, 1, 0, 13, 0, false, 1, 3);
setTimeout(quitBombs, 48000, 1, 0, 13, 0, false, 1, 3);
setTimeout(generateExplosion, 48000, 1, 0, 13, 0, false, 1, 3);
setTimeout(drawBombsInMap, 65000, 2, 12, 6, 2, true, 1, 7);
setTimeout(generateExplosion, 68000, 2, 12, 6, 2, true, 1, 7);

class BombsInMap {
	constructor(mapPosX, mapPosY) {
		this.mapPosX = mapPosX;
		this.mapPosY = mapPosY;
	}

	drawBombRow() {
		ctx7.drawImage(bombsMap, this.mapPosX, this.mapPosY, imageWidth, imageHeight);
		setTimeout(this.drawExplosionRow, 3000, this.mapPosX, this.mapPosY);
	}

	drawExplosionRow(posx, posy) {
		ctx8.drawImage(bombsExplosion, posx - 12, posy - 2, position, position);
		ctx8.drawImage(bombsExplosion, posx - 12 - position, posy - 2, position, position);
	}

	drawBombColumn() {
		ctx7.drawImage(bombsMap, this.mapPosX, this.mapPosY, imageWidth, imageHeight);
		setTimeout(this.drawExplosionColumn, 3000, this.mapPosX, this.mapPosY);
	}

	drawExplosionColumn(posx, posy) {
		ctx8.drawImage(bombsExplosion, posx - 12, posy - 2, position, position);
		ctx8.drawImage(bombsExplosion, posx - 12, posy - 2 - position, position, position);
	}

	drawBombOne() {
		ctx7.drawImage(bombsMap, this.mapPosX, this.mapPosY, imageWidth, imageHeight);
		setTimeout(this.drawExplosionOne, 3000, this.mapPosX, this.mapPosY);
	}

	drawExplosionOne(posx, posy) {
		ctx8.drawImage(bombsExplosion, posx - 12, posy - 2, position, position);
	}
}

function drawBombsInMap(rowsBombs, columnsBombs, rowsBombsOther, columnsBombsOther, change, initial, forNumber) {
	var spacePosition = 60;
	for (var k = initial; k <= forNumber; k++) {
		if (change && forNumber == 7) {
			arrayObjects[rowsBombs][k*2-1]=2;
			var row1 = new BombsInMap(spacePosition * k * 2 + 12 - spacePosition, rowsBombs * spacePosition + 2);
			row1.drawBombRow();
			arrayObjects[rowsBombsOther][k*2-1]=2;
			var row2 = new BombsInMap(spacePosition * k * 2 + 12 - spacePosition, rowsBombsOther * spacePosition + 2);
			row2.drawBombRow();
			pushBombs(forNumber,columnsBombsOther,true);
			var row3 = new BombsInMap(columnsBombsOther * spacePosition + 12, spacePosition * k * 2 - spacePosition + 2);
			row3.drawBombColumn();
			pushBombs(forNumber,columnsBombs,true);
			var row4 = new BombsInMap(columnsBombs * spacePosition + 12, spacePosition * k * 2 - spacePosition + 2);
			row4.drawBombColumn();
			
		} else if (change == false && forNumber == 7) {
			arrayObjects[rowsBombs][k*2]=2;
			var row1 = new BombsInMap(spacePosition * k * 2 + 12, rowsBombs * spacePosition + 2);
			row1.drawBombOne();
			arrayObjects[rowsBombsOther][k*2]=2;
			var row2 = new BombsInMap(spacePosition * k * 2 + 12, rowsBombsOther * spacePosition + 2);
			row2.drawBombOne();
		} else if (forNumber == 3) {
			arrayObjects[k*2][rowsBombs]=2;
			var row3 = new BombsInMap(rowsBombs * spacePosition + 12, spacePosition * k * 2 + 2);
			row3.drawBombOne();
			arrayObjects[k*2][rowsBombsOther]=2;
			var row4 = new BombsInMap(rowsBombsOther * spacePosition + 12, spacePosition * k * 2 + 2);
			row4.drawBombOne();
		}

	}
}



function pushBombs(initialRow,valueRow,changebombs) {
	for(var y=1;y<=initialRow;y++){
		if(y%2!=0 && changebombs==true){
			arrayObjects[y][valueRow]=2;
		}else{
			arrayObjects[y][valueRow]=0;
		}
	}
}

function quitBombs(rowsBombs, columnsBombs, rowsBombsOther, columnsBombsOther, change, initial, forNumber){
	for (var k = initial; k <= forNumber; k++) {
		if (change && forNumber == 7) {
			arrayObjects[rowsBombs][k*2-1]=0;
			arrayObjects[rowsBombsOther][k*2-1]=0;
			pushBombs(forNumber,columnsBombsOther,false);
			pushBombs(forNumber,columnsBombs,false);
		} else if (change == false && forNumber == 7) {
			arrayObjects[rowsBombs][k*2]=0;
			arrayObjects[rowsBombsOther][k*2]=0;
		} else if (forNumber == 3) {
			arrayObjects[k*2][rowsBombs]=0;
			arrayObjects[k*2][rowsBombsOther]=0;
		}

	}
}


function generateExplosion(rowsBombs, columnsBombs, rowsBombsOther, columnsBombsOther, change, initial, forNumber){
	for (var k = initial; k <= forNumber; k++) {
		if (change && forNumber == 7) {
			arrayExplosion[rowsBombs][k*2-1]=1;
			arrayExplosion[rowsBombs][k*2-2]=1;
			arrayExplosion[rowsBombsOther][k*2-1]=1;
			arrayExplosion[rowsBombsOther][k*2-2]=1;
			pushExplosion(columnsBombsOther);
			pushExplosion(columnsBombs);
		} else if (change == false && forNumber == 7) {
			arrayExplosion[rowsBombs][k*2]=1;
			arrayExplosion[rowsBombsOther][k*2]=1;
		} else if (forNumber == 3) {
			arrayExplosion[k*2][rowsBombs]=1;
			arrayExplosion[k*2][rowsBombsOther]=1;
		}

	}
}


function pushExplosion(rowExplosion) {
	for(var y=0;y<=8;y++){
		arrayExplosion[y][rowExplosion]=1;
	}
}
