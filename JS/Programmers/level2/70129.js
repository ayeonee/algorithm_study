// 월간 코드 챌린지 시즌1 > 이진 변환 반복하기

function solution(s) {
  let cnt = 0;
  let zeroCnt = 0;
  while (s !== "1") {
    const length = s.length;
    s = s.replace(/0/g, "");
    zeroCnt += length - s.length;
    s = s.length.toString(2);
    cnt++;
  }
  return [cnt, zeroCnt];
}
