class Solution {
    public int[] solution(int[] arr) {
        int[] answer = new int[arr.length>1?arr.length-1:1];
        int min=arr[0];
        int idx=0;
        if(answer.length==1) {
        	answer[0]=-1;
        	return answer;
        }

        for(int i=1; i<arr.length; i++) {
        	if(min>arr[i])min=arr[i];
        }	
        for(int i=0; i<answer.length; i++) {
        	if(arr[i]==min)idx++;;
        	answer[i]=arr[idx];
        	idx++;
        }
        System.out.println(min);
        return answer;
    }
}