// 연습문제 > 124 나라의 숫자

//try 1 : 숫자 300 이상 넘어가면 런타임에러,,,
function solution(n) {
  let i = 1,
    sum = 0;
  while (sum < n) {
    sum += Math.pow(3, i);
    i++;
  }

  const str = "1".repeat(i - 1) + "2".repeat(i - 1) + "4".repeat(i - 1);
  const arr = str.split("");
  function p(arr, num) {
    if (num === 1) return arr;
    const results = [];
    arr.forEach((v, idx, origin) => {
      const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
      const result = p(rest, num - 1);
      const attached = result.map((v2) => [v, ...v2].join(""));
      results.push(...attached);
    });
    return results;
  }
  const set = [...new Set(p(arr, i - 1))];
  return set[n - sum + Math.pow(3, i - 1) - 1];
}

// ans
function solution(n) {
  const arr = [4, 1, 2];
  let ans = "";
  while (n > 0) {
    ans = arr[n % 3] + ans;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }
  return ans;
}
