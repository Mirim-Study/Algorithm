class Solution {
    public int[] solution(long n) {
        String s = Long.toString(n);
        int len = s.length();
        int[] answer = new int[len];
        
        for(int i = 0; i < len; i++) 
            answer[i] = s.charAt(len - 1 - i) - 48;
        
        return answer;
    }
}
