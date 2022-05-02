// Summer/Winter Coding(~2018) > 스티커 모으기(2)

// try 1 : fail
function solution(sticker) {
  if (sticker.length === 1) return sticker[0];
  let a = 0,
    b = 0;
  const length = sticker.length;
  if (length % 2 === 0) {
    sticker.forEach((v, i) => (i % 2 ? (a += v) : (b += v)));
  } else {
    const idx = sticker.indexOf(Math.min(...sticker));
    let cnt = 1;
    let idxA = idx === length - 1 ? 0 : idx + 1;
    let idxB = idx + 2 >= length ? (idx + 2) % length : idx + 2;
    a = sticker[idxA];
    b = sticker[idxB];
    while (cnt < Math.floor(length / 2)) {
      idxA += 2;
      idxB += 2;

      if (idxA >= length) idxA = idxA % length;
      if (idxB >= length) idxB = idxB % length;

      a += sticker[idxA];
      b += sticker[idxB];
      cnt++;
    }
  }
  return a > b ? a : b;
}
