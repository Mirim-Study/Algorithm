function ternary(n) {
    let num = [];
    do {
        num.push(n % 3);
        n = parseInt(n/3);
    } while(n > 0);

    return num;
}

function decimal(n) {
    let digit = n.length - 1;
    let num = 0;
    do {
        const themDigit = n.shift();
        num += themDigit * Math.pow(3, digit);
        digit--;
    }while (n.length > 0);
    
    return num;
}

function solution(n) {
    // 1
    // var answer = 0;
    // const ternaryNum = ternary(n);
    // answer = decimal(ternaryNum);
    
    // return answer;
    

    //2
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}
