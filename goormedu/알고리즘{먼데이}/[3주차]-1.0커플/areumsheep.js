// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const data = [];

rl.on('line', (line) => data.push(line))
	.on('close', () => { console.log(solution(data)); process.exit(); });

const solution = (data) => {
	const result = [];
	const inputCount = data.shift();
	const grades = data[0].split(' ').map(Number).sort((a,b) => b-a);
	
	for(let i = 0; i < grades.length; i++){
		const minusIndex = grades.indexOf(-grades[i]);
		if(minusIndex === -1) result.push(grades[i]);
	}
	
	return result.reduce((acc, cur) => acc += cur);
};
