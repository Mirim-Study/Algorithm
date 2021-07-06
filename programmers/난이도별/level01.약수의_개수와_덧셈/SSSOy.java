class Solution {
    public int solution(int left, int right) {
        int answer = 0;
        
        for(int i = left; i <= right; i++) {
            int cnt = CntDivisor(i);
            answer += cnt % 2 == 0? i : i * (-1);
        }
        
        return answer;
    }
    
    public int CntDivisor(int n) {
        int cnt = 1;
        
        for(int i = 2; i <= n; i++) {
            if(n % i == 0)
                cnt++;
        }
        
        return cnt;
    }
}

