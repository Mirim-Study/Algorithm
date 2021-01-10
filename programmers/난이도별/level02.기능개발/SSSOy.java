import java.util.*;

class Solution {
    public List<Integer> solution(int[] progresses, int[] speeds) {
        List<Integer> answer = new ArrayList<Integer>();
        int idx = 0;
        int idx2 = 0;
        
        for(int i = 0; i < 100; i++) {
            boolean f = false;
            
            for(int j = idx2; j < progresses.length; j++)
                if(progresses[j] != -1)
                    progresses[j] += speeds[j];
            
            for(int j = idx2; j < progresses.length; j++) {
                if(progresses[j] < 100) break;
                
                progresses[j] = -1;
                if(f) 
                    answer.set(idx, answer.get(idx) + 1);
                else {
                    answer.add(1);
                    f = true;
                }
                idx2++;
            }
            if(progresses[progresses.length - 1] == -1) break;
            if(f) idx++;
        }
        
        return answer;
    }
}
