class Solution {
    public String solution(int n) {
        String answer = "";
        for(int i=0; i<n; i++) {
            answer += (i%2==0 ? '수' : '박');
        }
        return answer;
    }
}
