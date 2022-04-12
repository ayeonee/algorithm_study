function solution(strings, n) {
  const mapped = strings.map((v, i) => {
    return { index: i, value: v[n], origin: v };
  });

  const ans = mapped
    .sort((a, b) => {
      if (a.value === b.value) {
        return a.origin >= b.origin ? 1 : -1;
      }
      return a.value > b.value ? 1 : -1;
    })
    .map((v) => {
      return strings[v.index];
    });

  return ans;
}

function solution2(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1;
    }
    return a[n] > b[n] ? 1 : -1;
  });
}
