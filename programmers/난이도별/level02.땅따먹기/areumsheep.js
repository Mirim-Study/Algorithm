// function solution(land) {
//     var answer = 0;
//     let max_num = 0;
//     let max_num_location = [];
    
//     for(let i=0; i<land.length; i++){
//         max_num = Math.max.apply(null, land[i]);
//         max_num_location[i] = land[i].indexOf(max_num);
//         if(i >= 1 && land[i].indexOf(max_num) === max_num_location[i-1]){
//             land[i].splice(max_num_location[i],1);
//             max_num = Math.max.apply(null, land[i]);
//             max_num_location[i] = land[i].indexOf(max_num);
//         }
//         answer += max_num;
//     }
//     return answer;
// }

function solution(land) {
    return Math.max(...land.reduce((a, c, i) => {
        return [
            c[0] + Math.max(a[1], a[2], a[3]),  
            c[1] + Math.max(a[0], a[2], a[3]),
            c[2] + Math.max(a[0], a[1], a[3]),
            c[3] + Math.max(a[0], a[1], a[2]),
        ];
    }, [0, 0, 0, 0]));
}
