function solution(numbers) {
    var answer = 0;
    for(let n=1; n<10; n++){
       if(!numbers.includes(n)){
           answer += n;
       }
    }
    return answer;
}
