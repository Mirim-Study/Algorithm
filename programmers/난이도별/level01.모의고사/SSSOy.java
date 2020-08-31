class Solution {
    public int[] solution(int[] answers) {
        int[][] students = {{1, 2, 3, 4, 5}, {2, 1, 2, 3, 2, 4, 2, 5}, {3, 3, 1, 1, 2, 2, 4, 4, 5, 5}};
        int[] num = {0, 0, 0};
        
        
        for(int i = 0; i < students.length; i++) {
            int len = students[i].length;
            int cnt = 0;
            int answerCnt = 0;
            for(int j = 0; j < answers.length; j++) {
                if(answers[j] == students[i][cnt]) {
                    answerCnt++;
                }
                cnt++;
                if(cnt >= len) {
                    cnt = 0;
                }
            }
            num[i] = answerCnt;
        }
        
        //bool same = num[0] == num[1]? false : num[0] == num[2]? false : num[1] == num[2]? false : true;
        
        
        int max = num[0];
        for(int i = 1; i < num.length; i++) {
            if(num[i] > max) 
                max = num[i];
        }
        
        
        int cnt = 0;
        for(int i = 0; i < num.length; i++) {
            if(num[i] == max) {
                cnt++;
            }
        }
        int[] answer = new int[cnt];
        
        cnt = 0;
        for(int i = 0; i < num.length; i++) {
            if(num[i] == max) {
                answer[cnt] = i + 1;
                cnt++;
            }
        }
        
        return answer;
    }
}
