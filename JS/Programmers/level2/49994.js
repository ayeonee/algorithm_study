// Summer/Winter Coding(~2018) > 방문 길이

function solution(dirs) {
  let now = [0, 0];
  const ans = new Set();
  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === "U") {
      if (now[1] === 5) continue;
      let next = [now[0], now[1] + 1];
      ans.add([now[0], now[1] + 0.5].join(""));
      now = next;
    } else if (dirs[i] === "D") {
      if (now[1] === -5) continue;
      let next = [now[0], now[1] - 1];
      ans.add([now[0], now[1] - 0.5].join(""));
      now = next;
    } else if (dirs[i] === "R") {
      if (now[0] === 5) continue;
      let next = [now[0] + 1, now[1]];
      ans.add([now[0] + 0.5, now[1]].join(""));
      now = next;
    } else if (dirs[i] === "L") {
      if (now[0] === -5) continue;
      let next = [now[0] - 1, now[1]];
      ans.add([now[0] - 0.5, now[1]].join(""));
      now = next;
    }
  }

  return ans.size;
}
