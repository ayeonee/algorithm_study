// 스택/큐 > 프린터

function solution(priorities, location) {
  const map = priorities.map((v, i) => [v, i]);
  const ans = [];
  while (map.length > 0) {
    const first = map.shift();
    const rest = map.slice(0).map((v) => v[0]);
    first[0] < Math.max(...rest) ? map.push(first) : ans.push(first);
  }

  for (let i = 0; i < ans.length; i++) {
    if (ans[i][1] === location) return i + 1;
  }
}
