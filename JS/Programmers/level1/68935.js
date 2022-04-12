// 월간 코드 챌린지 시즌1 > 3진법 뒤집기

function solution(n) {
  return n
    .toString(3)
    .split("")
    .reduce((sum, cul, idx) => +sum + +cul * Math.pow(3, idx), 0);
}

function solution2(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
