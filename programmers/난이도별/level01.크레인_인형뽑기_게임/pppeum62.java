import java.util.ArrayList;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        ArrayList<Integer> item = new ArrayList<>();
        
        for (int i : moves) {
            for (int j = 0; j < board[0].length; j++) {
                if (board[j][i - 1] == 0) continue;
                item.add(board[j][i - 1]);
                board[j][i - 1] = 0;
                break;
            }
        }
        
        for (int i = 0; i < item.size() - 1;) {
            if (item.get(i) == item.get(i + 1)) {
                item.remove(i);
                item.remove(i);
                i = 0;
                answer += 2;
            } else {
                i++;
            }
        }
        
        return answer;
    }
}
