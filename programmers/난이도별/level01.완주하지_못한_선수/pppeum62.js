function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i in participant) {
        if(participant[i] != completion[i]) {
            return participant[i];
        }
    }
    
}
