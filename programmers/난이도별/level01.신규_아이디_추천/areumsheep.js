function solution(new_id) { 
    let answer = '';
    
    //1단계 소문자로 전체 변경
    answer = new_id.toLowerCase();
    
    //2단계 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
    const secondReg = /[^a-z1-9-_.]/g;
    answer = answer.replace(secondReg, '');
    
    //3단계 ... / .. > .
    const thirdReg = /[.]{1,}/g; //1개 이상인 경우
    answer = answer.replace(thirdReg, '.');
    
    //4단계 마침표가 처음이나 끝에 위치한다면 제거
    if(answer.startsWith('.', 0)) answer = answer.substring(1, answer.length);
    if(answer.endsWith('.')) answer = answer.substring(0, answer.length-1);
    
    //5단계 빈 문자열이라면 'a' 대입
    if(!answer[0]) answer = 'a';
    
    //6단계 16자 이상이면 첫 15개의 문자를 제외한 나머지 제거, 제거 후 마침표가 끝에 존재한다면 삭제
    if(answer.length >= 16) answer = answer.substring(0, 15);
    if(answer.endsWith('.')) answer = answer.substring(0, answer.length-1);
    
    //7단계 2자 이하라면 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙이기
    const lastWord = answer[answer.length-1];
    if(answer.length <= 2) answer = answer.padEnd(3, lastWord);
    
    console.log(answer);
    return answer;
}
