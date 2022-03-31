function solution(arr1, arr2) {
    if (!Array.isArray(arr1)) return arr1 + arr2;
    
    let temp = []
    const arrLength1 = arr1.length;
    for(let i=0; i<arrLength1; i++) {
        temp.push(solution(arr1[i], arr2[i]));
    }
    
    return temp;
}
