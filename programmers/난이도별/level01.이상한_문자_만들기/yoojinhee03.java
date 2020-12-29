class Solution {
    public String solution(String s) {
        String answer = "";
        String[] arr=s.split("");
        int idx=0;
        for(int i=0; i<arr.length; i++) {
        	if(arr[i].equals(" ")) {
        		idx=0;
        		answer+=" ";
        	}else {
        		idx++;
        		answer+=idx%2==0?arr[i].toLowerCase():arr[i].toUpperCase();
        	}
        
        }
        return answer;
    }
}