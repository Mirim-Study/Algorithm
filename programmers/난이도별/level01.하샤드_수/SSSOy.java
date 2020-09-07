class Solution {
    public boolean solution(int x) {
        boolean answer = true;
        
        int x2 = x;
        int sum = 0;
        
        while(x2 > 0) {
            sum += x2 % 10;
            x2 /= 10;
        } 
        
        if(x % sum != 0)
            answer = false;
        
        return answer;
    }
}
