function solution(array, commands) {
    const INDEX_GAP = 1;
    const result = [];
    
    
    for(const command of commands){
        const copy_array = [...array];
        const splice_array = copy_array.slice(command[0] - INDEX_GAP, command[1]);
        splice_array.sort((a, b) => a - b);
        
        result.push(splice_array[command[2] - INDEX_GAP]);
    }
    
    return result;
}
