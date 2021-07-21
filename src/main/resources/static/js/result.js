const canvasResult = document.getElementById('canvasResult');
const ctx1 = canvasResult.getContext('2d');
canvasResult.width = 1100;
canvasResult.height = 570;


const resultPosition = window.location.search;
const urlParams = new URLSearchParams(resultPosition);
var result = urlParams.get('puesto');
var player = urlParams.get('player');

var positionXMedal=750;
var positionYMedal=220;
var imageMedal = 350;

var positionXPlayer=550;
var positionYPlayer=200;
var imageWidth = 380;
var imageHeight = 180;


var gameOver = new Image();
	gameOver.src = 'images/gameOver.png';
	gameOver.onload = function () {
		ctx1.drawImage(gameOver, 450, 0, 700, 200);
	}

if (result == 4) {
	var fourPosition = new Image();
	fourPosition.src = 'images/last.png';
	fourPosition.onload = function () {
		ctx1.drawImage(fourPosition, positionXMedal, positionYMedal, imageMedal, imageMedal);
	}
} else if (result == 3) {
	var bronze = new Image();
	bronze.src = 'images/bronze.png';
	bronze.onload = function () {
		ctx1.drawImage(bronze, positionXMedal, positionYMedal, imageMedal, imageMedal);
	}
} else if (result == 2) {
	var silver = new Image();
	silver.src = 'images/silver.png';
	silver.onload = function () {
		ctx1.drawImage(silver,positionXMedal, positionYMedal, imageMedal, imageMedal);
	}
} else if (result == 1) {
	var gold = new Image();
	gold.src = 'images/gold.png';
	gold.onload = function () {
		ctx1.drawImage(gold, positionXMedal, positionYMedal, imageMedal, imageMedal);
	}
}

if (player == 4) {
	var playerFour = new Image();
	playerFour.src = 'images/gray.png';
	playerFour.onload = function () {
		ctx1.drawImage(playerFour,positionXPlayer, positionYPlayer, imageHeight, imageWidth);
	}
} else if (player == 3) {
	var playerThree = new Image();
	playerThree.src = 'images/pink.png';
	playerThree.onload = function () {
		ctx1.drawImage(playerThree, positionXPlayer, positionYPlayer, imageHeight, imageWidth);
	}
} else if (player == 2) {

	var playerTwo = new Image();
	playerTwo.src = 'images/yellow.png';
	playerTwo.onload = function () {
		ctx1.drawImage(playerTwo, positionXPlayer, positionYPlayer, imageHeight, imageWidth);
	}
} else if (player == 1) {
	var playerOne = new Image();
	playerOne.src = 'images/white.png';
	playerOne.onload = function (){
		ctx1.drawImage(playerOne,positionXPlayer, positionYPlayer, imageHeight, imageWidth);
	}
}

//document.body.innerHTML = "<h1>Tu puesto es:  "+ result+"</h1>"
