function solution(survey, choices) {
    let answer = '';
    const types = ['R','T','C','F','J','M','A','N'];
    const score = {};
    
    const MAX_FIRST_TYPE = 3;
    const MIDDLE_CHOICE = 4;
    
    for(const type of types) {
        score[type] = 0;
    }
    
    for(const index in survey){
        const [first, second] = survey[index].slice('');
        const choice = choices[index];
        
        //비동의 (1~3)
        if(choice < MIDDLE_CHOICE) score[first] += Math.round(MAX_FIRST_TYPE/choice);
        //동의 (5~7)
        else if (choice > MIDDLE_CHOICE) score[second] += choice - MIDDLE_CHOICE;
    }
    
    for(let index = 0; index <= 6; index += 2){
        const firstType = score[types[index]];
        const secondType = score[types[index+1]];
        
        answer += firstType >= secondType ? types[index] : types[index+1];
    }
    
    return answer;
}
