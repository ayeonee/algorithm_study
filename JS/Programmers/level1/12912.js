function solution(a, b) {
  let ans = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    ans += i;
  }
  return ans;
}

function solution2(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
