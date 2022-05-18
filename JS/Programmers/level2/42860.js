// 탐욕법(Greedy) > 조이스틱

// try1. ing...
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
