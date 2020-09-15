import java.util.*;

class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        Arrays.sort(phone_book);
        
        for(int i = 0; i < phone_book.length && answer; i++) {
            for(int j = i + 1; j < phone_book.length && answer; j++) {
                int len_i = phone_book[i].length();
                int len_j = phone_book[j].length();
                if(len_i <= len_j && phone_book[i].equals(phone_book[j].substring(0, len_i))) {
                    answer = false;
                }
            }
        }
        
        return answer;
    }
}
