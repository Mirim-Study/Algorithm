function solution(n, lost, reserve) {
    var answer = 0;
    var array = [];
    
    // 모든 배열에 1을 기본값으로 넣어줌
    // 체육복을 잃어버린 사람은 0으로 수정
    // 별도의 체육복이 있는 사람은 2로 수정
    for(let i=0; i< n; i++){
        array.push(1);
        if(reserve.includes(i+1)){
            array[i]++;
        }
        if(lost.includes(i+1)){
            array[i]--;
        }
    }

    // 만약 0인 사람을 만나면 앞 뒤 확인해서 2가 있을 경우 각각 1로 바꿈
    // 양쪽의 사람이 별도의 체육복이 있을 경우 앞부터 확인
    for(let i=0; i<n; i++){
        if(array[i] === 0){
            if(array[i-1] === 2){
                array[i]++;
                array[i-1]--;
            }
            else if(array[i+1] === 2){
                array[i]++;
                array[i+1]--;
            }
        }
    }
    
    // 1 이상 (체육복을 가지고 있는 사람 + 별도의 체육복을 가지고 있는 사람) 일 경우 answer ++
    for(let i=0; i<n; i++){
        if(array[i] >= 1){
            answer++;
        }
    }
    
    return answer;
}
