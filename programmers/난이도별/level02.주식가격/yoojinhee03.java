class Solution {
    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];
        int idx=0;
        for(int i=0; i<prices.length-1; i++) {
        	for(int j=i+1; j<prices.length; j++) {
        		idx++;
        		if(prices[i]>prices[j]) {
        			answer[i]=idx;break;
        		}else {
        			answer[i]=prices.length-i-1;
        		}
        	}
        	idx=0;
        }
        return answer;
    }
}