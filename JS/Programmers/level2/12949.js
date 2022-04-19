// 연습문제 > 행렬의 곱셈

// first ans
function solution(arr1, arr2) {
  const ans = [];
  for (let i = 0; i < arr1.length; i++) {
    let k = 0;
    const line = [];
    while (k < arr2[0].length) {
      let sum = 0;
      for (let j = 0; j < arr2.length; j++) {
        sum += arr1[i][j] * arr2[j][k];
      }
      k++;
      line.push(sum);
    }
    ans.push(line);
  }
  return ans;
}

// refactoring 1
function solution(arr1, arr2) {
  const ans = [];
  for (let i = 0; i < arr1.length; i++) {
    const line = [];

    for (let k = 0; k < arr2[0].length; k++) {
      line.push(arr2.reduce((sum, v, j) => sum + arr1[i][j] * v[k], 0));
    }

    ans.push(line);
  }
  return ans;
}
