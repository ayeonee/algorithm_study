// 해시 > 위장

function solution(clothes) {
  const map = new Map();

  clothes.forEach((v) => {
    if (!map.get(v[1])) map.set(v[1], 1);
    else map.set(v[1], map.get(v[1]) + 1);
  });

  let ans = 1;
  map.forEach((v) => (ans = ans * (v + 1)));

  return ans - 1;
}
