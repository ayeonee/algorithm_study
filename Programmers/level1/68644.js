// 월간 코드 챌린지 시즌1 > 두 개 뽑아서 더하기

function solution(numbers) {
  const ans = [];
  const sum = Array(Math.max(...numbers) * 2 + 1).fill(false);
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++)
      sum[numbers[i] + numbers[j]] = true;
  }
  sum.forEach((v, i) => (v ? ans.push(i) : ""));
  return ans;
}

function solution2(numbers) {
  const sum = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++)
      sum.push(numbers[i] + numbers[j]);
  }
  const ans = [...new Set(sum)];
  return ans.sort((a, b) => a - b);
}
