// 탐욕법(Greedy) > 큰 수 만들기

// try 1 : 83.3점
function solution(number, k) {
  const answer = [];
  const arr = number.split("").map((v) => +v);
  let max = Math.max(...arr);
  let idx = number.indexOf(max);
  while (1) {
    if (idx > k) {
      max = Math.max(...arr.slice(0, idx));
      idx = number.indexOf(max);
    } else {
      k -= idx;
      answer.push(max);
      arr.splice(0, idx + 1);
      break;
    }
  }

  for (let i = 0; i < k; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        arr.splice(j, 1);
        break;
      }
      if (j === arr.length - 2) return arr.slice(0, arr.length - k).join("");
    }
  }
  answer.push(...arr);
  return answer.join("");
}

// try 2
function solution(number, k) {
  const answer = [];
  for (let i = 0; i < number.length; i++) {
    while (k > 0 && answer[answer.length - 1] < number[i]) {
      k--;
      answer.pop();
    }
    answer.push(number[i]);
  }
  answer.splice(answer.length - k, k);
  return answer.join("");
}
