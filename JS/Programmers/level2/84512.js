// 위클리 챌린지 > 모음사전

function solution(word) {
  // 첫 번째 문자로 시작하는 것(A~) = 781개 (1+5+25+125+625)
  // 두 번째 문자로 시작하는 것(AA~) = 156개 (1+5+25+125+625)
  // 세 번째 문자로 시작하는 것(AAA~) = 31개 (1+5+25)
  // 네 번째 문자로 시작하는 것(AAAA~) = 6개 (1+5)
  let ans = 0;
  const alpha = ["A", "E", "I", "O", "U"];
  const cnt = [781, 156, 31, 6, 1];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < alpha.length; j++) {
      if (word[i] === alpha[j]) {
        ans += cnt[i] * j + 1;
        break;
      }
    }
  }
  return ans;
}
