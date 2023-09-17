function isInPark(H, W, now) {
  console.log(now);
  if (H < now[1] || 0 > now[1]) return false;
  else if (W < now[0] || 0 > now[0]) return false;

  return true;
}

function solution(park, routes) {
  let answer = [];
  const OP = {
    N: [0, -1],
    S: [0, 1],
    W: [-1, 0],
    E: [1, 0],
  };
  const H = park[0].length - 1;
  const W = park.length - 1;
  park.forEach((n, index) => {
    if (n.indexOf("S") != -1) {
      answer = [index, n.indexOf("S")];
      return;
    }
  });

  routes.forEach((r) => {
    const [op, n] = r.split(" ");
    let [h, w] = [...answer];

    for (let i = 0; i < n; i++) {
      h += OP[op][1];
      w += OP[op][0];
      const inPark = isInPark(H, W, [h, w]);
      if (!inPark || !park[h][w] || park[h][w] == "X") {
        [h, w] = [...answer];
        break;
      }
    }
    answer = [h, w];
  });

  return answer;
}
