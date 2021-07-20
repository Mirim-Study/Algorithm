class Solution {
    public int solution(String s) {
        StringBuffer sbf = new StringBuffer(s);
        String[] engNum = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
        
        for(int i = 0; i < engNum.length; i++) {
            int idx = sbf.indexOf(engNum[i]);
            while(idx > -1) {
                sbf.replace(idx, idx + engNum[i].length(), String.valueOf(i));
                idx = sbf.indexOf(engNum[i]);
            }
        }
        
        return Integer.parseInt(sbf.toString());
    }
}
