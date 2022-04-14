// 정렬 > H-Index

function solution(citations) {
  if (citations.length === 1) citations[0] === 0 ? 0 : 1;
  const sorted = citations.slice().sort((a, b) => b - a);
  const length = sorted.length;
  let ans = 0;

  if (sorted[length - 1] > length) return length;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] <= i + 1) {
      ans = sorted[i] < i ? i : sorted[i];
      break;
    }
  }
  return ans ? ans : 0;
}

function solution2(citations) {
  const sorted = citations.slice().sort((a, b) => b - a);
  let ans = 0;
  for (let i = 0; i < citations.length; i++) {
    if (i < sorted[i]) ans++;
    else break;
  }

  return ans;
}
