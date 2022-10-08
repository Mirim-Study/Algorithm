function solution(n, arr1, arr2) {
    var answer = [];
    
    arr1 = arr1.map((value) => value.toString(2));
    arr2 = arr2.map((value) => value.toString(2));
    
    for(let i=0; i<n; i++) {
        answer[i] = '';
        const value1 = arr1[i].padStart(n, '0');
        const value2 = arr2[i].padStart(n, '0');
        
        for(let j=0; j<n; j++) {
            if(value1[j] === '1' || value2[j] === '1') answer[i] += '#';
            else answer[i] += ' ';
        }
    }
    return answer;
}
