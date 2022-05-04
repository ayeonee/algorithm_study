// 월간 코드 챌린지 시즌3 > n^2 배열 자르기

function solution(n, left, right) {
  const arr = [];

  for (let i = left + 1; i <= right + 1; i++) {
    const d = i % n;
    if (d === 0) arr.push(n);
    else {
      const s = Math.ceil(i / n);
      s >= d ? arr.push(s) : arr.push(d);
    }
  }
  return arr;
}
