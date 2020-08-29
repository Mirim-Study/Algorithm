function solution(x) {
    var sum = 0;
    var arr = (x+'').split('');
    
    for(let i=0; i<arr.length; i++){
        sum += parseInt(arr[i])
    }
    
    return x%sum == 0 ? true : false;
}
