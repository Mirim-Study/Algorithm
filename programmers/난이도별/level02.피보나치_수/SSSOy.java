class Solution {
    public int solution(long n) {
        int answer = 0;
        int a = 1, b = 1;
        
        for(int i = 1; i < n - 1; i++) {
            answer = ((a % 1234567) + (b % 1234567)) % 1234567;
            a = b % 1234567;
            b = answer;
        }
        
        return answer;
    }
}
