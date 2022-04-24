// 1
function solution(numbers, target) {
  const numbersLength = numbers.length;
  let answer = 0;

  function subTree(depth, result) {
    if (depth === numbersLength) {
      if (result === target) {
        answer += 1;
      }
      return;
    }
    subTree(depth + 1, result + numbers[depth]);
    subTree(depth + 1, result - numbers[depth]);
  }

  subTree(0, 0);

  return answer;
}

// 2
// function solution(numbers, target) {
//     let count = 0;
//     const numbersLength = numbers.length;
//     const loopLength = Math.pow(2, numbersLength);

//     for(let i=0; i<loopLength; i++) {
//         const binaryNum = i.toString(2);
//         const binaryNumArray = new Array(numbersLength - (binaryNum.length - 1)).join('0') + binaryNum;

//         let result = 0;
//         for(let j=0; j<numbersLength; j++) {
//             const sign = binaryNumArray[j] === '1' ? 1 : -1;
//             result += numbers[j] * sign;
//         }

//         if (result === target) count++;
//     }

//     return count;
// }
