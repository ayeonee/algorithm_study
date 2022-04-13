// 2021 Dev-Matching: 웹 백엔드 개발자(상반기) > 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  const copiednums = win_nums.slice();
  let match = 7;
  let zero = 0;
  lottos.forEach((v) => {
    if (v === 0) zero++;
    else {
      for (let i = 0; i < copiednums.length; i++) {
        if (v === copiednums[i]) {
          match--;
          return;
        }
      }
    }
  });
  const lank = match > 6 ? 6 : match;
  return zero === 6 ? [1, 6] : [lank - zero, lank];
}
