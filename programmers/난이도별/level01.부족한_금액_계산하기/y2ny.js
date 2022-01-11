function solution(price, money, count) {
    let answer = -1;
    
    for (let i = 1; i <= count; i++) {
        money -= price * i;
    }
    
    return money >= 0 ? 0 : answer * money;
}
