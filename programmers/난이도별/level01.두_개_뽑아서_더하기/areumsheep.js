function solution(numbers) {
    let answer = [];
    let numLen = numbers.length;
    let sum = 0;
    
    for(let i = 0; i<numLen; i++){
        for(let j = i+1; j<numLen; j++){
            sum = numbers[i] + numbers[j];
            if(answer.indexOf(sum) === -1){
                answer.push(sum);
            }
        }
    }
    
    answer.sort(function (a,b){
        return a-b;
    })
    
    return answer;
}
