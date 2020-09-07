class Solution {
    boolean solution(String s) {
        boolean answer = false;
        int cnt[]={0, 0};
        s = s.toLowerCase();
        
        for(int i = 0; i < s.length(); i++) {
            char a = s.charAt(i);
            cnt[0] = a == 'y'? cnt[0] + 1 : cnt[0];
            cnt[1] = a == 'p'? cnt[1] + 1 : cnt[1];
        }
        if(cnt[0] == cnt[1]) 
            answer = true;

        return answer;
    }
}
