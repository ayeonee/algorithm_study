function solution(s) {
  return (s.length === 4 || s.length === 6) && s.match(/\D/g) === null;
} // 속도는 이게 더 빠름

function solution2(s) {
  return /^\d{4}$|^\d{6}$/.test(s);
}
