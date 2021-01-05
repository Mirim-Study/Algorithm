class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
       int answer = n-lost.length;         
        for(int i =0; i<reserve.length; i++){
            for(int j =0; j<lost.length; j++){
                if(lost[j]==1000 && reserve[i]==1000){
                    continue;
                }
                
                if(lost[j]==reserve[i]){
                    lost[j]=1000;
                    reserve[i]=1000;
                    answer++;
                }
            }
        }
        
       for(int i=0; i<reserve.length; i++){
            for(int j=0;j<lost.length; j++){
                if(reserve[i]+1==lost[j]^reserve[i]-1==lost[j]){
                    lost[j]=1000;
                    answer++;
                    break;
                }
            }
        }
        
        return answer;
    }
}
