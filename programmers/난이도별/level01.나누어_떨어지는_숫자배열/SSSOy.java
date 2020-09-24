import java.util.*;

class Solution {
    public int[] solution(int[] arr, int divisor) {
        List<Integer> answer = new ArrayList();
        Arrays.sort(arr);
        
        for(int i : arr) {
            if(i % divisor == 0)
                answer.add(i);
        }
        if(answer.size() == 0) 
            answer.add(-1);
        
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}
