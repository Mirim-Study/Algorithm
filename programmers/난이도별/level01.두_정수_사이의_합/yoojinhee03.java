package programmers;


public class yoojinhee03 {

	public static void main(String[] args) {
		int[] arr= {1,1,3,3,0,1,1};
		System.out.println(solution(3,5));
	}
	
	public static long solution(int a, int b) {
        long answer = 0;
        
        for(int i=a>b?b:a; i<=(a>b?a:b); i++) {
        	answer+=i;
        }
        return answer;
    }
}
