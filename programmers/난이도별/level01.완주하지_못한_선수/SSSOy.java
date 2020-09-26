import java.util.*;

import java.util.Arrays;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        
        /* -- 효율성테스트 실패(시간초과)
        for(int i = 0; i < participant.length; i++) {
            for(int j = 0; j < completion.length; j++) {
                if(participant[i].equals(completion[j])) {
                    participant[i] = "";
                    completion[j] = "";
                    break;
                }
            }
        }
        
        for(int i = 0; i < participant.length; i++) {
            if(!participant[i].equals("")) {
                answer = participant[i];
                break;
            }
        }*/
        
        Arrays.sort(participant);
        Arrays.sort(completion);
        
        for(int i = 0; i < participant.length; i++) {
            if(i == completion.length) {
                answer = participant[i];
                break;
            }
            if(!participant[i].equals(completion[i])) {
                answer = participant[i];
                break;
            }
        }
        
        return answer;
    }
}
