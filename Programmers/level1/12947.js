function solution(x) {
  const num = x.toString().slice().split("");
  let sum = 0;
  num.forEach((v) => (sum += Number(v)));
  return x % sum === 0 ? true : false;
}
