function addZero(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

function solution(n, arr1, arr2) {
    var answer = [];
    
    for (var i = 0; i < n; i++) {
        var map = addZero((arr1[i] | arr2[i]).toString(2), n);
        var temp = "";
        for (var j = 0; j < n; j++) {
            temp += map.substring(j, j+1) === "1" ? "#" : " ";
        }
        answer.push(temp);
    }
    
    return answer;
}
