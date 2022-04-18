// 연습문제 > JadenCase 문자열 만들기

function solution(s) {
  return s.toLowerCase().replace(/^[a-z]|\s+\w/g, (match) => {
    const endChar = match.length - 1;
    return match.substr(0, endChar) + match[endChar].toUpperCase();
  });
}
