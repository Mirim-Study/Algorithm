class Solution {
    public String solution(String s) {
        String answer = "";
        int len = s.length();
        
        answer = len % 2 == 0? s.substring(len / 2 - 1, len / 2 + 1) : s.substring(len / 2, len / 2 + 1);
        
        return answer;
    }
}
