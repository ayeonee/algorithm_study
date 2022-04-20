// 연습문제 > 다음 큰 숫자

function solution(n) {
  const binary = n.toString(2);
  const reverseBinary = binary.split("").reverse();
  const idx = reverseBinary.join("").indexOf("10");
  let ansBinary = "";

  if (idx !== -1) {
    reverseBinary.splice(idx, 2, "0", "1");
    ansBinary = [
      ...reverseBinary.slice(0, idx).sort((a, b) => b - a),
      ...reverseBinary.slice(idx),
    ];
  } else {
    reverseBinary.splice(-1, 0, "0");
    const sliceIdx = reverseBinary.length - 2;
    ansBinary = [
      ...reverseBinary.slice(0, sliceIdx).sort((a, b) => b - a),
      ...reverseBinary.slice(sliceIdx),
    ];
  }

  return ansBinary.reduce((sum, cul, idx) => sum + cul * Math.pow(2, idx), 0);
}

// best answer
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
