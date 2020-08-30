function solution(s){
    var answer = true;
    
    s = s.toUpperCase();
    var result1 = s.match(/P/g); //정규식 형태를 통해서 'P'라는 문자를 추출해 배열로 담는다.
    var result2 = s.match(/Y/g); //이때, g는 global을 의미함.
    
    if(result1 == null || result2 == null){
        answer = false;
    }else if(result1.length==result2.length){
         answer = true;
    }else{
        answer = false;
    }

    return answer;
}
