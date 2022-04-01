function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i].match("Kim")) return `김서방은 ${i}에 있다`;
  }
}

function solution2(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
