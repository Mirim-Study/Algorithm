function solution(numbers) {
    var result = numbers.join(';')
        .split(';')
        .sort((a, b) => a+b > b+a ? -1 : 1)
        .join('');
    
    return result.slice(0, 1) === "0" ? "0" : result;
}
