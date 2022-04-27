// 2019 카카오 개발자 겨울 인턴십 > 튜플

function solution(s) {
  const map = new Map();
  s.match(/\d+/g).forEach((el) => {
    if (!map.get(el)) map.set(el, 1);
    else map.set(el, map.get(el) + 1);
  });
  const ans = [...map].sort((a, b) => b[1] - a[1]);
  return ans.map((v) => +v[0]);
}

function solution2(s) {
  return JSON.parse(s.replace(/{/g, "["), replace(/}/g, "["))
    .sort((a, b) => a.length - b.length)
    .reduce((arr, cul, idx) => {
      if (idx) return arr.concat(cul.filter((v) => !arr.includes(v)));
      return cul;
    }, []);
}
