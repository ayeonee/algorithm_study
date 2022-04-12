function solution(x, n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

function solution2(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => v * (i + 1));
}
