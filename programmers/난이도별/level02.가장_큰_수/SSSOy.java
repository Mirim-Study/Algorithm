import java.util.*;

class Solution {
    public String solution(int[] numbers) {
        String answer = "";
        List<String> list = new ArrayList<String>();
        for (int i = 0; i < numbers.length; i++)
            list.add(Integer.toString(numbers[i]));
        
        list.sort((String a, String b) ->
                  (b + a).compareTo(a + b));
        
        answer = String.join("", list);
        return answer.startsWith("0")? "0" : answer;
    }
}
