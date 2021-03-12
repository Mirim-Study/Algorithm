function solution(numbers) {
    var answer = [];
    for(var i =0 ;i < numbers.length ; i++){
        for (var j= 0 ; j< numbers.length ; j++){
            if(i==j)continue;
            answer.push(numbers[i] + numbers[j]);
        }
    }
    const set = Array.from(new Set(answer)); 
    return set.sort((a, b) => a - b)
}
