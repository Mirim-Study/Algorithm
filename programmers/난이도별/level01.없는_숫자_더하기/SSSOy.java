class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        String strNumbers = "";
        for(int i : numbers) 
            strNumbers += Integer.toString(i);

        for(int i = 0; i < 10; i++) {
            answer += strNumbers.contains(Integer.toString(i)) == false? i : 0;
        }
        
        return answer;
    }
}
