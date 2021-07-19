const size = 60;
const rowsMap = 8;
const columnsMap = 14;
var bombSize = 2;
var goUp = true;
var goDown = true;
var goLeft = true;
var goRigth = true;
var timerAlive = setInterval(itsAlive, 50);
var timerSizeBomb = setInterval(sizeBomb, 15000);
var players = [1, 2, 3, 4];
var myPlayer = 0;
var lastShift = 0;
var bombPlayer=0;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
	if (myPlayer == 0) {
		myPlayer = players[0];
	}
	if (e.keyCode == 39) {
		rightPressed = true;
		wsreference.send(1, myPlayer);
		draw(myPlayer);
	}
	else if (e.keyCode == 37) {
		leftPressed = true;
		wsreference.send(2, myPlayer);
		draw(myPlayer);
	}
	else if (e.keyCode == 38) {
		upPressed = true;
		wsreference.send(3, myPlayer);
		draw(myPlayer);
	}
	else if (e.keyCode == 40) {
		downPressed = true;
		wsreference.send(4, myPlayer);
		draw(myPlayer);
	}
	else if (e.keyCode == 32) {
		spacePressed = true;
		wsreference.send(5, myPlayer);
		if (myPlayer == 1) {
			bombPlayer=1;
			player1.makeBomb(bombPlayer);
			setTimeout(setStateBomb, 3000, myPlayer);
		} else if (myPlayer == 2) {
			bombPlayer=2;
			player2.makeBomb(bombPlayer);
			setTimeout(setStateBomb, 3000, myPlayer);
		} else if (myPlayer == 3) {
			bombPlayer=3;
			player3.makeBomb(bombPlayer);
			setTimeout(setStateBomb, 3000, myPlayer);
		} else if (myPlayer == 4) {
			bombPlayer=4;
			player4.makeBomb(bombPlayer);
			setTimeout(setStateBomb, 3000, myPlayer);
		}

	}

}


function keyUpHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = false;
	}
	else if (e.keyCode == 37) {
		leftPressed = false;
	}
	else if (e.keyCode == 38) {
		upPressed = false;
	}
	else if (e.keyCode == 40) {
		downPressed = false;
	}
	else if (e.keyCode == 32) {
		spacePressed = false;
	}
}


function orderBomb(orderBombPlayer) {
	if (orderBombPlayer == 1) {
		player1.makeBomb(1);
		setTimeout(setStateBomb, 3000, orderBombPlayer);
	} else if (orderBombPlayer == 2) {
		player2.makeBomb(2);
		setTimeout(setStateBomb, 3000, orderBombPlayer);
	} else if (orderBombPlayer == 3) {
		player3.makeBomb(3);
		setTimeout(setStateBomb, 3000, orderBombPlayer);
	} else if (orderBombPlayer == 4) {
		player4.makeBomb(4);
		setTimeout(setStateBomb, 3000, orderBombPlayer);
	}
}

function draw(playerSelect) {

	if (playerSelect == 1) {
		player1.drawPlayer();
	} else if (playerSelect == 2) {
		player2.drawPlayer();
	} else if (playerSelect == 3) {
		player3.drawPlayer();
	} else if (playerSelect == 4) {
		player4.drawPlayer();
	}

	ctx2.clearRect(0, 0, 900, 540);

	if (player1.playerAlive) {
		var playerOne = new Image();
		playerOne.src = 'images/white.png';
		playerOne.onload = function () {
			ctx2.drawImage(playerOne, player1.posX, player1.posY, imageWidth, imageHeight);

		}
	}

	if (player2.playerAlive) {
		var playerTwo = new Image();
		playerTwo.src = 'images/yellow.png';
		playerTwo.onload = function () {
			ctx2.drawImage(playerTwo, player2.posX, player2.posY, imageWidth, imageHeight);

		}
	}
	if (player3.playerAlive) {
		var playerThree = new Image();
		playerThree.src = 'images/pink.png';
		playerThree.onload = function () {
			ctx2.drawImage(playerThree, player3.posX, player3.posY, imageWidth, imageHeight);

		}
	}
	if (player4.playerAlive) {
		var playerFour = new Image();
		playerFour.src = 'images/gray.png';
		playerFour.onload = function () {
			ctx2.drawImage(playerFour, player4.posX, player4.posY, imageWidth, imageHeight);

		}
	}




}


