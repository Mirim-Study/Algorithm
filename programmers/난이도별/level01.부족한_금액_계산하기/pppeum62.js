function solution(price, money, count) {
    var answer = price;
    
    for (var i = 2; i <= count; i++) {
        answer += price * i;
    }

    return answer > money ? answer - money : 0;
}
