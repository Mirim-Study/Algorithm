// Run by Node.js
const readline = require('readline');
const data = [];

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		data.push(line);
		rl.close();
	}
	
	const doubleCount = data[0] * 2;
	for(let i = 1; i < doubleCount; i+=2){
		let successCount = 0;
		const personCount = data[i];
		const gradeArray = data[i+1].split(' ')
											.filter((grade) => grade !== '')
											.map(Number);
		const gradeSum = gradeArray.reduce((acc, cur) => acc + cur);
		
		gradeArray.forEach((cur) => {
			if(gradeSum / personCount <= cur) {
				successCount++;
			}
		})
		
		console.log(`${successCount}/${personCount}`)
	}
	process.exit();
})();
