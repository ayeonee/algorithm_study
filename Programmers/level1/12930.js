function solution(s) {
  let ans = "";
  const arr = s.split(" ");
  arr.forEach((v, i) => {
    v.split("").forEach((v2, i2) => {
      i2 % 2 === 0 ? (ans += v2.toUpperCase()) : (ans += v2.toLowerCase());
    });
    i !== arr.length - 1 ? (ans += " ") : "";
  });
  return ans;
}
