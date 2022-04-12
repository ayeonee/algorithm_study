// 정렬 > K번째수

function solution(array, commands) {
  const ans = [];
  commands.forEach((v) => {
    const copiedArr = array
      .slice()
      .splice(v[0] - 1, v[1] - v[0] + 1)
      .sort((a, b) => a - b);
    ans.push(copiedArr[v[2] - 1]);
  });
  return ans;
}
