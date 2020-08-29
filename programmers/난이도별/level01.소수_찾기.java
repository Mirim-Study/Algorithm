class Solution {
    public int solution(int n) {
        int answer = 0;
        int cnt = 0;

        for(int i = 2; i <= n; i++) {
            cnt = 0;
            
            for(int j = 1; j <= Math.sqrt(i); j++) {
                
                if(i % j == 0) cnt++;
                
                if(cnt >= 2) break;
            }

            if ( cnt < 2) answer++;
        }
        
        return answer;
    }
}
