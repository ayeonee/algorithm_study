// 위클리 챌린지 > 최소직사각형

function solution(sizes) {
  const newSizes = sizes.map((v) => (v[0] < v[1] ? [v[1], v[0]] : v));
  let wMax = 0,
    hMax = 0;
  newSizes.forEach((v) => {
    wMax < v[0] ? (wMax = v[0]) : "";
    hMax < v[1] ? (hMax = v[1]) : "";
  });
  return wMax * hMax;
}
