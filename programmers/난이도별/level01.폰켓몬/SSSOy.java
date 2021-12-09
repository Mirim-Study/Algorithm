import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public int solution(int[] nums) {
        Set<Integer> set = new HashSet<>();
        
        for(int num : nums) 
            set.add(num);
        
        int setLen = set.size();
        int max = nums.length / 2;
        
        return setLen > max? max : setLen;
    }
}
