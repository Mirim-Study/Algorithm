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
	let count = 0;
	const firstLine = data.shift();
	const [repeat, standardName] = firstLine.split(' ');
	
	data.forEach((name) => {
		if(new RegExp(standardName).test(name)){
			count++;
		}
	})
	return count;
};
