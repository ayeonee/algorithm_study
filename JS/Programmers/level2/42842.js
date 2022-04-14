// 완전탐색 > 카펫

function solution(brown, yellow) {
  const wplush = (brown + 4) / 2;
  const wmultih = brown + yellow;

  const sqrt = Math.sqrt(wmultih);
  for (let i = 1; i <= Math.floor(sqrt); i++) {
    if (wmultih % i === 0) {
      const quotient = Math.floor(wmultih / i);
      if (quotient + i === wplush) {
        return [quotient, i];
      }
    }
  }
}
