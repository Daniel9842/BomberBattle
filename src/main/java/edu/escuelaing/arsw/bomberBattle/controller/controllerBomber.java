package edu.escuelaing.arsw.bomberBattle.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.escuelaing.arsw.bomberBattle.cache.SavePoints;

/**
 * this class controls which method will be written as html page
 * 
 * @author Daniel Santiago Ducuara Ardila
 *
 */

@RestController
public class controllerBomber {
	
	private SavePoints cache = SavePoints.getInstance();
	
	@PostMapping("/points")
	public String processPoints(@RequestBody String points){
		int lenthg = points.length();
		String newPoints  = points.substring(0,2)+"new"+points.substring(2,lenthg);
		cache.addPositions(newPoints);
		return points;
	}
	/**
	 * this class returns the points stored in savepoints
	 * @return all new points drawn
	 */
	@PostMapping("/newPoints")
	public String getPositions(){
		System.out.println(cache.getPositions());
		return cache.getPositions();
	}
}
