// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		const lineLength = line.length;
		let point = [];
		if(line[line.length-1] === ' ') point = line.substr(0, lineLength-1).split(' ')
		else point = line.split(' ');
		point = point.map(Number);
		
		point.sort((a,b) => a-b);
		
		const x = Math.abs(point[0] - point[3]);
		const y = Math.abs(point[1] - point[2]);
		console.log(x + y);
		rl.close();
	}
	
	process.exit();
})();
