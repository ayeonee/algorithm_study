// 위클리 챌린지 > 피로도

//try 1 : 68.4점 ㅠ
function solution(k, dungeons) {
  let answer = 0;
  const goToDungen = (dungeon, now, dungeons, visited) => {
    if (dungeons.length === 1 || now <= 0) {
      if (now >= dungeon[0]) visited++;
      if (visited > answer) {
        answer = visited;
        return;
      }
    }

    now -= dungeon[1];
    visited++;

    // 방문한 던전 자르고
    dungeons.splice(dungeons.indexOf(dungeon), 1);
    // 갈 수 있는 곳 중 소모체력 제일 적은 곳으로
    dungeons.sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < dungeons.length; i++) {
      if (dungeons[i][0] <= now) {
        goToDungen(dungeons[i], now, dungeons, visited);
        break;
      }
      if (i === dungeons.length - 1) {
        if (visited > answer) answer = visited;
        return;
      }
    }
  };
  dungeons.forEach((dungeon) => goToDungen(dungeon, k, dungeons.slice(), 0));
  return answer;
}
