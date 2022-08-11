class Solution {
    String[] numbers = {"4", "1", "2"};
    
    public String solution(int n) {
        StringBuffer answer = new StringBuffer();
        
        while(n > 0) {
            answer.insert(0, numbers[n % 3]);
            n = (n - 1) / 3;
        }
        
        return answer.toString();
    }
}
