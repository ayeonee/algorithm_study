// 월간 코드 챌린지 시즌 2 > 약수의 개수와 덧셈

function solution(left, right) {
  const minSqrt = Math.ceil(Math.sqrt(left));
  const maxSqrt = Math.floor(Math.sqrt(right));
  let sum = ((left + right) * (right - left + 1)) / 2;

  for (let i = minSqrt; i <= maxSqrt; i++) {
    sum -= i ** 2 * 2;
  }
  return sum;
}

function solution2(left, right) {
  let ans = 0;
  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1) ans += i;
    else ans -= i;
  }
  return ans;
}

//solution1이 더 빠름!
