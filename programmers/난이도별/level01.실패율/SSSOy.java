import java.util.*;

class Solution {
    public int[] solution(int N, int[] stages) {
        
        int[] answer = new int[N];
        List<Double> fail = new ArrayList();
        
        for(int i = 1; i <= N; i++) {
            double cnt = 0;
            double cnt_lose = 0;
            
            for(int user : stages) {
                if(user == i) 
                    cnt_lose++;
                if(user >= i)
                    cnt++;
            } //foreach
            
            fail.add(cnt_lose != 0 && cnt != 0 ? cnt_lose / cnt : 0);
            
        } //for
    
        for(int i = 0; i < N; i++) {
            double max = Collections.max(fail);
            int max_index = fail.indexOf(max);
            answer[i] = max_index + 1;
            fail.set(max_index, -1.0);
        }
        
        return answer;
        
    } //main
} //class
