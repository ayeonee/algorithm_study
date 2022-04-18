// 연습문제 > 피보나치 수

function solution(n) {
  // function fibonacci (n) {
  //     if (n === 0) return 0;
  //     if (n === 1) return 1;
  //     else return fibonacci(n - 1) + fibonacci(n - 2);
  // }

  const fibo = new Array(n + 1);
  fibo[0] = 0;
  fibo[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibo[i] = (fibo[i - 1] % 1234567) + (fibo[i - 2] % 1234567);
  }

  return fibo[n] >= 1234567 ? fibo[n] % 1234567 : fibo[n];
}
