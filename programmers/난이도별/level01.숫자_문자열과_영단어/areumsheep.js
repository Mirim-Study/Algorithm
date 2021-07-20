function solution(s) {
    //처음에는 replace에 정규식으로 하나하나씩 주다가 다른 분 코드 보고 수정하였다
    var answer = s;
    var words = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(let i = 0; i < words.length; i++) {
        let arr = answer.split(words[i]);
        console.log(arr);
        answer = arr.join(i);
    }

    return Number(answer);
}
