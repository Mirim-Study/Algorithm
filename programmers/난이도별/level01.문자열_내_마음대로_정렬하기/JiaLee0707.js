function comparison(value1, value2) {
    if (value1 < value2) return -1;
    else if (value1 > value2) return 1;
    else return 0
}

function solution(strings, n) {
    // 1
    // return strings.sort((value1, value2) => {
    //     let result = comparison(value1[n], value2[n]);
    //     return result !== 0 ? result : comparison(value1, value2);
    // });
    
    // 2
    return strings.sort((value1, value2) => value1[n] !== value2[n] ? value1[n].localeCompare(value2[n]) : value1.localeCompare(value2));
}
