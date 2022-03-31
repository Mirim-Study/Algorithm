// 1
function solution(arr1, arr2) {
    if (!Array.isArray(arr1)) return arr1 + arr2;
    
    let temp = []
    const arrLength1 = arr1.length;
    for(let i=0; i<arrLength1; i++) {
        temp.push(solution(arr1[i], arr2[i]));
    }
    
    return temp;
}

// 2
// function solution(arr1, arr2) {
//     let answer = [];
//     const arrLength = arr1.length;
    
//     for(let i=0; i<arrLength; i++) {
//         answer.push([]);
//         const arrLength2 = arr1[i].length;
        
//         for(let j=0; j<arrLength2; j++) {
//             answer[i].push(arr1[i][j] + arr2[i][j]);
//         }
//     }
    
//     return answer;
// }
