class Solution {
    public int[] solution(int n, int m) {
        int[] answer = new int[2];

        boolean b = true;
        int min = n < m ? n : m;

        for(int i = 1; i <= min; i++) {
            if(n % i == 0 && m % i == 0) 
                answer[0] = i;
        }

        for(int i = 1; b; i++) {
            if(i % n == 0 && i % m == 0 && b) {
                answer[1] = i;
                b = false;
            }
        }

        return answer;
    }
}
