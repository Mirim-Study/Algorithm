class Solution {
    public String solution(String s) {
        StringBuilder answer = new StringBuilder(s.toUpperCase());
        
        boolean b = true;
        String s2 = s.toLowerCase();
        
        for(int i = 0; i < answer.length(); i++) {
            if(answer.charAt(i) == ' ') {
                b = true;
                continue;
            }
            if(b)
                b = false;
            else {
                answer.setCharAt(i, s2.charAt(i));
                b = true;
            }
        }
        
        return answer.toString();
    }
}
