function solution(n, arr1, arr2) {
    const result = [];
    
    for(let i = 0; i < n; i++){
        const line = (arr1[i] | arr2[i]).toString(2);
        const replace_format = line.replace(/1/g, '#').replace(/0/g, ' ');
        
        result.push(replace_format.padStart(n, ' '));
    }
    
    return result;
}
