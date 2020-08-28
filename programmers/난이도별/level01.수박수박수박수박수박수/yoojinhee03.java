import java.util.*;

public class yoojinhee03 {

	public static void main(String[] args) {
		
		System.out.println(solution(3));
		
	}
	public static String solution(int n) {
        String answer = "";
        for(int i=1; i<=n; i++) {
            answer += i%2==0 ? "박" : "수";
        }
        return answer;
  }
}