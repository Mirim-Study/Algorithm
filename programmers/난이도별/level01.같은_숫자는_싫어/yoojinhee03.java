package programmers;

import java.util.ArrayList;

public class yoojinhee03 {

	public static void main(String[] args) {
		int[] arr= {1,1,3,3,0,1,1};
		for(int i:solution(arr)) {
			System.out.print(i+" ");
		}
	}
	
	public static int[] solution(int []arr) {
		
        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.add(arr[0]);
        for(int i=1; i<arr.length; i++) {
        	if(arr[i-1]!=arr[i]) {
        		arrayList.add(arr[i]);
        	}
        }
        
        return arrayList.stream().mapToInt(Integer::intValue).toArray();
    }
	
}
