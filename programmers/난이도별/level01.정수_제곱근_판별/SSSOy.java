class Solution {
    public long solution(long n) {
        long answer = (long)Math.sqrt(n);
        
        answer = answer * answer != n? -1 : (answer + 1) * (answer + 1);
        
        return answer;
    }
}
