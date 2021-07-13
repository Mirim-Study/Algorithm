function solution(record) {
    var answer = [];
    var temp = [];
    var userId = new Map;
    
    for (var i in record) {
        temp = record[i].split(" ");
        if (temp[2])
          userId.set(temp[1], temp[2]);
    }
    
    for (var i in record) {
        temp = record[i].split(" ");
        if (temp[0] === "Enter")
          answer.push(userId.get(temp[1]) + "님이 들어왔습니다.");
        else if (temp[0] === "Leave")
          answer.push(userId.get(temp[1]) + "님이 나갔습니다.");
    }
    
    return answer;
}
