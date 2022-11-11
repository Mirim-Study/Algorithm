// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const data = [];

rl.on('line', (line) => {
	data.push(line);
	
}).on('close', () => {
	console.log(solution(data));
	process.exit();
});

const solution = (data) => {
	let count = 0;
	let beforeWord = '';
	const wordArray = data[1].toLowerCase().split('');
	
	wordArray.forEach((cur) => {
		if(cur !== beforeWord) count++;
		beforeWord = cur;
	})
	
	return count;
};
