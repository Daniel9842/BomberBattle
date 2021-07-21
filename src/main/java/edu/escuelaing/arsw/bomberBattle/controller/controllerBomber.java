package edu.escuelaing.arsw.bomberBattle.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;




/**
 *
 * 
 * @author Daniel Santiago Ducuara Ardila
 *
 */

@RestController
public class controllerBomber {
	int cont = 0;
	
	@PostMapping("/players")
	public String processPoints(@RequestBody String player){
		System.out.println(player);
		cont+=1;
		return player;
	}

	/**@PostMapping("/cantPoints")
	public String getPositions(){
		return gameRoom.getPlayers();
	}*/
	
	
}
