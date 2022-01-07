class Solution {
    public int solution(String s) {
        final String[] numbers = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
        StringBuilder sb = new StringBuilder(s);

        for (int i = 0; i < numbers.length; i++) {
            sb = new StringBuilder(sb.toString().replace(numbers[i], String.valueOf(i)));
        }
        
        return Integer.parseInt(sb.toString());
    }
}
