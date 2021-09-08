function getGrade(score) {
    if (score >= 9) return 'A';
    else if (score >= 8) return 'B';
    else if (score >= 7) return 'C';
    else if (score >= 5) return 'D';
    else return 'F';
}

function solution(scores) {
    var answer = '';
    var length = scores.length;
    var temp, max, min;
    
    for (var j = 0; j < scores[0].length; j++) {
        temp = 0;
        var stu = [];
        
        for (var i = 0; i < length; i++) {
            temp += scores[i][j];
            stu.push(scores[i][j]);
        }
        
        max = Math.max(...stu);
        min = Math.min(...stu);
        
        if (stu.indexOf(max) === j && stu.filter(e => max === e).length < 2) {
            temp = (temp - max) / (length - 1);
        } else if (stu.indexOf(min) === j && stu.filter(e => min === e).length < 2) {
            temp = (temp - min) / (length - 1);
        } else {
            temp /= length;
        }
        
        answer += getGrade(parseInt(temp / 10));
    }

    return answer;
}
