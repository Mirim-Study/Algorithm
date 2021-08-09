import java.util.*;

class Solution {
    public String solution(int[][] scores) {
        String answer = "";
        
        for(int i = 0; i < scores.length; i++) {
            int selfScore = scores[i][i];
            
            List<Integer> studentScores = new ArrayList<Integer>();
            for(int j = 0; j < scores.length; j++)
                studentScores.add(scores[j][i]);
            
            double studentScore = studentScores.stream().mapToInt(Integer::intValue).sum();
            boolean b = false;
            
            Collections.sort(studentScores);
            
            if(studentScores.get(0) == selfScore && studentScores.get(1) != selfScore) {
                studentScore -= selfScore;
                studentScore = studentScore / (scores.length - 1);
                b = true;
            }
            if(b == false) {
                Collections.reverse(studentScores);
                
                if(studentScores.get(0) == selfScore && studentScores.get(1) != selfScore) {
                    studentScore -= selfScore;
                    studentScore = studentScore / (scores.length - 1);
                    b = true;
                }
            }
            if(b == false)
                studentScore = studentScore / scores.length;
            
            answer += grade(studentScore);
        }
        
        return answer;
    }
    
    public String grade(double score) {
        int grade = (int)(score / 10);
        
        switch(grade) {
            case 10 : case 9 : return "A";
            case 8 : return "B";
            case 7 : return "C";
            case 6 : case 5 : return "D";
            default : return "F";
        }
    }
}
