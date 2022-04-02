function solution(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let ans = 0;
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) n / i === i ? (ans += i) : (ans += i + n / i);
  }
  return ans;
}
