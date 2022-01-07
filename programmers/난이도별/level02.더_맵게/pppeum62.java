import java.util.PriorityQueue;

class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> score = new PriorityQueue<>();

        for (int i : scoville) {
            score.add(i);
        }
        
        while (score.size() > 1) {
            if (score.peek() >= K) break;
            score.add(score.poll() + score.poll() * 2);
            answer++;
        }
        
        return score.peek() >= K ? answer : -1;
    }
}
