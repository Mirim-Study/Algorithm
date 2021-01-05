class Solution {
    public int solution(int n) {
        int answer = 0;
        String st = "";
        
        while(n != 0) {
            st += n % 3;
            n /= 3;
        }
        
        int i = (int)Math.pow(3, st.length() - 1);
        for(char ch : st.toCharArray()) {
            answer += (ch - 48) * i;
            i /= 3;
        }
        
        return answer;
    }
}
