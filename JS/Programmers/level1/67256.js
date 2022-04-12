// 2020 카카오 인턴십 > 키패드 누르기

function solution(numbers, hand) {
  const coordi = numbers.map((v) =>
    v === 0 ? [3, 1] : [parseInt((v - 1) / 3), (v - 1) % 3]
  );

  let L = [3, 0],
    R = [3, 2];
  let ans = "";

  const moveL = (v) => {
    L = v;
    ans += "L";
  };
  const moveR = (v) => {
    R = v;
    ans += "R";
  };

  coordi.forEach((v) => {
    if (v[1] === 0) moveL(v);
    else if (v[1] === 2) moveR(v);
    else {
      const LtoV = Math.abs(v[0] - L[0]) + Math.abs(v[1] - L[1]);
      const RtoV = Math.abs(v[0] - R[0]) + Math.abs(v[1] - R[1]);

      if (LtoV < RtoV) moveL(v);
      else if (LtoV > RtoV) moveR(v);
      else hand === "left" ? moveL(v) : moveR(v);
    }
  });
  return ans;
}
