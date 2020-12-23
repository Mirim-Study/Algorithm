class Solution {
    boolean solution(String s) {
       boolean answer = true;
        int n=0;
        for(int i=0; i<s.length(); i++) {
            char c=s.charAt(i);
            n=c==('(')?n+1:n-1;
            if(i==s.length()-1&&n!=0||n<0) {
                return false;
            }
        }
        return true;
    }
}
