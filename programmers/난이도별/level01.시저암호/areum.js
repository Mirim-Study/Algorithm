function solution(s, n) {
    var answer = "";
    for(let i=0; i<s.length; i++){
        if(s[i] == ' ')
            answer += ' ';
        else 
            answer += String.fromCharCode( (s.charCodeAt(i) > 90) ? (s.charCodeAt(i)+n-97)%26+97 : (s.charCodeAt(i)+n-65)%26+65)
    }
    return answer;
}
