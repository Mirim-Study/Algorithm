function solution(lottos, win_nums) {
    var answer = [];
    var success = 0;
    var zero = lottos.filter(e => 0 === e).length;
    
    for (var n in lottos) {
        if (win_nums.indexOf(lottos[n]) != -1) success++;
    }
    
    var best = success + zero;
    var worst = success;
    
    answer.push(best < 2 ? 6 : 7 - best);
    answer.push(worst < 2 ? 6 : 7 - worst);
    
    return answer;
}
