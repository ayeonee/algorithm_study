function solution(n) {
  return Array(n)
    .fill("")
    .map((v, i) => (i % 2 ? (v = "박") : "수"))
    .join("");
}

function solution2(n) {
  return `${"수박".repeat(n / 2)}${n % 2 ? "수" : ""}`;
}
