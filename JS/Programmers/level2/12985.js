// 2017 팁스타운 > 예상 대진표

function solution(n, a, b) {
  let answer = 1;
  while (Math.abs(a - b) !== 1 || Math.min(a, b) % 2 === 0) {
    answer++;
    a = a % 2 ? (a + 1) / 2 : a / 2;
    b = b % 2 ? (b + 1) / 2 : b / 2;
  }

  return answer;
}

// better
function solution(n, a, b) {
  let answer = 0;
  while (a != b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
