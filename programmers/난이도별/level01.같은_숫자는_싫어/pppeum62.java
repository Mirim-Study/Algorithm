import java.util.*;

public class Solution {
    public List<Integer> solution(int []arr) {
        List<Integer> answer = new ArrayList<Integer>(List.of(arr[0]));

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i - 1])
                answer.add(arr[i]);
        }
        
        return answer;
    }
}
