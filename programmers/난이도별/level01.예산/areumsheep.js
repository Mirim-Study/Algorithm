function solution(d, budget) {
    var answer = 0;
    let num = d.sort((a, b) => a - b);
    
    for(let i=0; i<num.length; i++){
        if(budget - num[i] >= 0){
            budget -= num[i]
            answer++;
        }
        else{
            break;
        }
    }
    
    return answer;
}
