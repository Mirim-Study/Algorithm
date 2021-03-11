function solution(x) {
    var temp = x;
    var sum = 0;
    
    for (var i = 0; i < (x + '').length; i++) {
        sum += temp % 10;
        temp = parseInt(temp / 10);
    }
    
    return (x % sum === 0) ? true : false;
}
