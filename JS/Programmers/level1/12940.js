function solution(n, m) {
  let prov = 2,
    max = 1,
    min = 1;
  while (1) {
    if (prov > n || prov > m) {
      min = max * n * m;
      break;
    }

    if (n % prov === 0 && m % prov === 0) {
      n /= prov;
      m /= prov;
      max *= prov;
    } else prov++;
  }
  return [max, min];
}
