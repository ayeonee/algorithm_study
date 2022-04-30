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

// try 2 : success !!!
function solution(places) {
  const answer = [];

  const newPlaces = places.map((v) => {
    v.splice(0, 0, "XXXXX");
    v.push("XXXXX");
    return v.map((el) => `X${el}X`);
  });

  const checkP = (i, j, k) => {
    if (
      newPlaces[i][j - 1][k] === "P" ||
      newPlaces[i][j + 1][k] === "P" ||
      newPlaces[i][j][k - 1] === "P" ||
      newPlaces[i][j][k + 1] === "P"
    )
      return true;
    return false;
  };

  const checkO = (i, j, k) => {
    let cnt = 0;
    if (newPlaces[i][j - 1][k] === "P") cnt++;
    if (newPlaces[i][j + 1][k] === "P") cnt++;
    if (newPlaces[i][j][k - 1] === "P") cnt++;
    if (newPlaces[i][j][k + 1] === "P") cnt++;
    return cnt >= 2 ? true : false;
  };

  loop: for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= 5; j++) {
      for (let k = 1; k <= 5; k++) {
        if (newPlaces[i][j][k] === "P") {
          if (checkP(i, j, k)) {
            answer.push(0);
            continue loop;
          }
        }
        if (newPlaces[i][j][k] === "O") {
          if (checkO(i, j, k)) {
            answer.push(0);
            continue loop;
          }
        }
      }
    }
    answer.push(1);
  }
  return answer;
}
