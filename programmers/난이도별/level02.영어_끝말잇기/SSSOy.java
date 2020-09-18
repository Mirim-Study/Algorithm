import java.util.*;

class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = new int[2];
        List<String> words_list = new ArrayList();
        int turn_cnt = 1;
        int player_num = 2;
        
        words_list.add(words[0]);
        
        for(int i = 1; i < words.length; i++) {
            if(words_list.indexOf(words[i]) != -1 || words[i].charAt(0) != words[i - 1].charAt(words[i - 1].length() - 1)) {
                answer[0] = player_num;
                answer[1] = turn_cnt;
                break;
            }
            
            player_num++;
            words_list.add(words[i]);
            
            if(player_num > n) {
                player_num = 1;
                turn_cnt++;
            }
        } 
    
        return answer;
    }
}
