function solution(array, commands) {
    var answer = [];
    var command = [];
    var last;
    for(var i=0; i < commands.length; i++){
        command = array.slice(commands[i][0]-1,commands[i][1]);
        command.sort((a , b) => a - b); 
        // 문자로 인식하고 정렬해서 10, 45, 101의 숫자가 있다면 10, 101, 45 순으로 정렬이 될 것이다.
        last = commands[i][2]-1;
        answer[i] = command[last];
    }
    return answer;
}
