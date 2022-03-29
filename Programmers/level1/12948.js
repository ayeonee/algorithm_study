function solution(phone_number) {
  let answer = phone_number.slice(0).split("");
  for (let i = 0; i < answer.length; i++) {
    if (i < answer.length - 4) {
      answer[i] = "*";
    }
  }
  return answer.join("");
}

function solution2(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}
