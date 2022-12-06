class Solution {
    public int[] solution(int rows, int columns, int[][] queries) {
        int[] answer = new int[queries.length];
        int[][] arr = new int[rows][columns];
        
        // 행렬 생성
        for(int i = 0, n = 1; i < rows; i++) {
            for(int j = 0; j < columns; j++) {
                arr[i][j] = n++;
            }
        }
        
        for(int i = 0; i < queries.length; i++) {
            int x1 = queries[i][0] - 1, y1 = queries[i][1] - 1, x2 = queries[i][2] - 1, y2 = queries[i][3] - 1;
            int temp = arr[x1][y1];
            answer[i] = temp;
            
            // 좌측, 아래로 이동
            for(int j = x1; j < x2; j++) {
                int moveValue = arr[j + 1][y1];
                arr[j][y1] = moveValue;
                if(answer[i] > moveValue) {
                    answer[i] = moveValue;
                }
            }
            // 하단, 우측으로 이동
            for(int j = y1; j < y2; j++) {
                int moveValue = arr[x2][j + 1];
                arr[x2][j] = moveValue;
                if(answer[i] > moveValue) {
                    answer[i] = moveValue;
                }
            }
            // 우측, 위로 이동
            for(int j = x2; j > x1; j--) {
                int moveValue = arr[j - 1][y2];
                arr[j][y2] = moveValue;
                if(answer[i] > moveValue) {
                    answer[i] = moveValue;
                }
            }
            // 상단, 좌측으로 이동
            for(int j = y2; j > y1 + 1; j--) {
                int moveValue = arr[x1][j - 1];
                arr[x1][j] = moveValue;
                if(answer[i] > moveValue) {
                    answer[i] = moveValue;
                }
            }
            arr[x1][y1 + 1] = temp;
        }
        
        return answer;
    }
}
