import java.util.*;

class Solution {
    public List<Long> solution(long x, long n) {
        List<Long> answer = new ArrayList();
        long m = x;
        
        while(n > 0) {
            answer.add(m);
            m += x;
            n--;
        }
        
        return answer;
    }
}
