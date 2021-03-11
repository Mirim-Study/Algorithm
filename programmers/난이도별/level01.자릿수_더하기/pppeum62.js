function solution (n) {
    var answer = 0;
    var length = (n+'').length;

    for (var i = 0; i < length; i++) {
        answer += n % 10;
        n = parseInt(n / 10);
    }

    return answer;
}
