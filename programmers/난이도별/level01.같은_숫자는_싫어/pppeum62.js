function solution(arr)
{
    let answer = [];
    
    answer.push(arr[0]);
    
    for(let i = 1; i < arr.length; i++) {
        if(answer[answer.length - 1] != arr[i]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}
