class Solution {
    public int[] solution(int[] answers) {
        String score = "";
        int[] count = { 0, 0, 0 };
        int[][] pattern = { { 1, 2, 3, 4, 5 }, { 2, 1, 2, 3, 2, 4, 2, 5 }, { 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 } };
        
        for (int i = 0; i < pattern.length; i++) {
            int index = 0;
            for (int j = 0; j < answers.length; j++) {
                if (index >= pattern[i].length) index = 0;
                if (answers[j] == pattern[i][index++]) count[i]++;
            }
        }
        
        int max = count[0];
        for (int i : count) max = Math.max(i, max);
        
        for (int i = 0; i < count.length; i++) {
            if (count[i] == max) score += (i + 1);
        }
        
        int index = 0;
        int[] result = new int[score.split("").length];
        
        for (String i : score.split("")) {
            result[index++] = Integer.parseInt(i);
        }
        
        return result;
    }
}
