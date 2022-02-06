function solution(s){
    const countOfPAndY = s.split('').reduce((accumulator, currentValue) => { 
        switch(currentValue) {
            case 'P': case 'p': {
                return accumulator += 1;
            }
            case 'Y': case 'y': {
                return accumulator -= 1;
            }
            default: {
                return accumulator;
            }
        }
    }, 0)
    return countOfPAndY === 0
}
