import java.util.*;

class Solution {
    public long solution(long n) {
        String answer = "";
        
        String s = Long.toString(n);
        String[] arr = s.split("");
        Arrays.sort(arr, Collections.reverseOrder());
        
        for(String a : arr) 
            answer += a;
        
        return Long.parseLong(answer);
    }
}
