function solution(arr, divisor) {
    let answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0)
            answer.push(arr[i]);
    }
    
    if(answer.length < 1) {
        answer.push(-1);
    } else {
        answer.sort(function (a, b) {
            return a - b;
        });
    }
    
    return answer;
}
