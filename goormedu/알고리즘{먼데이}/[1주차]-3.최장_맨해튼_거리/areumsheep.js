// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		const point = line.trim().split(' ').map(Number);
		point.sort((a,b) => a-b);
		
		let [x1, y1, x2, y2] = [...point];
		console.log(Math.abs(x1 - x2) + Math.abs(y1 - y2));
		rl.close();
	}
	
	process.exit();
})();
