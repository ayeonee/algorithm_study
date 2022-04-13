// 깊이/너비 우선 탐색(DFS/BFS) > 타겟 넘버

function solution(numbers, target) {
  let ans = 0;

  const dfs = (index, sum) => {
    if (index === numbers.length) {
      if (sum === target) ans++;
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  };

  dfs(0, 0);

  return ans;
}
