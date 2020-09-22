import java.util.*;

class Solution {
    public String solution(String s) {
        String[] arr = s.split(" ");
        List<Integer> list = new ArrayList();
        
        for(String a : arr) 
            list.add(Integer.parseInt(a));
        
        int min = Collections.min(list);
        int max = Collections.max(list);
        
        return min + " " + max;
    }
}
