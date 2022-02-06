function solution(s) {
    const regex = /^[0-9]+$/
    return regex.test(s) ? [4,6].includes(s.length): false
}
