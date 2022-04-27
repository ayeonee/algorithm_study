// 2020 카카오 인턴십 > 수식 최대화

//..ing
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
