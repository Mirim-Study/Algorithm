import java.util.*;

public class yoojinhee03 {

	public static void main(String[] args) {
		
		int [][] board= {{0,0,0,0,0},{0,0,1,0,3},{0,2,5,0,1},{4,2,4,4,2},{3,5,1,3,1}};
		int []moves= {1,5,3,5,1,2,1,4};
		
		System.out.println(solution(board,moves));
		
	}
	public static int solution(int[][] board, int[] moves) {
        
        int answer = 0;
        ArrayList array = new ArrayList();
		
		for(int i=0; i<moves.length; i++) {
			for(int j=0; j<board.length; j++) {
				if(board[j][moves[i]-1]!=0) {
					array.add(board[j][moves[i]-1]);
					board[j][moves[i]-1]=0;
					if(array.size()>=2) {
						if(array.get(array.size()-2)==array.get(array.size()-1)){
							array.remove(array.size()-2);
							array.remove(array.size()-1);
							answer+=2;
						}
					}
					break;
				}
			}
		}
        return answer;
    }
}