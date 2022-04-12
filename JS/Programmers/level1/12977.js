// Summer/Winter Coding(~2018) > 소수 만들기

function solution(nums) {
  const sums = new Array(Math.max(...nums) * 3 - 2)
    .fill(0)
    .map(() => new Array(2).fill(0));

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sums[nums[i] + nums[j] + nums[k]][0]++;
      }
    }
  }

  for (let i = 2; i < sums.length; i++) {
    if (sums[i][1] === 0) {
      for (let j = i * i; j < sums.length; j += i) {
        sums[j][1] = 1;
      }
    }
  }

  let ans = 0;
  sums.forEach((v) => {
    if (v[0] > 0 && v[1] === 0) {
      ans += v[0];
    }
  });

  return ans;
}
