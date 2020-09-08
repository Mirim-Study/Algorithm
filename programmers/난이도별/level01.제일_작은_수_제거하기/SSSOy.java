import java.util.*;

class Solution {
    public int[] solution(int[] arr) {
        
        int min = arr[0];
        List<Integer> list = new ArrayList<Integer>();
        for (int i : arr) {
            list.add(i);
            if(min > i) 
                min = i;
        }
        
        list.remove((Integer)min);
        
        int[] answer = new int[list.size() > 0? list.size() : 1];
        int size = 0;

        for(int temp : list)
            answer[size++] = temp;
        if(size == 0)
            answer[0] = -1;

        return answer;
    }
}
