class Solution {
    public long solution(int a, int b) {
        long answer = b;
        int z = 1;
        if(a > b) z = -1;
        for(int i=a; i!=b; i+=z) {
            answer += i;
        }
        
        return answer;
    }
}
