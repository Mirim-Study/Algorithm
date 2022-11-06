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
	data.shift();
	const numbers = data[0].split(' ').map(Number);
	
	const sum = numbers.reduce((acc, cur, index)=> {
		const currentIndex = index + 1;
		if(currentIndex === 1) return acc;
		else if(currentIndex <= 3) return acc + cur;
		for(let i = 2; i <= Math.floor(Math.sqrt(currentIndex)); i++) {
			if(currentIndex % i === 0) return acc;
		}
		return acc + cur;
	}, 0);
	return sum;
};
