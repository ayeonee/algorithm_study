// 2020 카카오 인턴십 > 수식 최대화

//..ing => fail!!
function solution(expression) {
  const ans = [];
  const calculate = (first, second) => {
    return Math.abs(
      eval(
        expression
          .replace(new RegExp(`\\d+\\${first}\\d+`, "g"), (value) =>
            eval(value)
          )
          .replace(new RegExp(`-?\\d+\\${second}-?\\d+`, "g"), (value) =>
            eval(value)
          )
      )
    );
  };

  ans.push(calculate("*", "-"));
  ans.push(calculate("*", "+"));
  ans.push(calculate("+", "*"));
  ans.push(calculate("+", "-"));
  ans.push(calculate("-", "*"));
  ans.push(calculate("-", "+"));

  return Math.max(...ans);
}

// ans
function solution(expression) {
  const prior = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];
  const answer = [];

  for (let i = 0; i < prior.length; i++) {
    const arr = expression.split(/(\D)/);
    for (let j = 0; j < 3; j++) {
      const operator = prior[i][j];
      while (arr.includes(operator)) {
        const idx = arr.indexOf(operator);
        arr.splice(idx - 1, 3, eval(arr.slice(idx - 1, idx + 2).join("")));
      }
    }
    answer.push(Math.abs(...arr));
  }
  return Math.max(...answer);
}
