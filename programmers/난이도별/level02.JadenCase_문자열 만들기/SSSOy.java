class Solution {
    public String solution(String s) {
        String answer = "";
        
        s = s.toLowerCase();
        int len = s.length();
        
        answer += Character.toUpperCase(s.charAt(0));
        
        for(int i = 1; i < len; i++) {
            char ch = s.charAt(i);
            answer += (ch != ' ')?
                      (s.charAt(i - 1) == ' ')? Character.toUpperCase(ch)
                      : ch : " ";
        }
        
        return answer;
    }
}
