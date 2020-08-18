import java.util.*;

public class yoojinhee03 {

	public static void main(String[] args) {
		System.out.println(solution(6));
		
	}
	public static int solution(int n) {
		int answer=n;
		for(int i=2; i<=n/2; i++) {
			if(n%i==0) {
				answer+=i;
			}
		}
		return answer;
    }
}
	
