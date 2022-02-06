function solution(arr) {
    return arr.length === 1 ? [-1] : arr.filter(value => value !== Math.min(...arr));
}
