// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const data = [];

rl.on('line', (line) => data.push(line))
	.on('close', () => { console.log(solution(data)); process.exit(); });

const solution = (data) => {
	const [count, index] = data.shift().split(' ');
	
	data.sort((a, b) => {
		const [firstName, firstHeight] = a.split(' ');
		const [secondName, secondHeight] = b.split(' ');
		
		if(firstName < secondName) return -1;
		if(firstName > secondName) return 1;
		if(firstHeight < secondHeight) return -1;
		if(firstHeight > secondHeight) return 1;
		return 0;
	});
	
	return data[index-1];
};
