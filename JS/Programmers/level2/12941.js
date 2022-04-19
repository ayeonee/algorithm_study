// 연습문제 > 최솟값 만들기

function solution(A, B) {
  const sortedA = A.slice().sort((a, b) => a - b);
  const sortedB = B.slice().sort((a, b) => b - a);

  return sortedA.reduce((sum, cul, idx) => sum + cul * sortedB[idx], 0);
}
