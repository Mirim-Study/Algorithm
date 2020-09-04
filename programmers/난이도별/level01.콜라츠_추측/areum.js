function solution(num) {
    var i = 1;
    if(num == 1)
        return 0;
    
    while(i <= 500){
        if(num %2 == 0)
            num /= 2;
        else if(num %2 == 1)
            num = num * 3 + 1;
        if(num == 1){
            break;
        }
            
        i ++;
    }
    if(i > 500)
        return -1;
    
    return i;
}
