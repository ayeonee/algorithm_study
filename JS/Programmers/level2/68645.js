// 월간 코드 챌린지 시즌1 > 삼각 달팽이

// ...ing
function solution(n) {
  let answer = [];
  let sum = 0;
  const triangle = new Array(n).fill(0).map((_, idx) => {
    sum += idx + 1;
    return new Array(idx + 1).fill(0);
  });

  let direction = 0,
    d_l = 0,
    d_r = 0,
    r_l = n - 1,
    r_r = 1,
    u_l = n - 2,
    u_r = n - 2;
  for (let i = 1; i <= sum; i++) {
    // down
    if (direction % 3 === 0) {
      triangle[d_l][d_r] = i;
      d_l++;
      if (d_l > n || triangle[d_l][d_r] === 0) {
        direction++;
        d_r++;
        i--;
      }
    }
    // right
    else if (direction % 3 === 1) {
      triangle[r_l][r_r] = i;
      r_r++;
      if (r_r > n || triangle[r_l][r_r] === 0) {
        direction++;
        r_l--;
        i--;
      }
    }
    // up
    else if (direction % 3 === 2) {
      triangle[u_l][u_r] = i;
      u_l--;
      if (u_l < 1 || triangle[u_l][u_r] === 0) {
        direction++;
        u_r--;
        i--;
      }
    }
  }
  return triangle;
}
