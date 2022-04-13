// 2021 카카오 채용연계형 인턴십 > 숫자 문자열과 영단어

function solution(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let str = s;

  words.forEach((v, i) => (str = str.replace(new RegExp(v, "g"), i + "")));
  return +str;
}
