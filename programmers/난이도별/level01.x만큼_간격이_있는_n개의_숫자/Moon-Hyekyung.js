function solution(x, n) {
    n+=1;
    return Array(n-1).fill(x).map((arg)=> arg*(n-=1)).reverse();
}
