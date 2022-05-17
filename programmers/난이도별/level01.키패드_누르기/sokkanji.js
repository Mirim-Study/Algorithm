function getDistance(target, handLocation) {
  // 행의 인덱스 거리 + 열의 인덱스 거리
  const distance = Math.abs(target[0] - handLocation[0]) + Math.abs(target[1] - handLocation[1]);

  return distance;
}

function solution(numbers, hand) {
  const keys = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let answer = "",
    leftHandLocation = keys["*"],
    rightHandLocation = keys["#"];

  numbers.map((value, index) => {
    let isLeft = false;
    switch (value) {
      case 1:
      case 4:
      case 7:
        // 왼쪽 키
        isLeft = true;
        break;
      case 2:
      case 5:
      case 8:
      case 0:
        // 중앙 키
        
        // 누를 키값, 현재 손가락의 위치
        const leftDistance = getDistance(keys[value], leftHandLocation);
        const rightDistance = getDistance(keys[value], rightHandLocation);

        if (leftDistance === rightDistance) {
          isLeft = hand === "left" ? true : false;
        } else if (leftDistance < rightDistance) {
          isLeft = true;
        }
        break;
      default:
        // 오른쪽 키
        break;
    }

    if (isLeft) {
      answer += "L";
      leftHandLocation = keys[value];
    } else {
      answer += "R";
      rightHandLocation = keys[value];
    }
  });

  return answer;
}
