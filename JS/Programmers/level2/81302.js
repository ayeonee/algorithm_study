// 2021 카카오 채용연계형 인턴십 > 거리두기 확인하기

// try1 : fail!!!
function solution(places) {
  const ans = [];

  loop: for (let k = 0; k < 5; k++) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (places[k][i][j] === "P") {
          if (
            places[k][i][j + 1] === "P" ||
            places[k][i + 1][j] === "P" ||
            (places[k][i][j + 1] === "O" &&
              j !== 3 &&
              places[k][i][j + 2] === "P") ||
            (places[k][i + 1][j] === "O" &&
              i !== 3 &&
              places[k][i + 2][j] === "P") ||
            (places[k][i + 1][j + 1] === "P" &&
              places[k][i][j + 1] !== "X" &&
              places[k][i + 1][j] !== "X") ||
            (i !== 0 &&
              places[k][i - 1][j + 1] === "P" &&
              places[k][i][j + 1] !== "X" &&
              places[k][i - 1][j] !== "X")
          ) {
            ans.push(0);
            continue loop;
          }
        }
      }
    }
    ans.push(1);
  }

  return ans;
}
