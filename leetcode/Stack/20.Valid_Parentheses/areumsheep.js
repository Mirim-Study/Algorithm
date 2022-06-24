/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 1. stack 배열 만들기 (안에 아무것도 없는 상태)
    // 2. s를 array로 바꾸기 변수명은 brackets
    // 3. s의 길이만큼 for문 돌기
    // 4. 만약 (, { , [ 가 나오면 stack에 넣기
    // 5. 만약 ), 앞에 ( 가 있다면 stack에 있는 ( 문자 꺼내기
    // 6. 만약 }, 앞에 { 가 있다면 stack에 있는 { 문자 꺼내기
    // 7. 만약 ], 앞에 [ 가 있다면 stack에 있는 [ 문자 꺼내기
    // 8. for문이 끝나고 stack 변수가 비어있다면 true, 아니면 false
    
    const stack = [];
    const brackets = s.split('');
    
    for(let bracket of brackets) {
        const top = stack[stack.length - 1]
        if(bracket === '(' || bracket === '{' || bracket === '[')
            stack.push(bracket);
        else if (bracket === ')' && top === '(')
            stack.pop();
        else if (bracket === '}' && top === '{')
            stack.pop();
        else if (bracket === ']' && top === '[')
            stack.pop();
        else return false;
    }
    
    if(stack.length === 0) return true;
    return false;
};
