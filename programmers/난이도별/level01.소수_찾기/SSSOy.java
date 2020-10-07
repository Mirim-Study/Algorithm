class Solution {
    public int solution(int n) {
        int answer = 0;
        
        for(int i = 2; i <= n; i++) {
            boolean flag = true;
            for(int j = 2; j <= Math.sqrt(i) && flag; j++) 
                flag = i % j == 0 ? false : true;
            answer += flag? 1 : 0;
        }
        
        return answer;
    }
}
