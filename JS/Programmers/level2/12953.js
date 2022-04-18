// 연습문제 > N개의 최소공배수

function getLeastCommon(x, y) {
  if (x === y) return x;
  let max = x > y ? x : y;
  let min = x < y ? x : y;
  let tmp;

  while (1) {
    tmp = max % min;
    if (tmp === 0) return (x * y) / min;
    max = min;
    min = tmp;
  }
}

function solution(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return getLeastCommon(arr[0], arr[1]);
  let leastCommon = getLeastCommon(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    leastCommon = getLeastCommon(arr[i], leastCommon);
  }
  return leastCommon;
}

// best answer
function gcd(x, y) {
  return x % y ? gcd(y, x % y) : y;
}

function solution(arr) {
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}
