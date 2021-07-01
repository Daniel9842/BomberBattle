package edu.escuelaing.arsw.bomberBattle.map;

import java.util.ArrayList;

public class Map {
	public ArrayList<ArrayList<String>> map;
	public int rows,columns;
	
	public Map() {
		map = new ArrayList<ArrayList<String>>();
		rows = 8;
		columns = 15;
		for(int i=0;i<rows;i++) {
			map.add(new ArrayList<String>());
			for(int j=0;j<columns;j++) {
				if(i%2!=0 && j%2!=0) {
					map.get(i).add("1");
				}else {
					map.get(i).add("0");
				}
			}
		}
	}
}
