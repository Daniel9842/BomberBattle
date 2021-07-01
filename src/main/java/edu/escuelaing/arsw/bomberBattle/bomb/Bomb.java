package edu.escuelaing.arsw.bomberBattle.bomb;

public class Bomb {
	private int size=1;
	private float positionX;
	private float positionY;


	public Bomb(int x,int y) {
		positionX = x;
		positionY = y;
	}
	
	public void setSize(int size) {
		this.size=size;
	}
	
	public void setPositionX(int x) {
		positionX=x;
	}
	
	public void setPositionY(int y) {
		positionY=y;
	}
	
	public int getSize() {
		return size;
	}
	
	public float getPositionX(int x) {
		return positionX;
	}
	
	public float getPositionY(int y) {
		return positionY=y;
	}
}