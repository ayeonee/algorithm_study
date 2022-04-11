// 완전탐색 > 모의고사

function solution(answers) {
  const length = answers.length;
  const one = "12345".repeat(length / 5 + 1).split("");
  const two = "21232425".repeat(length / 8 + 1).split("");
  const three = "3311224455".repeat(length / 10 + 1).split("");

  const count = new Array(3).fill(0);
  const ans = [];

  answers.forEach((v, i) => {
    if (v === +one[i]) count[0]++;
    if (v === +two[i]) count[1]++;
    if (v === +three[i]) count[2]++;
  });
  const max = Math.max(...count);
  count.forEach((v, i) => (v === max ? ans.push(i + 1) : ""));
  return ans;
}

function solution2(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const count = new Array(3).fill(0);
  const ans = [];

  answers.forEach((v, i) => {
    if (v === one[i % one.length]) count[0]++;
    if (v === two[i % two.length]) count[1]++;
    if (v === three[i % three.length]) count[2]++;
  });
  const max = Math.max(...count);
  count.forEach((v, i) => (v === max ? ans.push(i + 1) : ""));
  return ans;
}
