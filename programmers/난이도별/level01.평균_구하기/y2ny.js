function solution(arr) {
    return arr.reduce((prev, cur) => prev + cur, 0) / arr.length;
}
