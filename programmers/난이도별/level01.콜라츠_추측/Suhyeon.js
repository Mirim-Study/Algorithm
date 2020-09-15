function solution(num) {
    var answer = 0;
    
    if(num==1){
        return 0;
    }
    
    do{
        if(num%2==0)
        {
            num=num/2;
            answer++;
        }
        else if(num%2!=0) 
        {
            num=num*3+1;
            answer++;
        }
    }while(num!=1&&answer!=500)
        
    if(answer==500)answer=-1;
    
    return answer;
}
