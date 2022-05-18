function solution(arr) {
    const sum = arr.reduce(
        (prev, current) => prev + current
    );
  
    return sum / arr.length;
}
