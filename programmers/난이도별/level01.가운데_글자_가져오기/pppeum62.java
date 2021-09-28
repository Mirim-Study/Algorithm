class Solution {
    public String solution(String s) {
        int sLen = s.length();
        
        return sLen % 2 == 0 ? s.substring(sLen / 2 - 1, sLen / 2 + 1) : s.substring(sLen / 2, sLen / 2 + 1);
    }
}
