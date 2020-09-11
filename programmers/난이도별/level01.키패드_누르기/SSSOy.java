class Solution {
    
    static int keypad[][] = {{0, 0}, {0, 1}, {0, 2}, {1, 0}, {1, 1}, {1, 2}, {2, 0}, {2, 1}, {2, 2}, {3, 0}, {3, 1}, {3, 2}};
    static int fingers[][] = {{3, 0}, {3, 2}};
    
    public String solution(int[] numbers, String hand) {
        String answer = "";
        
        for(int i = 0; i < numbers.length; i++) {
            switch(numbers[i]) {
                case 1 : case 4 : case 7:
                    answer += "L";
                    fingers[0] = keypad[numbers[i] - 1];
                    break;
                case 3 : case 6 : case 9:
                    answer += "R";
                    fingers[1] = keypad[numbers[i] - 1];
                    break;
                default :
                    answer += middle(numbers[i], hand);
            }
        }        
        return answer;
    }
    public static String middle(int n, String hand) {
        
    	//키패드의 인덱스 구하기
    	int key_index = n > 0? n - 1 : 10;
    	
    	int distanceL = Math.abs(fingers[0][0] - keypad[key_index][0]) + Math.abs(fingers[0][1] - keypad[key_index][1]);
    	int distanceR = Math.abs(fingers[1][0] - keypad[key_index][0]) + Math.abs(fingers[1][1] - keypad[key_index][1]);
    	
    	String returnString = distanceL < distanceR? "L" : distanceL > distanceR? "R" : (hand.substring(0, 1)).toUpperCase();
    	
    	if(returnString.equals("L")) 
    		fingers[0] = keypad[key_index];
    	else
    		fingers[1] = keypad[key_index];
    	
    	
    	return returnString;
    }
}
