// 월간 코드 챌린지 시즌2 > 괄호 회전하기

// try 1 : 시간이 오래 걸리는 듯 (14번 테케 fail)
function solution(s) {
  let ans = 0;
  const length = s.length;
  if (length % 2 === 1) return 0;
  const arr = s.split("").map((v) => {
    if (v === "(") return 1;
    else if (v === "[") return 2;
    else if (v === "{") return 3;
    else if (v === ")") return -1;
    else if (v === "]") return -2;
    else if (v === "}") return -3;
  });

  for (let i = 0; i < length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum < 0 || (arr[j] < 0 && !arr.slice(i, j).includes(arr[j] * -1))) {
        arr.push(arr[i]);
        break;
      }
      if (j === arr.length - 1 && sum === 0) {
        arr.push(arr[i]);
        ans++;
      }
    }
  }
  return ans;
}

// try 2 (14번 테케 fail)
function solution(s) {
  let ans = 0;
  const length = s.length;
  if (length % 2 === 1) return 0;
  const arr = s.split("");
  for (let i = 0; i < length; i++) {
    const cnt = [0, 0, 0];

    for (let j = i; j < arr.length; j++) {
      if (arr[j] === "(") cnt[0]++;
      else if (arr[j] === "[") cnt[1]++;
      else if (arr[j] === "{") cnt[2]++;
      else if (arr[j] === ")") cnt[0]--;
      else if (arr[j] === "]") cnt[1]--;
      else if (arr[j] === "}") cnt[2]--;

      if (cnt[0] < 0 || cnt[1] < 0 || cnt[2] < 0) break;
      if (
        j === arr.length - 1 &&
        cnt[0] === 0 &&
        cnt[1] === 0 &&
        cnt[2] === 0
      ) {
        ans++;
      }
    }
    arr.push(arr[i]);
  }
  return ans;
}

// ans : () 이렇게 안 겹쳐질 때 빼주면 되는거엿슴...
function solution(s) {
  let ans = 0;
  const length = s.length;
  if (length % 2 === 1) return 0;
  const arr = s.split("");
  const pair = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const isValid = (str) => {
    const stack = [];
    for (let i = 0; i < length; i++) {
      const s = str[i];
      if (pair[s] === undefined) stack.push(s);
      else {
        if (pair[s] !== stack[stack.length - 1]) return false;
        stack.pop();
      }
    }
    if (stack.length) return false;
    return true;
  };

  for (let i = 0; i < length; i++) {
    if (isValid(arr)) ans++;
    arr.push(arr.shift());
  }
  return ans;
}
