class Solution {
    public int solution(String dartResult) {
        int answer = 0;
        int len = dartResult.length();
        int before_num = -10;
        
        for(int i = 0; i + 1 < len; i += 2) {
            char d1 = dartResult.charAt(i);
            char d2 = dartResult.charAt(i + 1);
            int result = d1 - 48;
            
            if(d2 != 'S' && d2 != 'D' && d2 != 'T') {
                result = Integer.parseInt(dartResult.substring(i, i + 2));
                d2 = dartResult.charAt(i + 2);
                i++;
            }
            
            switch(d2) {
                case 'D' :
                    result *= result;
                    break;
                case 'T' :
                    result *= result * result;
                    break;
            }
            
            char d3 = ' ';
            if(i + 1 != len - 1) 
                d3 = dartResult.charAt(i + 2);
            if(d3 == '*' || d3 == '#') {
                i++;
                switch(d3) {
                    case '*' :
                        result *= 2;
                        answer += before_num != -10? (before_num * 2) - before_num : 0;
                        break;
                    case '#' :
                        result *= -1;
                        break;
                }
            }
            before_num = result;
            answer += result;
        }
        
        return answer;
    }
}
