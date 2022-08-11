class Solution {  
    public String solution(int n) {
        String[] numbers = {"4", "1", "2"};
        StringBuffer answer = new StringBuffer();
        
        while(n > 0) {
            answer.insert(0, numbers[n % 3]);
            n = (n - 1) / 3;
        }
        
        return answer.toString();
    }
}
