const canvasMap = document.getElementById('canvasMap');
const ctx1 = canvasMap.getContext('2d');
canvasMap.width = 900;
canvasMap.height = 540;


const canvasPlayer = document.getElementById('canvasPlayer');
const ctx2 = canvasPlayer.getContext('2d');
canvasPlayer.width = 900;
canvasPlayer.height = 540;

const canvasBomb = document.getElementById('canvasBomb');
const ctx3 = canvasBomb.getContext('2d');
canvasBomb.width = 900;
canvasBomb.height = 540;

const canvasBoom = document.getElementById('canvasBoom');
const ctx4 = canvasBoom.getContext('2d');
canvasBoom.width = 900;
canvasBoom.height = 540;

const canvasMapBomb = document.getElementById('canvasMapBomb');
const ctx5 = canvasMapBomb.getContext('2d');
canvasMapBomb.width = 900;
canvasMapBomb.height = 540;

const canvasExplosionBomb = document.getElementById('canvasExplosionBomb');
const ctx6 = canvasExplosionBomb.getContext('2d');
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
