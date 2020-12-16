class Solution {
    public int solution(int num) {
        int answer = 0;
        long NUM=num;
        if(num==1)return 0;
        for(int i=0; i<500; i++) {
        	NUM=NUM%2==0?NUM/2:NUM*3+1;
        	//System.out.println(NUM);
        	if(NUM==1)return i+1;
        }
        return -1;
    }
}