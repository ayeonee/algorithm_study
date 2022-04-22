// Summer/Winter Coding(~2018) > 스킬트리

function solution(skill, skill_trees) {
  const checkTree = skill_trees.map((tree) => {
    const idxs = [tree.indexOf(skill[0])];
    for (let i = 1; i < skill.length; i++) {
      const idx = tree.indexOf(skill[i]);
      if (idx > -1 && idxs[i - 1] > idx) return false;
      if (idxs[i - 1] === -1 && idx > -1) return false;
      idxs.push(idx);
    }
    return true;
  });
  return checkTree.filter((v) => v).length;
}
