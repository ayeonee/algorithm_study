//2018 KAKAO BLIND RECRUITMENT > [1차] 비밀지도

//my solution
function toBinary(arr, n) {
  return arr.map((v) => {
    const str = v.toString(2);
    return str.length < n ? "0".repeat(n - str.length) + str : str;
  });
}

function solution(n, arr1, arr2) {
  const map1 = toBinary(arr1, n);
  const map2 = toBinary(arr2, n);

  const ans = [];
  for (let i = 0; i < n; i++) {
    let ansStr = "";
    for (let j = 0; j < n; j++) {
      map1[i][j] === "0" && map2[i][j] === "0"
        ? (ansStr += " ")
        : (ansStr += "#");
    }
    ans.push(ansStr);
  }
  return ans;
}

// best solution
function addZero(str, n) {
  return "0".repeat(n - str.length) + str;
}

function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero((v | arr2[i]).toString(2), n)
      .replace(/0/g, " ")
      .replace(/1/g, "#")
  );
}
