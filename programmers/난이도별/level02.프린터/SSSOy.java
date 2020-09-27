import java.util.*;

class Solution {
    public int solution(int[] priorities, int location) {
        int answer = 0;
        List<Integer> list = new ArrayList();
        for(int i : priorities) 
            list.add(i); 
        
        while(true) {
            if(location == 0 && list.get(location) >= Collections.max(list)) 
                break;
            if(list.get(0) >= Collections.max(list)) {
                list.remove(0);
                location--;
                answer++;
            }
            else {
                list.add(list.get(0));
                list.remove(0);
                location = location == 0? list.size() - 1 : location - 1;
            }
        }
        
        return answer + 1;
    }
}
