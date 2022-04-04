const sorting = (a,b) => b-a;

function solution(citations) {
    let hIndex = 0;

    // 내림차순 정렬
    citations = citations.sort(sorting);
    
    // h번 이상 인용된 논문이 h편 이상 인 부분
    // hIndex의 값을 0부터 1씩 증가시키면서
    // 해당 값을 배열의 인덱스로 비교합니다.
    // 작은 값을 배열에서 발견(적은 인용 횟수)하면 반복문을 종료하고 값을 return 
    while(hIndex + 1 <= citations[hIndex]){
        hIndex++;
    }
    
    return hIndex;
}
