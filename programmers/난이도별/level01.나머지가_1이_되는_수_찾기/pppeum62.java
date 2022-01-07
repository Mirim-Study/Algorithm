class Solution {
    public int solution(int n) {
        int answer = 2;
        
        while (n % answer != 1) {
            answer++;
        }
        
        return answer;
    }
}
