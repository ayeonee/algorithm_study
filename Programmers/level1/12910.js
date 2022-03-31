function solution(arr, divisor) {
  const ans = arr.filter((v) => v % divisor === 0);
  return ans[0] ? ans.sort((a, b) => a - b) : [-1];
}
