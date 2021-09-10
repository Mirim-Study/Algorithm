class Solution {
    public String solution(String[] table, String[] languages, int[] preferences) {
        String answer = "";
        int score = 0;
        
        for(int i = 0; i < table.length; i++) {
            String[] scores = table[i].split(" ");
            int languageScore = 0;
            
            for(int j = 1; j < scores.length; j++) {
                for(int k = 0; k < languages.length; k++) {
                    String language = languages[k];
                    int preference = preferences[k];
                    
                    if(scores[j].equals(language)) {
                        languageScore = languageScore + ((scores.length - j) * preference);
                    }
                }
            }
            
            if(languageScore > score) {
                answer = scores[0];
                score = languageScore;
            }
            else if(languageScore == score) {
                answer = answer.compareTo(scores[0]) < 0? answer : scores[0];
            }
        }
        
        return answer;
    }
}
