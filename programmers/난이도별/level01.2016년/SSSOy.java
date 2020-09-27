class Solution {
    public String solution(int a, int b) {
        String answer[] = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};
        int day = 4;
        
        for(int i = 1; i < a; i++) {
            switch(i) {
                case 1 : case 3 : case 5 : case 7 : case 8 : case 10 : case 12 :
                    day += 31;
                    break;
                case 2 :
                    day += 29;
                    break;
                default :
                    day += 30;
            } 
        }
        day += b;
        
        return answer[day % 7];
    }
}
