// 연습문제 > 행렬의 곱셈

// ing,,,
function solution(arr1, arr2) {
  for (let n = 0; n < arr1.length; n++) {
    for (let m = 0; m < arr2.length; m++) {
      arr1[n][m] * arr2[m][n];
    }
  }
}
