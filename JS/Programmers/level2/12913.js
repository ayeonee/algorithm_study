// 연습문제 > 땅따먹기

function solution(land) {
  for (let i = land.length - 2; i >= 0; i--) {
    for (let j = 0; j < 4; j++) {
      land[i][j] =
        land[i][j] +
        Math.max(...land[i + 1].slice(0, j), ...land[i + 1].slice(j + 1));
    }
  }
  return Math.max(...land[0]);
}
