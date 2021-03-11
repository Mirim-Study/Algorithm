function solution(s){

    let pResult = s.match(/p/gi);
    let yResult = s.match(/y/gi);
    
    if (!pResult || !yResult)
        return false;
    
    if (pResult.length === yResult.length)
        return true;

    return false;
}
