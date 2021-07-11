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

const canvasWall = document.getElementById('canvasWall');
const ctx5 = canvasWall.getContext('2d');
canvasBoom.width = 900;
canvasBoom.height = 540;

const arrayMap = new Array();
var arrayObjects = new Array();
var arrayExplosion = new Array();

var bombi = new Image();
bombi.src = 'images/bomb.png';

var explosion = new Image();
explosion.src = 'images/kaboom.png';

