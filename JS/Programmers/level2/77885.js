// 월간 코드 챌린지 시즌2 > 2개 이하로 다른 비트

function solution(numbers) {
  return numbers.map((number) => {
    const binary = number.toString(2);
    if (binary.match(/0$/)) return number + 1;
    else {
      const idx = binary.lastIndexOf("01");
      const length = binary.length;
      if (idx === -1) return number + Math.pow(2, length - 1);
      return number + Math.pow(2, length - idx - 2);
    }
  });
}
