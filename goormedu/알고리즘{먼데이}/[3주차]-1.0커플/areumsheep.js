// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const data = [];

rl.on('line', (line) => data.push(line))
	.on('close', () => { console.log(solution(data)); process.exit(); });

const solution = (data) => {
	data.shift();
	const person = data[0].split(' ').map(Number);
	return person.reduce((acc, cur) => acc += cur);
};
