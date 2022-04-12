// 2018 KAKAO BLIND RECRUITMENT > [1차] 다트 게임 ..ing

function solution(dartResult) {
  const calculateNum = dartResult
    .match(/\d[S|D|T]|\d{2}[S|D|T]|[*]|[#]/g)
    .map((v, i) => {
      if (v.match("S")) return +v.slice(0, -1);
      else if (v.match("D")) return Math.pow(v.slice(0, -1), 2);
      else if (v.match("T")) return Math.pow(v.slice(0, -1), 3);
      else return v;
    });

  let addNum = [];
  calculateNum.splice(0, 0, 0);
  calculateNum.forEach((v, i) => {
    if (v === "#") addNum[addNum.length - 1] = addNum[addNum.length - 1] * -1;
    else if (v === "*") {
      addNum[addNum.length - 1] = addNum[addNum.length - 1] * 2;
      addNum[addNum.length - 2] = addNum[addNum.length - 2] * 2;
    } else addNum.push(v);
  });
  return addNum.reduce((add, cul) => add + cul);
}
