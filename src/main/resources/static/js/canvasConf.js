const canvasMap = document.getElementById('canvasMap');
const ctx1 = canvasMap.getContext('2d');
canvasMap.width = 900;
canvasMap.height = 540;


const canvasPlayer = document.getElementById('canvasPlayer');
const ctx2 = canvasPlayer.getContext('2d');
canvasPlayer.width = 900;
canvasPlayer.height = 540;

const canvasBombOne = document.getElementById('canvasBombOne');
const ctx3 = canvasBombOne.getContext('2d');
canvasBombOne.width = 900;
canvasBombOne.height = 540;

const canvasBombTwo = document.getElementById('canvasBombTwo');
const ctx4 = canvasBombTwo.getContext('2d');
canvasBombTwo.width = 900;
canvasBombTwo.height = 540;

const canvasBombThree = document.getElementById('canvasBombThree');
const ctx5 = canvasBombThree.getContext('2d');
canvasBombThree.width = 900;
canvasBombThree.height = 540;

const canvasBombFour = document.getElementById('canvasBombFour');
const ctx6 = canvasBombFour.getContext('2d');
canvasBombFour.width = 900;
canvasBombFour.height = 540;

const canvasMapBomb = document.getElementById('canvasMapBomb');
const ctx7 = canvasMapBomb.getContext('2d');
canvasMapBomb.width = 900;
canvasMapBomb.height = 540;

const canvasExplosionBomb = document.getElementById('canvasExplosionBomb');
const ctx8 = canvasExplosionBomb.getContext('2d');
canvasExplosionBomb.width = 900;
canvasExplosionBomb.height = 540;

const arrayMap = new Array();
var arrayObjects = new Array();
var arrayExplosion = new Array();
var arrayWalls = new Array();

var bombi = new Image();
bombi.src = 'images/bomb.png';

var explosion = new Image();
explosion.src = 'images/kaboom.png';

var bombsMap = new Image();
bombsMap.src = 'images/bombMap.png';

var bombsExplosion = new Image();
bombsExplosion.src = 'images/kaboom.png';
