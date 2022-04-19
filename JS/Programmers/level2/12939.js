// 연습문제 > 최댓값과 최솟값

function solution(s) {
  const nums = s.split(" ").map((v) => +v);
  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}
