import java.util.Arrays;

class Solution {
    public int solution(int[] A, int[] B) {
        int answer = 0;
        Arrays.sort(A);
        Arrays.sort(B);
        
        int BIndex = 0;
        for(int i = 0; i < A.length; i++, BIndex++) {
            if(BIndex >= B.length) break;
            
            if(A[i] < B[BIndex]) {
                answer++;
            } else {
                i--;
            }
        }
        
        return answer;
    }
}
