function solution(s) {
    var answer = true;
    var rglarExp = {containsNumber: /^[0-9]+$/} 
    //다른 간단한 정규식 : /^\d{6}$|^\d{4}$/
    if(s.length===4||s.length===6){
        answer = rglarExp.containsNumber.test(s);
    }else{
        answer=false;
    }
    return answer;
}
