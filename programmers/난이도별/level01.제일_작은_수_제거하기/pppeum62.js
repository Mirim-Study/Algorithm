function solution(arr) {
    let idx = 0;
    let min = arr[0];
    
    if(arr.length === 1) {
        return [-1];
    }
    
    for(let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        idx = arr.indexOf(min);
    }
    
    arr.splice(idx, 1);
    
    return arr;
}
