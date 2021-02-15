class Solution {
    boolean solution(String s) {
        boolean answer = true;
        int count = 0;
        
        for(int i=0; i<s.length(); i++) {
            char c = s.charAt(i);
            if(c == 'p' || c == 'P') count++;
            else if(c == 'y' || c == 'Y') count--;
        }
        if(count != 0) answer = false;
        
        return answer;
    }
}
