// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const data = [];

rl.on('line', (line) => data.push(line)).on('close', () => {
  console.log(solution(data));
  process.exit();
});

const solution = (data) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const [size, ] = data.shift().split(' ');
  const board = Array.from(Array(Number(size) + 1), () => Array(Number(size) + 1).fill(0));

  for (const point of data) {
    const [x, y] = point.split(' ').map(Number);

    board[x][y]++;
    for (let i = 0; i < dx.length; i++) {
      const bombX = x + dx[i];
      const bombY = y + dy[i];

      if (bombX >= 1 && bombX <= size && bombY >= 1 && bombY <= size) {
        board[bombX][bombY]++;
      }
    }
  }

  return board.flat().reduce((acc, value) => acc + value, 0);
};
