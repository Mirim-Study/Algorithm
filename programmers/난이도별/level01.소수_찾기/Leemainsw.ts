/**
 * @param num: number 숫자
 * @returns number
 */
function solution(num: number): number {
    // 1 ~ num 길이 만큼의 배열을 생성해서 1을 채운다.
    const arr: Array<number> = new Array(num).fill(1);
    
    // 1은 소수가 아니기 때문에 0으로 변경
    arr[0] = 0;
    
    // 2부터 자신의 제곱근을 돌면서 자신의 배수를 0으로 바꾼다.
    for(let i: number = 2; i*i <= num; i++){ //2,3,4,5,
        for(let j:number = i*i; j<=num; j+=i){ // (2,4,8..), (3,6,9..)
            //j-1인 경우는 인덱스 때문에 ^^
            arr[j-1] = 0;
        }
    }
    
    return arr.filter((el)=>el==1).length
}

const result1 = solution(10);
console.log('result1', result1); // "result1",  4 

const result2 = solution(5);
console.log('result2', result2); // "result2",  3
