/**
 * @param s string
 * @returns string
 */
function solution(s: string): string {
    // 영어만 두 문자씩 가져오는 정규식
    // 여기서 \w는 [A-Za-z0-9_]과 동일하다.
    const regExp:RegExp = /(\w)(\w)/g;
    
    return s.toUpperCase().replace(regExp, (a: string)=> {
        // a = (TR),(HE),(LL) ...
        // 0번째는 항상 짝수 , 1번째는 항상 홀수
        return a[0] + a[1].toLowerCase();
    })

}

// ts test console
const result1 = solution("try hello world")
console.log('result1', result1); // "result1",  "TrY HeLlO WoRlD" 

const result2 = solution("my love") 
console.log('result2', result2); // "result2",  "My LoVe" 

const result3 = solution("my lovely dog")
console.log('result3', result3); // "result3",  "My LoVeLy DoG"

const result4 = solution("")
console.log('result4', result4); // "result4",  ""

