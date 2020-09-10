package programmers;

import java.util.ArrayList;
import java.util.Arrays;

public class yoojinhee03 {

	public static void main(String[] args) {
		int[] arr= {1,2,3,4,5};
		for(int i:solution(arr)) {
			System.out.println(i);
		}
	}
	
	 public static int[] solution(int[] answers) {
        int[] answer = {};
        int stu[][]= 
        	{
        			{1,2,3,4,5},//5
        			{2,1,2,3,2,4,2,5},
        			{3,3,1,1,2,2,4,4,5,5,},
        	};
        int[] count = new int[stu.length];
        
        for(int i=0,ansLen=answers.length; i<ansLen; i++) {
        	if(stu[0][i%stu[0].length]==answers[i]) count[0]++;
        	if(stu[1][i%stu[1].length]==answers[i]) count[1]++;
        	if(stu[2][i%stu[2].length]==answers[i]) count[2]++;
        }
        int temp=count[0];
        int idx=0;
        ArrayList<Integer> list = new ArrayList<Integer>();
        for(int i=1, cntLen=count.length; i<cntLen; i++) {
        	if(temp<=count[i]) {
        		temp=count[i];
        		idx=i+1;
        	}
        }
        if(idx!=0)list.add(idx);
        for(int i=0, cntLen=count.length; i<cntLen; i++) {
        	if(i==idx-1)continue;
        	if(temp==count[i]) list.add(i+1);
        }
        answer=list.stream().mapToInt(Integer::intValue).toArray();
        Arrays.sort(answer);
        return answer;
    }
}
