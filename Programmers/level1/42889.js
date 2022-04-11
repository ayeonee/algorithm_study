// 2019 KAKAO BLIND RECRUITMENT > 실패율

function solution(N, stages) {
  const percent = new Array(N + 1).fill(0).map(() => new Array(2).fill(0));
  const ans = [];
  stages.forEach((v) => percent[v - 1][0]++);
  percent.forEach((v, i) => {
    if (i === 0) percent[i][1] = stages.length;
    else {
      percent[i][1] = percent[i - 1][1] - percent[i - 1][0];
    }
    ans.push([percent[i][0] / percent[i][1], i + 1]);
  });
  ans.splice(ans.length - 1, 1);
  return ans.sort((a, b) => b[0] - a[0]).map((v) => v[1]);
}

// 깔끔은 하나 시간 훨씬 오래 걸림!
function solution2(N, stages) {
  const ans = [];

  for (let i = 1; i <= N; i++) {
    const notClear = stages.filter((v) => v === i).length;
    const clear = stages.filter((v) => v >= i).length;
    ans.push([notClear / clear, i]);
  }
  ans.sort((a, b) => b[0] - a[0]);
  return ans.map((v) => v[1]);
}
