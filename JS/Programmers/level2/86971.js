// 위클리 챌린지 > 전력망을 둘로 나누기

//try 1 : 아닌 듯해서 다른 방법으로
function solution(n, wires) {
  let answer = -1;
  const tree = new Map();
  wires.forEach((wire) => {
    const wire1 = tree.get(wire[0]);
    const wire2 = tree.get(wire[1]);
    if (!wire1) tree.set(wire[0], [wire[1]]);
    else {
      wire1.push(wire[1]);
      tree.set(wire[0], wire1);
    }
    if (!wire2) tree.set(wire[1], [wire[0]]);
    else {
      wire2.push(wire[0]);
      tree.set(wire[1], wire2);
    }
  });

  tree.forEach((value, key) => {
    if (value.length !== 1) {
      value.forEach((v) => {});
    }
  });
}
