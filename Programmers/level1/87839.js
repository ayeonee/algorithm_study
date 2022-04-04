// 월간 코드 챌린지 시즌3 > 나머지가 1이 되는 수 찾기

function solution(n) {
  if (n % 2) return 2;
  let i = 3;
  while (i < n) {
    if ((n - 1) % i === 0) return i;
    i++;
  }
}
