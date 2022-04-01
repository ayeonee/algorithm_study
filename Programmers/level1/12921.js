function solution(n) {
  if (n === 2) return 1;
  let ans = 1;
  let arr = [];
  for (let i = 3; i <= n; i += 2) arr.push(i);

  while (arr.length > 0) {
    arr = arr.filter((v) => v % arr[0] !== 0);
    ans++;
  }
  return ans;
}

function solution2(n) {
  if (n === 2) return 1;
  let arr = new Array(n + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((e) => e).length;
}
