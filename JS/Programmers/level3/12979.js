// Summer/Winter Coding(~2018) > 기지국 설치

// try 1 : 효율성 실패 ㅠ
function solution(n, stations, w) {
  let answer = 0;
  const apart = new Array(n + 1).fill(false);

  apart.push(true);

  stations.forEach((v) => {
    apart[v] = true;
    for (let i = 1; i <= w; i++) {
      apart[v - i] = true;
      if (v + i < apart.length) apart[v + i] = true;
    }
  });

  let cnt = 0;
  for (let i = 1; i < apart.length; i++) {
    if (!apart[i]) cnt++;
    else if (cnt != 0) {
      answer += Math.ceil(cnt / (w * 2 + 1));
      cnt = 0;
    }
  }
  return answer;
}
