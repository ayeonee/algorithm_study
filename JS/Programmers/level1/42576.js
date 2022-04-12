// 해시 > 완주하지 못한 선수

function solution(participant, completion) {
  const sortedPart = participant.slice().sort();
  const sortedComple = completion.slice().sort();

  for (let i = 0; i < sortedPart.length; i++) {
    if (sortedPart[i] !== sortedComple[i]) return sortedPart[i];
  }
}

// 해시 사용
function solution2(participant, completion) {
  const map = new Map();

  participant.forEach((v) => {
    if (!map.get(v)) map.set(v, 1);
    else map.set(v, map.get(v) + 1);
  });

  completion.forEach((v) => {
    if (map.get(v)) map.set(v, map.get(v) - 1);
  });

  for (let i = 0; i < participant.length; i++) {
    if (map.get(participant[i]) > 0) return participant[i];
  }
}
