// Summer/Winter Coding(2019) > 멀쩡한 사각형

function solution(w, h) {
  if (w === 1 || h === 1) return 0;
  if (w === h) return w * h - w;

  const gcd = (x, y) => {
    return x % y ? gcd(y, x % y) : y;
  };

  return w * h - w - h + gcd(w, h);
}
