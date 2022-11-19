const threeMusketeers = (members, candidates) => {
    let answer = 0;
    const membersLength = members.length;
    
    if (membersLength > 2) {
        const sum = members.reduce((acc, cur) => acc + cur, 0);
        return sum === 0;
    }
    
    candidates.forEach((newMember, index) => {
        answer += threeMusketeers([...members, newMember], candidates.slice(0, index));
    });
    
    return answer;
}

function solution(number) {
    return threeMusketeers([], number);
}
