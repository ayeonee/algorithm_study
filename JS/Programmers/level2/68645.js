// 월간 코드 챌린지 시즌1 > 삼각 달팽이

// try1 : success
function solution(n) {
  let sum = 0;
  const triangle = new Array(n).fill(0).map((_, idx) => {
    sum += idx + 1;
    return new Array(idx + 1).fill(0);
  });
  let direction = 0,
    down0 = 0,
    down1 = 0,
    right0 = 0,
    right1 = 0,
    up0 = 0,
    up1 = 0;
  for (let i = 1; i <= sum; i++) {
    // 아래로
    if (direction === 0) {
      triangle[down0][down1] = i;
      down0++;
      if (down0 === n || triangle[down0][down1] !== 0) {
        direction = 1;
        right0 = down0 - 1;
        right1 = down1 + 1;
      }
    }
    // 오른쪽으로
    else if (direction === 1) {
      triangle[right0][right1] = i;
      right1++;
      if (
        right1 === triangle[right0].length ||
        triangle[right0][right1] !== 0
      ) {
        direction = 2;
        up0 = right0 - 1;
        up1 = right1 - 2;
      }
    }
    // 위로
    else if (direction === 2) {
      triangle[up0][up1] = i;
      up0--;
      up1--;
      if (triangle[up0][up1] !== 0) {
        direction = 0;
        down0 = up0 + 2;
        down1 = up1 + 1;
      }
    }
  }

  return triangle.flat();
}

// best
function solution(n) {
  const triangle = new Array(n)
    .fill(0)
    .map((_, idx) => new Array(idx + 1).fill(0));
  let x = -1,
    y = 0,
    num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const division = i % 3;
      if (division === 0) x++;
      else if (division === 1) y++;
      else {
        x--;
        y--;
      }
      triangle[x][y] = num;
      num++;
    }
  }

  return triangle.flat();
}
