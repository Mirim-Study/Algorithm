class Solution {
    public long solution(int a, int b) {
        long answer = 0;
        for(long i = (a < b? a : b); i <= (a > b? a : b); i++) 
            answer += i;
        return answer;
    }
}
