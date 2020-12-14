import java.util.*;
class Solution {
    public static int[] solution(int[] numbers) {
        int[] answer = {};
        Arrays.sort(numbers);
        TreeSet<Integer> treeSet = new TreeSet<>();
        for(int i=0, num_length=numbers.length; i<num_length-1; i++) {
        	for(int j=i+1; j<num_length; j++) {
        		treeSet.add(numbers[i]+numbers[j]);
        	}
        }
        answer=new int[treeSet.size()];
        Iterator<Integer> it = treeSet.iterator(); // 반복자 생성
        for(int i=0; i<answer.length; i++) {
        	answer[i]=it.next();
        }
      
        System.out.println(treeSet);
        return answer;
    }
}