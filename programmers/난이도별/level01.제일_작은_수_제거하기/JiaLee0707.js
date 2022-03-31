function solution(arr) {
    // 1
    if(arr.length < 2) return [-1];
    
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr;
    
    // 2
//     if (arr.length < 2) return [-1];

//     let result = 0;
//     const arrLength = arr.length;
//     for (let i=1; i<arrLength; i++) {
//         if (arr[result] > arr[i]) result = i;
//     }

//     arr.splice(result, 1);

//     return arr;
}
