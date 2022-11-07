// Run by Node.js
const readline = require('readline');
const data = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    data.push(line);
    rl.close();
  }

  //총 라인 수 계산
  const doubleCount = data[0] * 2;

  //홀수번째 라인만 돌며 입력받은 점수 계산
  for (let i = 1; i < doubleCount; i += 2) {
    let successCount = 0;
    const personCount = data[i];
    const gradeArray = data[i + 1]
      .split(' ')
      .filter((grade) => grade !== '')
      .map(Number);
    const gradeSum = gradeArray.reduce((acc, cur) => acc + cur);

    // 평균보다 높은 점수 카운트
    gradeArray.forEach((cur) => {
      if (gradeSum / personCount <= cur) {
        successCount++;
      }
    });

    console.log(`${successCount}/${personCount}`);
  }
  process.exit();
})();
