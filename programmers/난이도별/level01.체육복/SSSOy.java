class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
        int[] students = new int[n + 2];
        
        for(int i = 1; i < n + 1; i++) 
            students[i] = 1;
        
        for(int i : lost)
            students[i]--;
        for(int i : reserve)
            students[i]++;
        
        for(int i = 1; i < n + 1; i++) {
            if(students[i] == 0) {
                if(students[i - 1] == 2) {
                    students[i - 1] = 1;
                    students[i] = 1;
                }
                else if(students[i + 1] == 2) {
                    students[i + 1] = 1;
                    students[i] = 1;
                }
            }
        }
        
        for(int i = 1; i < n + 1; i++) 
            answer += students[i] == 1 || students[i] == 2? 1 : 0; 
        
        return answer;
    }
}
