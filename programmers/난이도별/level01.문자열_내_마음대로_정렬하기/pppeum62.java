import java.util.Arrays;

class Solution {
    public String[] solution(String[] strings, int n) {
        String[] answer = new String[strings.length];
        
        for (int i = 0; i < strings.length; i++) {
            answer[i] = strings[i].substring(n, n + 1) + strings[i];
        }
        
        Arrays.sort(answer);
        
        for (int i = 0; i < strings.length; i++) {
            answer[i] = answer[i].substring(1);
        }
        
        return answer;
    }
}
