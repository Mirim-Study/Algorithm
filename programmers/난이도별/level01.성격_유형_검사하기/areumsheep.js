function solution(survey, choices) {
    var answer = '';
    const surveyTypes = ['R','T','C','F','J','M','A','N'];
    const choiceObj = {};
    
    for(const type of surveyTypes) {
        choiceObj[type] = 0;
    }
    
    for(const index in survey){
        const [first, second] = survey[index].slice('');
        const choice = choices[index];
        
        if(choice < 4) choiceObj[first] += Math.round(3/choice);
        else if (choice > 4) choiceObj[second] += choice - 4;
    }
    
    for(let index = 0; index <= 6; index += 2){
        const firstType = choiceObj[surveyTypes[index]];
        const secondType = choiceObj[surveyTypes[index+1]];
        
        answer += firstType >= secondType ? surveyTypes[index] : surveyTypes[index+1];
    }
    
    return answer;
}
