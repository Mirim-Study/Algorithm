function solution(s) {
    let target = s;
    let repeatCount = 0;
    let zeroCount = 0;
    const regex = new RegExp(/0/, 'g');
    
    while(target !== "1"){
        const targetLength = target.length;
        const distinctZero = target.replace(regex, '');
        
        zeroCount += targetLength - distinctZero.length;
        target = (distinctZero.length).toString(2);
        repeatCount++;
    }
    
    return [repeatCount, zeroCount];
}
