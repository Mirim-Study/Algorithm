class Solution {
    public int solution(int[] nums) {
        int answer = 0;

        for(int i = 0; i < nums.length; i++) {
            for(int j = i + 1; j < nums.length; j++) {
                for(int k = j + 1; k < nums.length; k++) {
                    int n = nums[i] + nums[j] + nums[k];
                    boolean b = true;
                    for(int h = 2; h <= Math.sqrt(n); h++) {
                        if(n % h == 0) { 
                            b = false;
                            break;
                        }
                    }
                    if(b == true)
                        answer++;
                }
            }
        }
        return answer;
    }
}
