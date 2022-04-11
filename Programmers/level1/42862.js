// 탐욕법(Greedy) > 체육복

function solution(n, lost, reserve) {
  const student = new Array(n).fill(1);
  lost.forEach((v) => student[v - 1]--);
  reserve.forEach((v) => student[v - 1]++);

  for (let i = 0; i < student.length; i++) {
    if (student[i] === 0) {
      if (student[i - 1] === 2) {
        student[i - 1]--;
        student[i]++;
      } else if (student[i + 1] === 2) {
        student[i + 1]--;
        student[i]++;
      }
    }
  }
  return student.filter((v) => v > 0).length;
}
