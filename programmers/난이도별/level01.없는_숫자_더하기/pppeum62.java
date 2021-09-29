class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        String none = "123456789";
        
        for (int i : numbers) {
            none = none.replace(i+"", "");
        }

        for (int i = 0; i < none.length(); i++) {
            answer += Integer.parseInt(none.charAt(i)+"");
        }
        
        return answer;
    }
}
