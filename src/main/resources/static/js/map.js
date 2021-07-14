var position = 60;
var rows = 9;
var columns = 15;



for (let i = 0; i < rows; i++) {
	arrayMap.push(new Array());
	arrayObjects.push(new Array());
	arrayExplosion.push(new Array());
	arrayWalls.push(new Array());
	for (let j = 0; j < columns; j++) {
		arrayMap[i][j] = new Image();
		if (i % 2 != 0 && j % 2 != 0) {
			arrayMap[i][j].src = "images/ladrillo.PNG";
			arrayObjects[i][j] = 1; 
		} else {
			arrayMap[i][j].src = "images/pasto.PNG";
			arrayObjects[i][j] = 0;
		}
		arrayExplosion[i][j] = 0; 
		arrayWalls[i][j] = 0; 
		arrayMap[i][j].onload = function () {
			ctx1.drawImage(arrayMap[i][j], position * j, position * i, position, position);
		}
	}
}












