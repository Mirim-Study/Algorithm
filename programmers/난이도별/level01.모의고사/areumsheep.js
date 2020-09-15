function solution(answers) {
    let a = [1, 2, 3, 4, 5]; //5
    let b = [2, 1, 2, 3, 2, 4, 2, 5]; //8
    let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10
    let cnt = [0,0,0];
    
    for(var i=0; i<answers.length; i++){
        if(a[i%5] === answers[i]) cnt[0]++;
        if(b[i%8] === answers[i]) cnt[1]++;
        if(c[i%10] === answers[i]) cnt[2]++;
    }
    
    var result = [];
    let max = Math.max.apply(null, cnt);
    for(let j=0; j<3; j++){
        if(cnt[j] === max){
            result.push(j+1);
        }
    }
    
    return result;
}
