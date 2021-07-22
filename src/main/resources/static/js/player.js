const size = 60;
const rowsMap = 8;
const columnsMap = 14;
var bombSize = 2;
var goUp = true;
var goDown = true;
var goLeft = true;
var goRigth = true;
var intervalBombs = 3200;
var timerAlive = setInterval(itsAlive, 10);
var timerSizeBomb = setInterval(sizeBomb, 20000);
var players = [1, 2, 3, 4];
var myPlayer = 0;
var lastShift = [0];
var bombPlayer=0;
var puesto = 4;

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
	if (myPlayer == 0) {
		myPlayer = players[0];
	}
	if (e.keyCode == 39) {
		wsreference.send(1, myPlayer);
		draw(myPlayer,true,false,false,false);
	}
	else if (e.keyCode == 37) {
		wsreference.send(2, myPlayer);
		draw(myPlayer,false,true,false,false);
	}
	else if (e.keyCode == 38) {
		wsreference.send(3, myPlayer);
		draw(myPlayer,false,false,true,false);
	}
	else if (e.keyCode == 40) {
		wsreference.send(4, myPlayer);
		draw(myPlayer,false,false,false,true);
	}
	else if (e.keyCode == 32) {
		wsreference.send(5, myPlayer);
		if (myPlayer == 1 && player1.bombPlayerInMap==false) {
			bombPlayer=1;
			player1.makeBomb(bombPlayer);
			setTimeout(setStateBomb, intervalBombs, myPlayer);
		} else if (myPlayer == 2 && player2.bombPlayerInMap==false) {
			bombPlayer=2;
			player2.makeBomb(bombPlayer);
			setTimeout(setStateBomb, intervalBombs, myPlayer);
		} else if (myPlayer == 3 && player3.bombPlayerInMap==false) {
			bombPlayer=3;
			player3.makeBomb(bombPlayer);
			setTimeout(setStateBomb, intervalBombs, myPlayer);
		} else if (myPlayer == 4 && player4.bombPlayerInMap==false) {
			bombPlayer=4;
			player4.makeBomb(bombPlayer);
			setTimeout(setStateBomb, intervalBombs, myPlayer);
		}

	}

}


function orderBomb(orderBombPlayer) {
	if (orderBombPlayer == 1  && player1.bombPlayerInMap==false) {
		player1.makeBomb(1);
		setTimeout(setStateBomb, intervalBombs, orderBombPlayer);
	} else if (orderBombPlayer == 2  && player2.bombPlayerInMap==false) {
		player2.makeBomb(2);
		setTimeout(setStateBomb, intervalBombs, orderBombPlayer);
	} else if (orderBombPlayer == 3  && player3.bombPlayerInMap==false) {
		player3.makeBomb(3);
		setTimeout(setStateBomb, intervalBombs, orderBombPlayer);
	} else if (orderBombPlayer == 4  && player4.bombPlayerInMap==false) {
		player4.makeBomb(4);
		setTimeout(setStateBomb, intervalBombs, orderBombPlayer);
	}
}

