import java.util.*;

class Solution {
    public int solution(int[] citations) {
        int answer = 0;
        Arrays.sort(citations);
        
        int index = citations[citations.length - 1];
        while(true) {
            answer = index--;
            int cnt = 0;
            
            for(int i = 0; i < citations.length; i++) 
                cnt += answer <= citations[i] ? 1 : 0;
                
            if(answer <= cnt || index < 0) 
                break;
        }
        
        return answer;
    }
}
