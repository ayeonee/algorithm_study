// Summer/Winter Coding(~2018) > 영어 끝말잇기

function solution(n, words) {
  let idx = 0;
  const set = new Set();
  set.add(words[0]);

  for (let i = 0; i < words.length - 1; i++) {
    if (words[i][words[i].length - 1] !== words[i + 1][0]) {
      idx = i + 1;
      break;
    }
    const length = set.size;
    set.add(words[i + 1]);
    if (length === set.size) {
      idx = i + 1;
      break;
    }
  }

  return idx === 0 ? [0, 0] : [(idx % n) + 1, Math.floor(idx / n) + 1];
}
