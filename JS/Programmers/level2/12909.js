function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;

  let i = 0,
    open = 0,
    close = 0;
  while (i < s.length) {
    s[i] === "(" ? open++ : close++;
    if (open < close) return false;
    i++;
  }
  return open === close;
}

function solution2(s) {
  let i = 0,
    sum = 0;
  while (i < s.length) {
    s[i] === "(" ? (sum += 1) : (sum += -1);
    if (sum < 0) return false;
    i++;
  }
  return sum === 0 ? true : false;
}
