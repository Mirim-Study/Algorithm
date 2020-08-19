import java.util.*;

public class yoojinhee03 {

	public static void main(String[] args) {
		int[] arr= {3,2,6};
		int divisor=10;
		for(int i:solution(arr,divisor)) {
			System.out.println(i+" ");
		}
		//System.out.println(solution(arr,divisor));		
	}
	 public static int[] solution(int[] arr, int divisor) {
        int[] answer= {};
        ArrayList<Integer> list=new ArrayList<Integer>();
        for(int i=0; i<arr.length; i++) {
        	if(arr[i]%divisor==0) {
        		list.add(arr[i]);
        	}
        }
        if(list.size()>0) {
        	answer=list.stream().mapToInt(Integer::intValue).toArray();
        }else {
        	answer=new int[1];
        	answer[0]=-1;
        }
        
        Arrays.sort(answer);
        return answer;
    }
}