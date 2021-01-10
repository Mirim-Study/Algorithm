import java.util.*;

class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> q = new PriorityQueue<>();
        for(int i : scoville)
            q.add(i);
        
        while(q.size() > 1) {
            if(q.peek() >= K) 
                break;
            q.add(q.poll() + q.poll() * 2);
            answer++;
        }
        
        return q.peek() >= K? answer : -1;
    }
}
