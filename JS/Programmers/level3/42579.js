// 해시 > 베스트앨범

function solution(genres, plays) {
  const songsMap = new Map();
  genres.forEach((v, i) => {
    const value = songsMap.get(v);
    if (!value) songsMap.set(v, [[plays[i], i]]);
    else {
      value.push([plays[i], i]);
      songsMap.set(v, value);
    }
  });

  const mostGenres = [];
  songsMap.forEach((v, i) => {
    if (v.length === 1) mostGenres.push(v[0]);
    else {
      v.sort((a, b) => b[0] - a[0]);
      const sum = v.reduce((acc, cul) => acc + cul[0], 0);
      mostGenres.push([sum, v[0][1], v[1][1]]);
    }
  });
  mostGenres.sort((a, b) => b[0] - a[0]);
  const album = [];
  mostGenres.forEach((v) => {
    if (v.length === 2) album.push(v[1]);
    else album.push(v[1], v[2]);
  });
  return album;
}
