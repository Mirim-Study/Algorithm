function solution(new_id) {
    var answer = '';
    
    answer = new_id.toLowerCase()
        .replace(new RegExp(/[^a-z0-9-_\.]/g), "")
        .replace(/\.{2,}/g, ".")
        .replace(new RegExp(/^\./g), "")
        .replace(new RegExp(/\.$/g), "");
    
    answer = (!answer) ? "a" : answer;
    answer = (answer.length >= 16) ? answer.slice(0, 15) : answer;
    answer = answer.replace(new RegExp(/\.$/g), "");
    
    while (answer.length <= 2) {
        answer += answer.slice(answer.length - 1);
    }
    
    return answer;
}
