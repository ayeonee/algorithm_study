// 2018 KAKAO BLIND RECRUITMENT > [1차] 뉴스 클러스터링

function solution(str1, str2) {
  const str1Set = [];
  let intersection = 0;
  let aggregation = 0;

  for (let i = 0; i < str1.length - 1; i++) {
    const first = str1[i].toLowerCase();
    const second = str1[i + 1].toLowerCase();
    if (first.match(/[a-z]/) && second.match(/[a-z]/))
      str1Set.push(first + second);
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const first = str2[i].toLowerCase();
    const second = str2[i + 1].toLowerCase();
    if (first.match(/[a-z]/) && second.match(/[a-z]/)) {
      const str = first + second;
      const matchIdx = str1Set.indexOf(str);
      if (matchIdx !== -1) {
        str1Set.splice(matchIdx, 1);
        intersection++;
      } else aggregation++;
    }
  }
  if (str1Set.length === 0 && intersection === 0 && aggregation === 0)
    return 65536;
  aggregation += str1Set.length + intersection;
  const jakad = intersection / aggregation;
  return Math.floor(jakad * 65536);
}
