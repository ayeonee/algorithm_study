// 위클리 챌린지 > 교점에 별 만들기

function solution(line) {
  const length = line.length;
  const stars = [];
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      const [A, B, E] = line[i];
      const [C, D, F] = line[j];

      const deno = A * D - B * C;
      if (deno === 0) continue;
      const x = (B * F - E * D) / deno;
      if (x % 1 !== 0) continue;
      const y = (E * C - A * F) / deno;
      if (y % 1 !== 0) continue;

      stars.push([y, x]);
    }
  }
  if (stars.length === 1) return ["*"];
  const stars_x = stars.map((star) => star[0]);
  const stars_y = stars.map((star) => star[1]);
  const max_x = Math.max(...stars_x);
  const max_y = Math.max(...stars_y);
  const min_x = Math.min(...stars_x);
  const min_y = Math.min(...stars_y);

  const coordi = new Array(max_x - min_x + 1)
    .fill(".")
    .map(() => new Array(max_y - min_y + 1).fill("."));
  stars.forEach((star) => {
    const [x, y] = star;
    coordi[max_x - x][y - min_y] = "*";
  });

  return coordi.map((c) => c.join(""));
}
