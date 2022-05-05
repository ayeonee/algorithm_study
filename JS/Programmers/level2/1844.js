// 찾아라 프로그래밍 마에스터 > 게임 맵 최단거리

//try 1 : dfs => 효율성 x
function solution(maps) {
  let answer = 10000;
  const m = maps.length;
  const n = maps[0].length;

  const dfs = (cur_i, cur_j, map, cur_ans) => {
    // 진영도착
    if (cur_i === m - 1 && cur_j === n - 1) {
      if (cur_ans < answer) answer = cur_ans;
      return;
    }

    const copiedMap = [];
    for (let i = 0; i < m; i++) {
      const line = [];
      for (let j = 0; j < n; j++) {
        line.push(map[i][j]);
      }
      copiedMap.push(line);
    }

    copiedMap[cur_i][cur_j] = 0;
    cur_ans++; //한 칸 전진

    // 위로 이동
    if (cur_i - 1 >= 0 && copiedMap[cur_i - 1][cur_j] !== 0) {
      dfs(cur_i - 1, cur_j, copiedMap, cur_ans);
    }

    // 아래로 이동
    if (cur_i + 1 < m && copiedMap[cur_i + 1][cur_j] !== 0) {
      dfs(cur_i + 1, cur_j, copiedMap, cur_ans);
    }

    // 좌로 이동
    if (cur_j - 1 >= 0 && copiedMap[cur_i][cur_j - 1] !== 0) {
      dfs(cur_i, cur_j - 1, copiedMap, cur_ans);
    }

    // 우로 이동
    if (cur_j + 1 < n && copiedMap[cur_i][cur_j + 1] !== 0) {
      dfs(cur_i, cur_j + 1, copiedMap, cur_ans);
    }
  };
  dfs(0, 0, maps, 1);
  return answer === 10000 ? -1 : answer;
}
