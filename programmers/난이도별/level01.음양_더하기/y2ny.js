function solution(absolutes, signs) {
    return signs.map((sign, index) => (sign ? absolutes[index] : absolutes[index] * -1)).reduce((a, b) => a + b)
}
