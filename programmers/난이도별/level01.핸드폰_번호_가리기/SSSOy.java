class Solution {
    public String solution(String phone_number) {
        String answer = "";
        
        int len = phone_number.length();
        
        for(int i = 0; i < len - 4; i++) 
            answer += "*";
        
        answer += phone_number.substring(len - 4);
        
        return answer;
    }
}
