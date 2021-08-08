function solution(answers) {
    var answer = [];
    
    var arr = [
        [1,2,3,4,5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    var scr = [0, 0, 0];
    var max = 0;
    
    for(var i = 0 ; i< answers.length ; i++){
        if(answers[i] == arr[0][i%5]){
            scr[0]++;
        }
        if(answers[i] == arr[1][i%8]){
            scr[1]++;
        }if(answers[i] == arr[2][i%10]){
            scr[2]++;
        }
    }
    
    for(var i = 0 ; i < scr.length ; i++){
        if(scr[i]>max){
            max = scr[i];
        }
    }
    
    for( var i = 0 ; i < scr.length ; i++){
        if(scr[i] == max){
            answer.push(i+1);
        }
    }
    return answer;
}