function itsAlive() {
	for (let z = 0; z < rows; z++) {
		for (let x = 0; x < columns; x++) {
			if (arrayExplosion[player1.playerRowArray][player1.playerColumnArray] != 0 && player1.playerAlive) {
				player1.setPlayerAlive();
				draw(1);
				if (myPlayer == 1) {
					window.alert("Fuiste eliminado de la partida");
					window.location.href = "/index.html"
				}
			}
			if (arrayExplosion[player2.playerRowArray][player2.playerColumnArray] != 0 && player2.playerAlive) {
				player2.setPlayerAlive();
				draw(2);
				if (myPlayer == 2) {
					window.alert("Fuiste eliminado de la partida");
					window.location.href = "/index.html"
				}
			}
			if (arrayExplosion[player3.playerRowArray][player3.playerColumnArray] != 0 && player3.playerAlive) {
				player3.setPlayerAlive();
				draw(3);
				if (myPlayer == 3) {
					window.alert("Fuiste eliminado de la partida");
					window.location.href = "/index.html"
				}
			}
			if (arrayExplosion[player4.playerRowArray][player4.playerColumnArray] != 0 && player4.playerAlive) {
				player4.setPlayerAlive();
				draw(4);
				if (myPlayer == 4) {
					window.alert("Fuiste eliminado de la partida");
					window.location.href = "/index.html"
				}
			}
		}
		/*if (myPlayer==1 && player1.playerAlive==true && player2.playerAlive==false && player3.playerAlive==false && player4.playerAlive==false) {
			window.alert("Eres el ganador de la partida");
			window.location.href = "/index.html"
		}
		if (myPlayer == 2 && player2.playerAlive==true && player1.playerAlive==false && player3.playerAlive==false && player4.playerAlive==false) {
			window.alert("Eres el ganador de la partida");
			window.location.href = "/index.html"
		}
		if (myPlayer == 3 && player3.playerAlive==true && player1.playerAlive==false && player2.playerAlive==false && player4.playerAlive==false) {
			window.alert("Eres el ganador de la partida");
			window.location.href = "/index.html"
		}
		if (myPlayer == 4 && player4.playerAlive==true && player1.playerAlive==false && player2.playerAlive==false && player3.playerAlive==false) {
			window.alert("Eres el ganador de la partida");
			window.location.href = "/index.html"
		}*/
	}

}
function setStateBomb(playerN) {
	if (playerN == 1) {

		player1.setBombPlayerInMap(false);
	} else if (playerN == 2) {
		player2.setBombPlayerInMap(false);
	} else if (playerN == 3) {
		player3.setBombPlayerInMap(false);
	} else if (playerN == 4) {
		player4.setBombPlayerInMap(false);
	}
}

function sizeBomb() {
	if (bombSize <= 4) {
		bombSize += 1;
	} else if (bombSize == 5) {
		clearInterval(timerSizeBomb);
	}
}

class BomberBattleChannel {
	constructor(URL, callback) {
		this.URL = URL;
		this.wsocket = new WebSocket(URL);
		this.wsocket.onopen = (evt) => this.onOpen(evt);
		this.wsocket.onmessage = (evt) => this.onMessage(evt);
		this.wsocket.onerror = (evt) => this.onError(evt);
		this.receivef = callback;
	}
	onOpen(evt) {
		console.log("In onOpen", evt);
	}
	onMessage(evt) {
		console.log("In onMessage", evt);
		if (evt.data != "Connection established.") {
			this.receivef(evt.data);
		}
	}
	onError(evt) {
		console.error("In onError", evt);
	}
	send(press, player) {
		let msg = '{ "y": ' + (press) + ', "x": ' + (player) + "}";
		console.log("sending: ", msg);
		this.wsocket.send(msg);
	}
}

var comunicationWS = new BomberBattleChannel(BomberBattleServiceURL(),
	(msg) => {
		var obj = JSON.parse(msg);
		console.log("On func call back ", msg);
		changePlayer(obj.x);
		if (obj.y == 1) {
			rightPressed = true;
			selectDraw(obj.x);
			draw();
			rightPressed = false;
		} else if (obj.y == 2) {
			leftPressed = true;
			selectDraw(obj.x);
			leftPressed = false;
		} else if (obj.y == 3) {
			upPressed = true;
			selectDraw(obj.x);
			upPressed = false;
		} else if (obj.y == 4) {
			downPressed = true;
			selectDraw(obj.x);
			downPressed = false;
		} else if (obj.y == 5) {
			spacePressed = true;
			orderBomb(obj.x);
			spacePressed = false;
		}

	});
let wsreference = comunicationWS;

function BomberBattleServiceURL() {
	var host = window.location.host;
	var url = 'wss://' + (host) + '/bomberService';
	var url2 = 'ws://localhost:8080/bomberService';
	return url;
}

function changePlayer(playersMessage) {
	if (playersMessage == 1 && myPlayer == 0 && lastShift != playersMessage) {
		lastShift = playersMessage;
		players.shift();
	} else if (playersMessage == 2 && myPlayer == 0 && lastShift != playersMessage) {
		lastShift = playersMessage;
		players.shift();
	} else if (playersMessage == 3 && myPlayer == 0 && lastShift != playersMessage) {
		lastShift = playersMessage;
		players.shift();
	}
}



function selectDraw(playersMessages) {
	if (playersMessages == 1) {
		draw(1);
	} else if (playersMessages == 2) {
		draw(2);
	} else if (playersMessages == 3) {
		draw(3);
	} else if (playersMessages == 4) {
		draw(4);
	}
}