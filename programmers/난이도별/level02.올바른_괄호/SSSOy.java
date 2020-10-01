class Solution {
    boolean solution(String s) {
        int num1 = 1, num2 = 0;
        int len = s.length();
        
        if(s.charAt(0) == ')' || s.charAt(len - 1) == '(')
            return false;
        
        for(int i = 1; i < len; i++) {
            char c = s.charAt(i);
            if(c == '(') num1++;
            else num2++;
            
            if(num2 > num1) return false;
        }

        return num1 == num2? true : false;
    }
}
