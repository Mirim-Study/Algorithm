function solution(survey, choices) {
    var answer = '';
    const types = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0
    };
    const types_key = Object.keys(types);
    const types_key_length = types_key.length;
    
    for (const [index, value] of survey.entries()) {
        const type = value.split('');
        const chose_type = choices[index] > 4 ? type[1] : type[0];
        types[chose_type] += Math.abs(choices[index] - 4);
        // if (choices[index] < 4) types[type[0]] += 4 - choices[index];
        // else if (choices[index] > 4) types[type[1]] += choices[index] - 4;
    }
    
    for (let i=0; i<types_key_length; i+=2) {
        answer += types[types_key[i]] < types[types_key[i+1]] 
                    ? types_key[i+1]
                    : types_key[i];
    }
    
    return answer;
}
