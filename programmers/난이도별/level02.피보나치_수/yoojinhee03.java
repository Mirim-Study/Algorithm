class Solution {
    public int solution(int n) {
        int answer = 0;
        int n1=0,n2=1;
        for(int i=2; i<=n; i++) {
        	answer= n1%1234567+n2%1234567;
        	n1=n2;
        	n2=answer;
        }
        return answer%1234567;
    }
}