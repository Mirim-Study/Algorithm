function solution(num) {
    var answer = 0;
    while(num!=1){
        num=(num%2==0)?num/2:(num%2==1)?num*3+1:0;
        answer++;
    }
    return (answer>=500)?-1:answer;
}
