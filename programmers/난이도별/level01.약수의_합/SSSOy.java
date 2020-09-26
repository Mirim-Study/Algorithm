class Solution {
    public int solution(int n) {
        int answer = 0;
        
        for(int i = 1; i <= n; i++) {
            answer += n % i == 0 ? i : 0;
        }
        
        return answer;
    }
}
