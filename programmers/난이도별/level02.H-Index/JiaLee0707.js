function solution(citations) {
    let HIndex = citations.length + 1;
    let HindexThem;
    
    do {
        HIndex--;
        HindexThem = citations.filter((value) => HIndex <= value);
     } while(HIndex > HindexThem.length);
    
    return HIndex;
}
