package edu.escuelaing.arsw.bomberBattle.cache;

public class SavePoints {
	
	public String positions="";
	private static SavePoints _instance = new SavePoints();
	/**
	 * Class constructor SavePoints.
	 */
	private SavePoints() {}
	/**
	 * this method returns the instance
	 * @return the class instance
	 */
	public static SavePoints getInstance() {
		return _instance;
	}

	/**
	 * this method saves the new points drawn by the user
	 * @param newPositions drawn by the user
	 */
	public void addPositions(String newPositions) {
		positions=newPositions;
	}
	/**
	 * the positions drawn by the user
	 * @return the positions drawn
	 */
	public String getPositions() {
		return positions;
	}
}
