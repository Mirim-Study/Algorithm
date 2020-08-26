function wander0220(n) {
    var sum = 0;
    
    for(var i = 1 ; i <= n ; i++){
        if(n%i==0) sum+=i;
    }
    
    return sum;
}
