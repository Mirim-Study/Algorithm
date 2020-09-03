class Suhyeon {
    public long Suhyeon(int a, int b) {
        long answer = 0;
        int max = 0, min =0;
           
        if(a>b){
            max = a; min =b;
        }
        else {
            max = b; min = a;
        }   
        
        for(int i = min; i <= max; i++){
            answer += i;
        }
        
        
        return answer;
    }
}
