function solution(s) {
    var answer = [];
    var str = s.toLowerCase().split('');
    let count = 0;
    
    for(let i=0; i<str.length; i++){
        if(str[i] === " "){
            count = 0;
            answer += " ";
        }
        else if(str[i] !== " "){
            if(count%2==1)
                answer += str[i];
            else if(count%2==0)
                answer += str[i].toUpperCase();
            
            count++;
        }
    }
    
    return answer;
}
