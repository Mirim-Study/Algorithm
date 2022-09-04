function solution(new_id) { 
    const answer = new_id.toLowerCase()
            .replace(/[^a-z0-9-_.]/g, '')
            .replace(/[.]{1,}/g, '.')
            .replace(/^[.]+/, '')
            .replace(/[.]+$/, '')
            .replace(/^$/, 'a')
            .substring(0, 15)
            .replace(/[.]+$/, '');
    
    return answer.padEnd(3, answer[answer.length-1]);
}
