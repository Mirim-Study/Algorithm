function solution(absolutes, signs) {
    let sum = 0;
    for(const idx in absolutes) {
        sum += signs[idx] ? absolutes[idx] : -(absolutes[idx]);
    }
    return sum;
}
