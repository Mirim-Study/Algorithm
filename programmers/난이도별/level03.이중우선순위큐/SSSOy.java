import java.util.PriorityQueue;

class Solution {
    public int[] solution(String[] operations) {
        int[] answer = new int[2];
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        for (String operation : operations) {
            String[] splitedOperation = operation.split(" ");
            
            if (operationArr[0].equals("I")) {
                pq.add(Integer.parseInt(operationArr[1]));
            } else {
                if (operationArr[1].equals("-1")) {
                    pq.poll();
                } else {
                    PriorityQueue<Integer> tempPq = new PriorityQueue<>();
                    while (pq.size() > 1) {
                        tempPq.add(pq.poll());
                    }
                    pq = tempPq;
                }
            }
        }
        
        if (pq.size() > 1) {
            answer[1] = pq.peek();
            while (pq.size() > 0) 
                answer[0] = pq.poll();
        }
        
        return answer;
    }
}
