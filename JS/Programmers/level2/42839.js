// 완전탐색 > 소수 찾기

//try 1

function solution(numbers) {
  const nums = numbers.split("").map((v) => +v);
  const max = Math.max(...nums) + "";
  const prime = new Array(+max.repeat(numbers.length) + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= prime.length; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= prime.length; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.filter((v, idx) => {
    if (v) {
      const str = idx + "";
      const arr = str.split("");
      const numArr = new Array(numbers.length).fill(false);

      for (let i = 0; i < arr.length; i++) {
        const numIdx = numbers.indexOf(arr[i]);

        if (numIdx !== -1 && !numArr[numIdx]) {
          numArr[numIdx] = true;
          if (i === arr.length - 1) {
            numArr.fill(false);
            return idx;
          }
        } else break;
      }
    }
  });
}

// try 2 ㅠㅠ

function solution(numbers) {
  const nums = numbers.split("");
  const num = [];
  const possibleNum = new Set();

  const makesNum = (idx, num) => {
    if (idx === nums.length) {
      if (num.length !== 0) {
        possibleNum.add(num.join(""));
      }
      num.pop();
      return;
    } else num.push(nums[idx]);

    makesNum(idx + 1, num);
    makesNum(idx + 1, num);
  };

  makesNum(0, num);

  return [...possibleNum];
}

// ans

function solution(numbers) {
  const nums = numbers.split("");

  const getNumber = (arr, n) => {
    if (n === 1) return arr.map((v) => [v]);
    const result = [];

    arr.forEach((value, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 조합이면 rest = origin.slice(index + 1);
      const permutations = getNumber(rest, n - 1);
      const attached = permutations.map((permutation) => [
        value,
        ...permutation,
      ]);
      result.push(...attached);
    });

    return result;
  };

  const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const completedNum = [];
  for (let i = 1; i <= numbers.length; i++) {
    completedNum.push(...getNumber(nums, i).map((v) => +v.join("")));
  }

  const set = new Set(completedNum);
  return [...set].filter((v) => isPrime(v)).length;
}
