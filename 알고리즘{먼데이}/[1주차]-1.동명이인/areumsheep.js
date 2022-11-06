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
	
	for(const name of data){
		if(name.includes(standardName)) count++;
	}
	return count;
};
