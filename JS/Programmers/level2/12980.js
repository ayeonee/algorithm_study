// Summer/Winter Coding(~2018) > 점프와 순간 이동

function solution(n) {
  let ans = 0;
  while (n > 0) {
    if (n % 2) {
      ans++;
      n = (n - 1) / 2;
    } else n = n / 2;
  }
  return ans;
}

function solution2(n) {
  return n.toString(2).match(/1/g).length;
}
