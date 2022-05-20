// 2021 Dev-Matching: 웹 백엔드 개발자(상반기) > 행렬 테두리 회전하기

function solution(rows, columns, queries) {
  const answer = [];
  const matrix = Array.from(Array(rows + 1), () =>
    new Array(columns + 1).fill(0)
  );
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      matrix[i][j] = (i - 1) * columns + j;
    }
  }
  queries.forEach((query) => {
    const [x1, y1, x2, y2] = query;
    const nums = [matrix[x1][y1]];
    // 윗줄
    for (let i = y1 + 1; i <= y2; i++) {
      nums.push(matrix[x1][i]);
      matrix[x1][i] = nums[nums.length - 2];
    }
    // 오른쪽줄
    for (let i = x1 + 1; i <= x2; i++) {
      nums.push(matrix[i][y2]);
      matrix[i][y2] = nums[nums.length - 2];
    }
    // 아랫줄
    for (let i = y2 - 1; i >= y1; i--) {
      nums.push(matrix[x2][i]);
      matrix[x2][i] = nums[nums.length - 2];
    }
    // 왼쪽줄
    for (let i = x2 - 1; i > x1; i--) {
      nums.push(matrix[i][y1]);
      matrix[i][y1] = nums[nums.length - 2];
    }
    matrix[x1][y1] = nums[nums.length - 1];
    answer.push(Math.min(...nums));
  });
  return answer;
}
