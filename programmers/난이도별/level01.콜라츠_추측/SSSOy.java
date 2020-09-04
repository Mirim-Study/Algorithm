class Solution {
    public int solution(int num) {
        long n = num;
        
        for(int i = 0; i < 500; i++) {
            if(n == 1)
                return i;
            
            if(n % 2 == 0)
                n /= 2;
            else
                n = (n * 3) + 1;
        }
        return -1;
    }
}
