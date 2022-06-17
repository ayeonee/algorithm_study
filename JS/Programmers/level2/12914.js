// 연습문제 > 멀리 뛰기

function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  const arr = new Array(n);
  arr[0] = 1;
  arr[1] = 2;
  for (let i = 2; i < n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }

  return arr[n - 1];
}
