function solution(s) {
    return s.split("").sort((a, b) => b.charCodeAt() - a.charCodeAt()).join("");
}
