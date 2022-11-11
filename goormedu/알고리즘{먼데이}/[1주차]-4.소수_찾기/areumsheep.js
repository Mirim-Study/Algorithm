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
  
  // 소수 구하기
  const result = numbers.reduce((acc, number, index) => {
    // index가 만약 소수라면
    if (isPrime(index+1)) {
      return acc += number;
    }
    return acc;
  }, 0);

	return result;
};

const isPrime = (n) => {
  if (n < 2) return false;
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};
