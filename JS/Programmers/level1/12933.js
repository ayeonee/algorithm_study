function solution(n) {
  const str = n.toString();
  return Number(str.split("").sort().reverse().join(""));
}

// 숫자 → 문자열 : +숫자 ex. +24 ⇒ “24”
// 문자열 → 숫자 :  문자열*1 ex. “24”*1 ⇒ 24
