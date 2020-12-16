class Solution {
    public boolean solution(int x) {
        int sum=0,num=x;
        do {
        	sum+=x%10;
        	x/=10;
        }while(x!=0);
        return num%sum==0;

    }
}