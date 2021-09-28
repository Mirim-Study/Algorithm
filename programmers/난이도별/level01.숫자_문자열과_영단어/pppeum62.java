class Solution {
    public int solution(String s) {
        final String[] numbers = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
        
        for (int i = 0; i < numbers.length; i++) {
            s = s.replace(numbers[i], i+"");
        }
        
        return Integer.parseInt(s);
    }
}
