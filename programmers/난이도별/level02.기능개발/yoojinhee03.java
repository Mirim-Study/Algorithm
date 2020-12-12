import java.util.*;
class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        int[] answer = {};
        Stack<Integer> stack=new Stack<Integer>();
        Stack<Integer> results=new Stack<Integer>();
        
        for(int i=0,length=progresses.length; i<length; i++) {
        	int progress=progresses[i];
        	int speed=speeds[i];
        	int day=(100-progress)%speed>0?(100-progress)/speed+1:(100-progress)/speed;
        	stack.push(day);
        }
        int day=stack.firstElement();//Ã¹¹øÂ°
        int result=1;
        for(int i=1,length=stack.size(); i<length; i++) {
        	if(day>=stack.get(i)) {
        		result++;
        	}else {
                day=stack.get(i);
        		results.push(result);
        		result=1;
        	}
        }
        results.push(result);
        answer=new int[results.size()];
        for(int i=results.size()-1; i>=0; i--) {
        	answer[i]=results.peek();
        	results.pop();
        }
        return answer;
    }
}