function draw(playerSelect,rightPressed,leftPressed,upPressed,downPressed) {

	if (playerSelect == 1) {
		player1.drawPlayer(rightPressed,leftPressed,upPressed,downPressed);
	} else if (playerSelect == 2) {
		player2.drawPlayer(rightPressed,leftPressed,upPressed,downPressed);
	} else if (playerSelect == 3) {
		player3.drawPlayer(rightPressed,leftPressed,upPressed,downPressed);
	} else if (playerSelect == 4) {
		player4.drawPlayer(rightPressed,leftPressed,upPressed,downPressed);
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
		console.log();
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
					window.location.href = "/results.html?puesto="+(puesto)+"&player=1"
				}else{
					puesto-=1;
				}
			}
			if (arrayExplosion[player2.playerRowArray][player2.playerColumnArray] != 0 && player2.playerAlive) {
				player2.setPlayerAlive();
				draw(2);
				if (myPlayer == 2) {
					window.alert("Fuiste eliminado de la partida");
					window.location.href = "/results.html?puesto="+(puesto)+"&player=2"
				}else{
					puesto-=1;
				}
			}
			if (arrayExplosion[player3.playerRowArray][player3.playerColumnArray] != 0 && player3.playerAlive) {
				player3.setPlayerAlive();
				draw(3);
				if (myPlayer == 3) {
					window.alert("Fuiste eliminado de la partida");
					window.location.href = "/results.html?puesto="+(puesto)+"&player=3"
				}else{
					puesto-=1;
				}
			}
			if (arrayExplosion[player4.playerRowArray][player4.playerColumnArray] != 0 && player4.playerAlive) {
				player4.setPlayerAlive();
				draw(4);
				if (myPlayer == 4) {
					window.alert("Fuiste eliminado de la partida");
					window.location.href = "/results.html?puesto="+(puesto)+"&player=4"
				}else{
					puesto-=1;
				}
			}
		}
		if (myPlayer==1 && player1.playerAlive==true && player2.playerAlive==false && player3.playerAlive==false && player4.playerAlive==false) {
			window.location.href = "/results.html?puesto=1&player=1"
		}
		if (myPlayer == 2 && player2.playerAlive==true && player1.playerAlive==false && player3.playerAlive==false && player4.playerAlive==false) {
			window.location.href = "/results.html?puesto=1&player=2"
		}
		if (myPlayer == 3 && player3.playerAlive==true && player1.playerAlive==false && player2.playerAlive==false && player4.playerAlive==false) {
			window.location.href = "/results.html?puesto=1&player=3"
		}
		if (myPlayer == 4 && player4.playerAlive==true && player1.playerAlive==false && player2.playerAlive==false && player3.playerAlive==false) {
			window.location.href = "/results.html?puesto=1&player=4"
		}
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
		let msg = '{ "direction": ' + (press) + ', "numberPlayer": ' + (player) + "}";
		console.log("sending: ", msg);
		this.wsocket.send(msg);
	}
}

var comunicationWS = new BomberBattleChannel(BomberBattleServiceURL(),
	(msg) => {
		var obj = JSON.parse(msg);
		console.log("On func call back ", msg);
		changePlayer(obj.numberPlayer);
		if (obj.direction == 1) {
			selectDraw(obj.numberPlayer,true,false,false,false);
		} else if (obj.direction == 2) {
			selectDraw(obj.numberPlayer,false,true,false,false);
		} else if (obj.direction == 3) {
			selectDraw(obj.numberPlayer,false,false,true,false);
		} else if (obj.direction == 4) {
			selectDraw(obj.numberPlayer,false,false,false,true);
		} else if (obj.direction == 5) {
			orderBomb(obj.numberPlayer);

		}

	});
let wsreference = comunicationWS;

function BomberBattleServiceURL() {
	var host = window.location.host;
	var url = 'wss://' + (host) + '/bomberService';
	var url2 = 'ws://localhost:8080/bomberService';
	return url2;
}

function changePlayer(playersMessage) {
	if (playersMessage == 1 && myPlayer == 0 && lastShift.includes(playersMessage)==false) {
		lastShift.push(playersMessage);
		players.shift();
	} else if (playersMessage == 2 && myPlayer == 0 && lastShift.includes(playersMessage)==false) {
		lastShift.push(playersMessage);
		players.shift();
	} else if (playersMessage == 3 && myPlayer == 0 && lastShift.includes(playersMessage)==false) {
		lastShift.push(playersMessage);
		players.shift();
	}
}


function selectDraw(playersMessages,rightPressed,leftPressed,upPressed,downPressed) {
	if (playersMessages == 1) {
		draw(1,rightPressed,leftPressed,upPressed,downPressed);
	} else if (playersMessages == 2) {
		draw(2,rightPressed,leftPressed,upPressed,downPressed);
	} else if (playersMessages == 3) {
		draw(3,rightPressed,leftPressed,upPressed,downPressed);
	} else if (playersMessages == 4) {
		draw(4,rightPressed,leftPressed,upPressed,downPressed);
	}
}