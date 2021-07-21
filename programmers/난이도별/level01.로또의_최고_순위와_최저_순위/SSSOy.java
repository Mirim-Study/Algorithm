class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        int[] answer = {0, 0};
        int match_max = 0;
        int match_min = 0;
        
        for(int i = 0; i < 6; i++) {
            if(lottos[i] == 0) {
                match_max++;
                continue;
            }
            for(int j = 0; j < 6; j++) {
                if(lottos[i] == win_nums[j]) {
                    match_max++;
                    match_min++;
                }
            }
        }
        
        answer[0] = match_max != 0? 7 - match_max : 6;
        answer[1] = match_min != 0? 7 - match_min : 6;
        return answer;
    }
}
