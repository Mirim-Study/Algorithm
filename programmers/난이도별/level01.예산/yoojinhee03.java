import java.util.*;
class Solution {
    public int solution(int[] d, int budget) {
        int answer = 0;
        int sum=0;
        Arrays.sort(d);
        
        for(int number:d) {
        	sum+=number;
        	if(sum>budget)break;
        	answer++;
        }
        return answer;
    }
}