class Bomb {
	constructor(playerPositionArrayRow, playerPositionArrayColumn,mapPosX,mapPosY) {
		this.playerPositionArrayRow = playerPositionArrayRow;
		this.playerPositionArrayColumn = playerPositionArrayColumn;
		this.mapPosX = mapPosX;
		this.mapPosY = mapPosY;
	}

	bomb(bombPlay) {
		if(bombPlay==1){
			ctx3.drawImage(bombi, this.mapPosX, this.mapPosY, imageWidth, imageHeight);
		}else if(bombPlay==2){
			ctx4.drawImage(bombi, this.mapPosX, this.mapPosY, imageWidth, imageHeight);
		}else if(bombPlay==3){
			ctx5.drawImage(bombi, this.mapPosX, this.mapPosY, imageWidth, imageHeight);
		}else if(bombPlay==4){
			ctx6.drawImage(bombi, this.mapPosX, this.mapPosY, imageWidth, imageHeight);
		}
		
		var explosion = new Boom(this.playerPositionArrayRow,this.playerPositionArrayColumn);
		setTimeout(explosion.boom,2000,this.playerPositionArrayRow,this.playerPositionArrayColumn,bombPlay);
		setTimeout(explosion.eraser,3100,this.playerPositionArrayRow,this.playerPositionArrayColumn,bombPlay);
	}

	eraser(player){
		if(player==1){
			ctx3.clearRect(0, 0, 900, 540);
		}else if(player==2){
			ctx4.clearRect(0, 0, 900, 540);
		}else if(player==3){
			ctx5.clearRect(0, 0, 900, 540);
		}else if(player==4){
			ctx6.clearRect(0, 0, 900, 540);
		}
		
	}

}