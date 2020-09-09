function solution(strings, n) {
    return strings.sort(function(a,b){
        if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1;
        if(a[n] === b[n]) return a.localeCompare(b);
    });
}
