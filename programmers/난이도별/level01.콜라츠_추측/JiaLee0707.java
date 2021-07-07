class Solution {
    public int solution(int num) {
        long answer = num;
        for(int i=0; i<500; i++) {
            if(answer == 1) return i;
            answer = answer%2==0 ? answer/2 : answer*3+1;
        }
        
        return -1;
    }
}
