const canvasLobby = document.getElementById('canvasLobby');
const ctx1 = canvasLobby.getContext('2d');
canvasLobby.width = 1000;
canvasLobby.height = 800;
var loading = new Image();
	loading.src = 'images/loading.png';
	loading.onload = function () {
		ctx1.drawImage(loading, 200, 450, 600, 300);
	}


var players=0;
let points = {pointsarr:[]};
let allPoints={newpointsarr:[]};
points.pointsarr.push([1]);
sumPlayer();

function sumPlayer(){
    let msg = points;
	points = {pointsarr:[]}; 
         fetch("/players",{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(msg)
         })
         .then(res=> res.json())
 }


getPlayers();
 function getPlayers(){
	fetch("/cantPoints",{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             }
         })
		 .then(res=> res.json())
		 .then(res => allPoints = res)
		 .then(resultPoints => console.log(resultPoints));
	console.log(""+allPoints);
} 