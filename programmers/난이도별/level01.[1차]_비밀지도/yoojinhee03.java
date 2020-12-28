import java.util.*;
class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];
        String[] results=new String[n];
        int result;
        for(int i=0; i<n; i++) {
        	result=arr1[i]|arr2[i];
        	results=String.format("%0"+n+"d", Long.parseLong(Integer.toBinaryString(result))).split("");
        	answer[i]="";
        	for(int j=0; j<results.length; j++) {
        		answer[i]+=results[j].equals("1")?"#":" ";
        	}
        }
        return answer;
    }
}