import java.util.*;

public class yoojinhee03 {

	public static void main(String[] args) {
		
		System.out.println(solution(3));
		
	}
	public static long solution(long n) {
        long answer = 0;
   
        if(Math.sqrt(n)==(int)Math.sqrt(n)) {
        	return (long) Math.pow(Math.sqrt(n)+1, 2);
        }else {
        	return -1;
        }
    }
}