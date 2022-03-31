function solution(left, right) {
    let result = 0;
    [...Array(right-left+1).keys()].map((value) => {
        let count = 0;
        const loopLenght = value + left;
        for (let i = 1; i<=loopLenght; i++) {
            if (loopLenght % i === 0) count += 1;
        }
        
        if (count % 2 === 0) result += loopLenght;
        else result -= loopLenght;
    });
    
    return result;
}
