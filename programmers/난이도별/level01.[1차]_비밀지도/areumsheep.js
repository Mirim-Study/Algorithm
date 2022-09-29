function solution(n, arr1, arr2) {
    var answer = [];
    let str;
    for(let i=0; i<n; i++){
        str = Number(arr1[i] | arr2[i]).toString(2);
        
        let strLen = str.length;
        if (strLen < n)
            str = '0'.repeat(n - strLen) + str;

        answer.push(str.replace(/1/gi,'#').replace(/0/gi,' '));
    }
    return answer;
}
