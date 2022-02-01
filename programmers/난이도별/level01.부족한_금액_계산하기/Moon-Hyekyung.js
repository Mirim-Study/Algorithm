function solution(price, money, count) {
    let sum = 0; 
    for(let index = 1; index <=count; index++ ) {
        sum += price * index;
    }
    
    return sum <= money ? 0 : sum - money;
}
