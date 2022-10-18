function solution(array, commands) {
    const INDEX_GAP = 1;
    const result = [];
    
    
    for(const command of commands){
        const [start, end, index] = command;
        
        const copy_array = [...array];
        const splice_array = copy_array.slice(start - INDEX_GAP, end);
        splice_array.sort((a, b) => a - b);
        
        result.push(splice_array[index - INDEX_GAP]);
    }
    
    return result;
}
