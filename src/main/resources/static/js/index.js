window.onload=function(){document.onkeydown=desplazar};

    function desplazar(objeto){
    var tecla = objeto.which;
   
        var situacionY = document.getElementById("player").offsetLeft;
        var situacionX = document.getElementById("player").offsetTop;
        switch (tecla){
            case 37 :   
                player.style.left = situacionY-220+"px" ; break;
            case 38 :
                player.style.top = situacionX-220+"px" ;break;
            case 39 : 
        		player.style.left = situacionY-180+"px" ;break;
            case 40 :
                player.style.top = situacionX-180+"px" ;break;
        }
    }