function solution(n) {
  let result = 0;
  do {
    result += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);

  return result;
}
