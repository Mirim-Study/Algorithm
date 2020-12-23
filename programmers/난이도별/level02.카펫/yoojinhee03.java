class Solution {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int row,col;//°¡·Î ¼¼·Î
        System.out.println((brown+4)/2);
        for(int i=1; i<=((brown+4)/2)/2; i++) {
        	col=i;
        	row=(brown+4)/2-col;
        	if(col*row==brown+yellow) {
        		answer[0]=row;
        		answer[1]=col;
        		break;

        	}
        }
        return answer;
    }
}
