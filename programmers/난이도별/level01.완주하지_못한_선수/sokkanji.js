function solution(participant, completion) {
    let answer='';
    if(participant.length < 1 && participant.length > 100000) return;
    participant.sort();
    completion.sort();
    return answer = participant.find((p, i) => p != completion[i]);
}
