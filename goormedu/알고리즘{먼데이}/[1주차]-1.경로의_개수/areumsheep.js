// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let data = [];

rl.on('line', (line) => {
	data.push(line);
	
}).on('close', () => {
	console.log(solution(data));
	process.exit();
});

const solution = (data) => {
	const bridge = data[1].split(' ');
	
	const sum = bridge.reduce((acc, cur) => {
		return acc *= BigInt(cur);
	}, 1n).toString();
	return sum;
};
