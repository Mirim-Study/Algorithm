function solution(lottos, win_nums) {
    var answer = [];
    let min = 0, max = 0;
    min = lottos.filter(num => win_nums.includes(num)).length;
    max = lottos.filter(num => num === 0).length + min;
    
    answer.push(max > 1 ? 7-(max) : 6);
    answer.push(min > 1 ? 7-(min) : 6);
    
    return answer;
}
