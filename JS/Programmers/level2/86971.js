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

// try 2 => success
function solution(n, wires) {
  if (n === 2) return 0;
  if (n === 3) return 1;
  let answer = 100;
  const tree = {};
  wires.forEach((wire) => {
    const [from, to] = wire;
    tree[from] ? tree[from].push(to) : (tree[from] = [to]);
    tree[to] ? tree[to].push(from) : (tree[to] = [from]);
  });
  wires.forEach((wire) => {
    const [from, to] = wire;
    const fIdx = tree[from].indexOf(to);
    const tIdx = tree[to].indexOf(from);

    tree[from].splice(fIdx, 1);
    tree[to].splice(tIdx, 1);

    const visited = findTree(from, []);
    const diff = Math.abs(n - visited.length * 2);
    if (answer > diff) answer = diff;

    tree[from].push(to);
    tree[to].push(from);
  });
  function findTree(node, visited) {
    visited.push(node);
    tree[node].forEach((v) => {
      if (visited.includes(v)) return;
      visited.push(v);
      if (tree[v].length === 1) return;
      else {
        tree[v].forEach((v2) => {
          if (v2 !== node) findTree(v2, visited);
        });
      }
    });
    return visited;
  }
  return answer;
}

// try 3 => 질문하기에 있는 풀이, 시간 오래 걸림
function solution(n, wires) {
  if (n === 2) return 0;
  if (n === 3) return 1;
  let answer = 100;

  for (let i = 0; i < wires.length; i++) {
    const tree = {};
    wires.forEach((wire, idx) => {
      if (idx !== i) {
        const [from, to] = wire;
        tree[from] ? tree[from].push(to) : (tree[from] = [to]);
        tree[to] ? tree[to].push(from) : (tree[to] = [from]);
      }
    });
    const visited = findTree(tree, +Object.keys(tree)[0], []);
    const diff = Math.abs(n - visited.length * 2);
    if (answer > diff) answer = diff;
  }

  function findTree(tree, node, visited) {
    visited.push(node);
    tree[node].forEach((v) => {
      if (visited.includes(v)) return;
      visited.push(v);
      if (tree[v].length === 1) return;
      else {
        tree[v].forEach((v2) => {
          if (v2 !== node) findTree(tree, v2, visited);
        });
      }
    });
    return visited;
  }
  return answer;
}
