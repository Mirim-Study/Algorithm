function solution(arr) {
    return arr.filter((r, index) =>  r !== arr[index + 1]);
}
