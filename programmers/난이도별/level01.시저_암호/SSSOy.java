class Solution {
    public String solution(String s, int n) {
        String answer = "";
        
        char str[] = s.toCharArray();
    
        for(char ch : str) {
            for(int j = 0; j < n; j++) {
                ch = (char)((ch == ' ')? ch :
                           (ch == 'z' || ch == 'Z')? ch - 25 : ch + 1);
            }//for
            answer += Character.toString(ch);
        }//foreach
        
        return answer;
        
    }//main
}//class
