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

// try 2 : 효율성 실패...
function solution(n, stations, w) {
  let answer = 0;
  let cnt = 0;
  let station = stations.shift();
  for (let i = 1; i <= n; i++) {
    if (i < station - w || i > station + w) cnt++;
    else if (i === station + w) {
      stations.length ? (station = stations.shift()) : "";
    } else if (cnt != 0) {
      answer += Math.ceil(cnt / (w * 2 + 1));
      cnt = 0;
    }
    if (i === n) {
      answer += Math.ceil(cnt / (w * 2 + 1));
      cnt = 0;
    }
  }

  return answer;
}

// try 3 : success!!
function solution(n, stations, w) {
  const calculate = (x) => Math.ceil(x / (w * 2 + 1));
  let answer = calculate(stations[0] - w - 1);
  for (let i = 1; i <= stations.length; i++) {
    answer +=
      i === stations.length
        ? calculate(n - stations[i - 1] - w)
        : calculate(stations[i] - w * 2 - 1 - stations[i - 1]);
  }
  return answer;
}
