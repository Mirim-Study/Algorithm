function solution(answers) {
    const ANSWER_SHEETS = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    let answerSheetsLength = [];
    let answerCount = [];
    ANSWER_SHEETS.forEach(answerSheet => {
        answerSheetsLength.push(answerSheet.length);
        answerCount.push(0);
    });
   
    let best = [];
    
    answers.forEach((answer, num) => {
        ANSWER_SHEETS.forEach((answerSheet, person) => {
            if (answer === answerSheet[num % answerSheetsLength[person]])
                answerCount[person]++;
        });
    });
    
    const MAX_ANSWER_COUNT = Math.max(...answerCount);
    answerCount.map((answer, index) => {
        if (answer === MAX_ANSWER_COUNT) {
            best.push(index+1);
        }
    });
    
    best.sort((a, b) => a - b);
    
    return best;
}
