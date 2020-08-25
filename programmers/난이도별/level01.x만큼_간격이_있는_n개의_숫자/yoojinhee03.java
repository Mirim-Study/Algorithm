import java.util.*;

public class yoojinhee03 {

	public static void main(String[] args) {
		
		for(long i:solution(2,5)) {
			System.out.print(i+" ");
		}
	}
	public static long[] solution(int x, int n) {
        long[] answer = new long[n];
        for(int i=0; i<n; i++) {
        	answer[i]= (Long.valueOf(x) * (i+1));;
        }
        return answer;
    }
}