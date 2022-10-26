function solution(sizes) {
    var answer = 0;
    let max = [0,0];
    
    sizes = sizes.map((size) => size[1] > size[0] ? [size[1], size[0]] : size);
    
    for (const size of sizes) {
        if (size[0] > max[0]) max[0] = size[0];
        if (size[1] > max[1]) max[1] = size[1];
    }
    
    answer = max[0] * max[1];
    
    return answer;
}
