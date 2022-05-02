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


// 3
// function solution(numbers, target) {
//     let count = 0;
//     let loopCount = 0;
//     const loopLength = Math.pow(2, numbers.length);
    
//     let resultStack = [];
//     let lastNumIndexStack = [];
    
//     while(loopCount < loopLength) {
//         if (resultStack.length !== numbers.length) {
//             const result = pushNum(numbers[resultStack.length], loopCount, loopLength, resultStack, lastNumIndexStack);
//             resultStack.push(result);
//         } else {
//             loopCount++;
//             if (resultStack[resultStack.length - 1] === target) count++;
            
//             resultStack.pop();
//             while(isPop(lastNumIndexStack, resultStack)) {
//                 resultStack.pop();
//                 lastNumIndexStack.pop();
//             } 
//             if (resultStack.length !== 0) lastNumIndexStack.push(resultStack.length - 1);
//         }
//     }
    
//     return count;
// }

// function isPop(lastNumIndexStack, resultStack) {
//     if (lastNumIndexStack.length === 0 || resultStack.length - 1 !== lastNumIndexStack[lastNumIndexStack.length - 1])
//         return false;
//     else
//         return true;
// }

// function pushNum(num, loopCount, loopLength, resultStack, lastNumIndexStack) {    
//     if (!(loopCount === 0
//         || (resultStack.length !== 0 && loopLength / 2 === loopCount)
//         || (lastNumIndexStack.length !== 0 && resultStack.length - 1 !== lastNumIndexStack[lastNumIndexStack.length - 1]))
//        ) {
//         num *= -1;
//     }
    
//     if (resultStack.length !== 0) num = resultStack[resultStack.length - 1] + num;
    
//     return num;
// }
