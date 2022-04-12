// 월간 코드 챌린지 시즌2 > 음양 더하기

function solution(absolutes, signs) {
  return absolutes.reduce(
    (sum, cul, idx) => sum + cul * (signs[idx] ? 1 : -1),
    0
  );
}
