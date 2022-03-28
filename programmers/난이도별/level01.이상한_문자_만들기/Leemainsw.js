function solution(s) {
    // 영어만 두 문자씩 가져오는 정규식
    // 여기서 \w는 [A-Za-z0-9_]과 동일하다.
    const regExp = /(\w)(\w)/g;
    
    // 모든 문자를 대문자로 변환한다.
    return s.toUpperCase().replace(regExp, (a)=> {
        // a = (TR),(HE),(LL) ...
        // 0번째는 항상 짝수, 1번째는 항상 홀수
        // a로 들어오는 문자들은 항상 대문자임으로 홀수만 소문자로 변환한다.
        return a[0] + a[1].toLowerCase();
    })

}
