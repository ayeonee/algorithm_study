// 탐욕법(Greedy) > 조이스틱

// try1. ing... => x
function solution(name) {
  var answer = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] < "M") answer += name[i].charCodeAt(0) - 65;
    else answer += 91 - name[i].charCodeAt(0);
  }
  answer += name.length - 1; // 마지막 칸 이동x
  if (answer.length === 2 && answer.indexOf("A") !== -1) answer--;
  else if (answer.length > 2 && answer[1] === "A") answer--;
  return answer;
}

function solution(name) {
  let answer = 0;
  let minMove = name.length - 1;
  for (let i = 0; i < name.length; i++) {
    if (name[i] < "N") answer += name[i].charCodeAt(0) - 65;
    else answer += 91 - name[i].charCodeAt(0);
  }

  for (let i = 1; i < name.length; i++) {
    if (name[i] === "A") {
      const left = i - 1;
      let right = 0;
      for (let j = i + 1; j < name.length; j++) {
        if (name[j] !== "A") {
          i = j;
          right = name.length - j;
          break;
        }
      }
      minMove = Math.min(
        minMove,
        left > right ? left + right * 2 : left * 2 + right
      );
    }
  }
  return answer + minMove;
}
