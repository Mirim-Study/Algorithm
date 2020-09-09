package programmers;

import java.util.ArrayList;
import java.util.Arrays;

public class yoojinhee03 {

	public static void main(String[] args) {
		int[] arr= {1,2,3,4,5};
		System.out.println(solution("pPyyY"));
		
	}
	
	static boolean solution(String s) {

        s=s.toUpperCase();
        int cnt=0;
        String arr[]=s.split("");
        for(String str:arr) 
        	cnt= str.equals("P")?cnt+1:str.equals("Y")?cnt-1:cnt+0;  		   
        if(cnt==0) return true;
        else return false;
    }
}
