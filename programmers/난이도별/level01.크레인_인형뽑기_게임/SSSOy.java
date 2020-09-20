import java.util.*;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        List<Integer> list = new ArrayList();
        
        for(int i : moves) {
            i -= 1;
            int doll = 0;
            for(int j = 0; j < board[i].length; j++) {
                doll = board[j][i];
                if(doll != 0) {
                    board[j][i] = 0;
                    break;
                }
            }
            if(doll == 0)
                continue;
            
            list.add(doll);
            int size = list.size() - 1;
            if(size > 0) {
                if(list.get(size) == list.get(size - 1)) {
                    list.remove(size);
                    list.remove(size - 1);
                    answer += 2;
                }
            }  
        }
        
        return answer;
    }
}
