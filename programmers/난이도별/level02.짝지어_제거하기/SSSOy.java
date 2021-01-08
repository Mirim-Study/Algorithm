import java.util.Stack;

class Solution
{
    public int solution(String s)
    {   
        Stack<Character> st = new Stack<>();
        
        for(char c : s.toCharArray()) {
            if(!st.empty()) {
                if(st.peek() == c) 
                    st.pop();
                else 
                    st.add(c);
            }
            else 
                st.add(c);
        }
        
        return st.size() == 0? 1 : 0;
    }
}
