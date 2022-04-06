function solution(n) {
    let compositionNum = new Set();
    const sqrtNum = Math.sqrt(n);
    
    for(let i=2; i<sqrtNum; i++) {
        if(!compositionNum.has(i)){
            for(let j=i*i; j<=n; j+=i) {
                compositionNum.add(j);
            }
        }
    }
    
    const primeNum = n - compositionNum.size - 1
    return primeNum;
}
