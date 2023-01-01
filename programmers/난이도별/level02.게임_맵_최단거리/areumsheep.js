function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;

  const direction = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const queue = [[0, 0]];
  let distance = Array.from(Array(row), () => Array(col).fill(1));

  while (queue.length > 0) {
    const [y, x] = queue.shift();

    for (const [dy, dx] of direction) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < col && ny < row) {
        if (maps[ny][nx] === 1 && distance[ny][nx] === 1) {
          distance[ny][nx] = distance[y][x] + 1;
          queue.push([ny, nx]);
        }
      }
    }
  }

  return distance[row - 1][col - 1] === 1 ? -1 : distance[row - 1][col - 1];
}
