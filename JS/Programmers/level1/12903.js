function solution(s) {
  const length = s.length;
  return length % 2
    ? s[Math.floor(length / 2)]
    : s[length / 2 - 1] + s[length / 2];
}

function solution2(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 ? 1 : 2);
}
