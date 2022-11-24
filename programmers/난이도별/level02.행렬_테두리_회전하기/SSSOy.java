class Solution {
    public int[] solution(int rows, int columns, int[][] queries) {
        int[] answer = new int[queries.length];
        int[][] arr = new int[rows][columns];
        
        for(int i = 0, n = 1; i < rows; i++) {
            for(int j = 0; j < columns; j++) {
                arr[i][j] = n++;
            }
        }
        
        for(int i = 0; i < queries.length; i++) {
            int[] query = queries[i];
            int temp = arr[query[0] - 1][query[1] - 1];
            answer[i] = temp;
            
            for(int j = query[0] - 1; j < query[2] - 1; j++) {
                int moveValue = arr[j + 1][query[1] - 1];
                arr[j][query[1] - 1] = moveValue;
                if(answer[i] > moveValue) {
                    answer[i] = moveValue;
                }
            }
            for(int j = query[1] - 1; j < query[3] - 1; j++) {
                int moveValue = arr[query[2] - 1][j + 1];
                arr[query[2] - 1][j] = moveValue;
                if(answer[i] > moveValue) {
                    answer[i] = moveValue;
                }
            }
            for(int j = query[2] - 1; j >= query[0]; j--) {
                int moveValue = arr[j - 1][query[3] - 1];
                arr[j][query[3] - 1] = moveValue;
                if(answer[i] > moveValue) {
                    answer[i] = moveValue;
                }
            }
            for(int j = query[3] - 1; j > query[1]; j--) {
                int moveValue = arr[query[0] - 1][j - 1];
                arr[query[0] - 1][j] = moveValue;
                if(answer[i] > moveValue) {
                    answer[i] = moveValue;
                }
            }
            arr[query[0] - 1][query[1]] = temp;
        }
        
        return answer;
    }
}
