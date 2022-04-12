// 월간 코드 챌린지 시즌1 > 내적

function solution(a, b) {
  return a.reduce((sum, cul, i) => sum + cul * b[i], 0);
}
