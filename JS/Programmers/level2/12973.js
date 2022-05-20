// 2017 팁스타운 > 짝지어 제거하기

function solution(s) {
  if (s.length % 2) return 0;
  const stack = [];
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
  }
  return stack.length ? 0 : 1;
}
