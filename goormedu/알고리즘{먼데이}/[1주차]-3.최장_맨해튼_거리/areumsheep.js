// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		const point = line.trim().split(' ').map(Number);
		point.sort((a,b) => a-b);
		
		let [x1, y1, y2, x2] = [...point];
		console.log(x2 - x1 + y2 - y1);
		rl.close();
	}
	
	process.exit();
})();
