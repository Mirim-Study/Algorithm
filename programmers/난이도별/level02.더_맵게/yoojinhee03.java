import java.util.*;

class Solution {
    public int solution(int[] scoville, int K) {
       int answer = 0;
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
        for(int scov:scoville) {
        	priorityQueue.offer(scov);
        }
       // System.out.println(priorityQueue.peek());
        while((int)priorityQueue.peek()<K&&priorityQueue.size() > 1) {
        	answer++;
        	priorityQueue.offer(priorityQueue.poll()+(priorityQueue.poll()*2));
        	//System.out.println(priorityQueue);
        }
        return priorityQueue.peek() < K ? -1 : answer;
    }
}