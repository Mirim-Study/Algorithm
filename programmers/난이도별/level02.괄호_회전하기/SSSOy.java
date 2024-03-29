import java.util.Stack;

class Solution {
    public int solution(String s) {
        int answer = 0;
        final int sLength = s.length();
        final Stack<Character> stack = new Stack<>();
        
        for(int i = 0; i < sLength; i++) {
            s = i != 0? s.substring(1, sLength) + s.substring(0, 1) : s;
            
            for(char c : s.toCharArray()) {
                if(c == '{' || c == '[' || c == '(') 
                    stack.push(c);
                else if(c == '}' || c == ']' || c == ')') {
                    if(stack.empty()) {
                        stack.push(c);
                        break;
                    }
                    else if(Character.compare(stack.peek().charValue(), c) <= 0)
                        stack.pop();
                    else
                        break;
                }
            }
            if(stack.empty())
                answer++;
            
            stack.clear();
        }
        
        return answer;
    }
}
