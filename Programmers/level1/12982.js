// Summer/Winter Coding(~2018) > 예산

function solution(d, budget) {
  if (d.length === 1) return budget >= d[0] ? 1 : 0;

  const sorted = d.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < sorted.length; i++) {
    sum += sorted[i];
    if (sum > budget) return i;
    else if (sum === budget || i === sorted.length - 1) return i + 1;
  }
}
