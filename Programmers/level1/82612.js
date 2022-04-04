//위클리 챌린지 > 부족한 금액 계산하기

function solution(price, money, count) {
  const result = (((count + 1) * count) / 2) * price - money;
  return result > 0 ? result : 0;
}
