// Summer/Winter Coding(~2018) > 숫자 게임

function solution(A, B) {
  let answer = 0;
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => a - b);

  let a = 0,
    b = 0;
  while (b < B.length) {
    if (sortedA[a] < sortedB[b]) {
      a++;
      b++;
      answer++;
    } else {
      b++;
    }
  }

  return answer;
}
