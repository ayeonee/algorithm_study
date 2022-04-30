// 2021 카카오 채용연계형 인턴십 > 표 편집

// try 1
function solution(n, k, cmd) {
  const removed = [];
  const table = new Array(n).fill("").map((_, idx) => idx);

  const up = (upStr) => {
    const upArr = upStr.split(" ");
    k = k - Number(upArr[1]);
  };
  const down = (downStr) => {
    const downArr = downStr.split(" ");
    k = k + Number(downArr[1]);
  };
  const remove = () => {
    removed.push([k, table[k]]);
    table.splice(k, 1);
    if (table.length === k) k--;
  };
  const restore = () => {
    const value = removed.pop();
    const [idx, num] = value;
    if (idx === k) {
      if (table[k] > num) {
        k++;
        table.splice(idx, 0, num);
      }
    } else {
      idx < k ? k++ : "";
    }
  };

  cmd.forEach((v) => {
    if (v[0] === "U") up(v);
    else if (v[0] === "D") down(v);
    else if (v === "C") remove();
    else if (v === "Z") restore();
  });

  const answer = new Array(n).fill("O");
  removed.forEach((v) => {
    answer[v[0]] = "X";
  });
  return answer.join("");
}
