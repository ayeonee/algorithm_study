// 숫자 뒤집어 배열에 담기

// 문자열로 바꾸고 하기
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((v) => v * 1);
}

// 숫자로 그대로 하기
function solution(n) {
  let arr = [];
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return arr;
}
