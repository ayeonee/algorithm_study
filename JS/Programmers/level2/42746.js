// 정렬 > 가장 큰 수

function solution(numbers) {
  const ans = numbers
    .map((v) => v + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  return ans[0] === "0" ? "0" : ans;
}
