let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let position = 60;
let rows = 9;
let columns = 15;
let lista = new Array();
let x = 130;
let y = 62;


for (let i = 0; i < rows; i++) {
	lista.push(new Array());
	for (let j = 0; j < columns; j++) {
		lista[i][j] = new Image();
		if (i % 2 != 0 && j % 2 != 0) {
			lista[i][j].src = "images/ladrillo.png";
		} else {
			lista[i][j].src = "images/pasto.png";
		}
		lista[i][j].onload = function () {
			ctx.drawImage(lista[i][j], position * (j + 3), position * (i + 1), position, position);
		}
	}
}

jugador = new Image();
jugador.src = "images/white.png";
jugador.onload = function () {
	ctx.drawImage(jugador, x, y, 38, 55);
}

document.body.onkeydown = function (event) {
	switch (event.keyCode) {
		case 37: // Izquierda
			x = x - 20;
			break;
		case 38: // Arriba
			y = y - 20
			break;
		case 39: // Derecha
			x = x + 20;
			break;
		case 40: // Bajar
			y = y + 20
			break;
	}
	render();
}
function render() {
	ctx.clearRect(x,y,x+38,y+55);
	jugador = new Image();
jugador.src = "images/white.png";
jugador.onload = function () {
	ctx.drawImage(jugador, x, y, 38, 55);
}	
}
